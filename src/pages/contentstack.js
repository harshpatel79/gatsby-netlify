import React, { Component } from 'react'
import Link from 'gatsby-link'
import contentstack from 'contentstack'

const BlogPost = ({node}) => {
    return (
        <div style={{
            marginBottom: '1.5rem',
            padding: '1.5rem',
            border: '1px solid #ccc'
        }}>
            <h3>{node.id}</h3>
            <span>{node.title ? node.title : 'untitle'}</span>
        </div>
    )
}

const ContentstackPage = (props) => {
    return(
        <div>contentstack</div>
    )
    // return (
    //     <div>
    //         {props.data.allContentstackEntry.edges.map((edge) => <BlogPost key={edge.node.id} node={edge.node} />)}
    //     </div>
    // )
}

export default ContentstackPage



