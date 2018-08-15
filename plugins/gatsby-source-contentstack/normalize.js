const crypto = require("crypto");
const { map, reduce, parallel } = require("asyncro");


exports.processContentType = (content_type, createNodeId) => {
    const nodeId = createNodeId(`contentstack-contentType-${content_type.uid}`);
    const nodeContent = JSON.stringify(content_type);
    const nodeContentDigest = crypto
    .createHash('md5')
    .update(nodeContent)
    .digest('hex');
    const nodeData = Object.assign({}, content_type, {
        id: nodeId,
        parent: null,
        children: [],
        internal: {
            type: `ContentstackContentTypes`,
            content: nodeContent,
            contentDigest: nodeContentDigest,
        },
    });
    return nodeData;
}

exports.processEntry = (content_type, entry, createNodeId) => {
    const nodeId = createNodeId(`contentstack-entry-${entry.uid}-${entry.locale}`);
    const nodeContent = JSON.stringify(entry);
    const nodeContentDigest = crypto
        .createHash('md5')
        .update(nodeContent)
        .digest('hex');
    const nodeData = Object.assign({}, entry, {
        id: nodeId,
        parent: null,
        children: [],
        internal: {
            type: `Contentstack_${content_type.uid}`,
            content: nodeContent,
            contentDigest: nodeContentDigest,
        },
    });
    return nodeData;
}

exports.normalizeEntry = (contentType, entry, createNodeId) => {
    let resolveEntry = Object.assign({}, entry, builtEntry(contentType.schema, entry));
    let builtNodeEntry = normalizeFields(resolveEntry, createNodeId);
    return builtNodeEntry;
}


const normalizeFields = (entry, createNodeId) => {
    let entryObj = {};
    Object.keys(entry).forEach(key => {
        if(entry[key] && entry[key].data_type){
            let field = entry[key];
            switch (field.data_type) {
                case "reference":
                    let referenceFieldName = `${key}___NODE`;
                    let referenceFieldValue = [];
                    entry[key].value.forEach(entryUid => {
                        let referedEntry  = createNodeId(`contentstack-entry-${entryUid}-${entry.locale}`);
                        referenceFieldValue.push(referedEntry);
                    });
                    entryObj[referenceFieldName] = referenceFieldValue;
                break;
                default: 
                    entryObj[key] = entry[key].value;
            }
        } else{
            entryObj[key] = entry[key];
        }
    });
    return entryObj;
}


const builtEntry = (schema, entry) => {
	let entryObj = {};
    schema.forEach(field => {
        let value = (typeof entry[field.uid] != 'undefined') ? entry[field.uid] : null;
        entryObj[field.uid] = field;
        if(field.data_type === 'group'){
            entryObj[field.uid].value = builtEntry(field.schema, entry[field.uid]);
        } else {
            entryObj[field.uid].value = value;
        }
    });
    return entryObj;
}

