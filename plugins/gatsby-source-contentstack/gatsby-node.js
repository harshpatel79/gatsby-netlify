const Promise = require('bluebird');
const crypto = require("crypto");
const fetch = require("node-fetch");
const queryString = require("query-string");
const {
    normalizeFields, 
    normalizeEntry, 
    processContentType, 
    processEntry } = require("./normalize");

const fetchData = require("./fetch");

exports.sourceNodes = async ({ boundActionCreators, createNodeId },configOptions) => {
    const { createNode } = boundActionCreators;

    const { contentstackData } = await fetchData(configOptions);

    //console.log("contentstackData",contentstackData);
        
    Object.keys(contentstackData.contentTypesEntries).forEach(key => {
        const contentType = contentstackData.contentTypesEntries[key].contentType;
        const entries = contentstackData.contentTypesEntries[key].entries;

        entries.forEach(entry => {
            //console.log("entry",entry);
            
            const normalizedEntry = normalizeEntry(contentType, entry, createNodeId);
            // Process the contentTypes data to match the structure of a Gatsby node
            const contentTypeNode = processContentType(contentType, createNodeId);
            // Process the Entry data to match the structure of a Gatsby node
            const entryNode = processEntry(contentType, normalizedEntry, createNodeId);
            // Use Gatsby's createNode helper to create a node from the node data
            createNode(contentTypeNode);
            if(contentType.uid === 'test_group'){
                console.log("contentType",contentType);
                console.log("entries",entry, entryNode);
            }
            createNode(entryNode);
            //console.log("entryNode",entryNode);
        });
    });


    const getAllData = () => {
        
        const contentTypesUids = [];

        return {};

        return fetchContentTypes()
                    .then(data => {
                        data.content_types.map(content_type =>{
                            contentTypesUids.push(content_type.uid);
                            // Process the contentTypes data to match the structure of a Gatsby node
                            const nodeData = processContentType(content_type);
                            // Use Gatsby's createNode helper to create a node from the node data
                            createNode(nodeData);
                            
                            
                        })
                        const promises = contentTypesUids.map(fetchEntries);
                        
                        return Promise.all(promises)
                                .then(results =>{
                                    results.map((contentTypeEntries, index) =>{
                                        contentTypeEntries.entries.map((entry) => {
                                            // Process the entry data to match the structure of a Gatsby node
                                            const nodeData = processEntry(contentTypesUids[index], entry)
                                            // Use Gatsby's createNode helper to create a node from the node data
                                            createNode(nodeData)
                                        })                    
                                    })
                                })     

                    })
        
        
    }
    

    return (
       getAllData()
    )

};