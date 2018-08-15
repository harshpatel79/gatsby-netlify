import React from 'react'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
    return (
        <div style={{
            marginBottom: '1.5rem',
            padding: '1.5rem',
            border: '1px solid #ccc'
        }}>
            <h3>{node.id}</h3>
            <span>{node.text ? node.text.text : 'untitle'}</span>
        </div>
    )
}

const IndexPage = (props) => {
    console.log(props.data);
        return(
            <div>
                { props.data.allContentstackTestGroup.edges.map((edge) => {
                    return(
                        <div key={edge.node.id}>{edge.node.title}</div>
                    )
                }) }
            </div>
            
        )
        return (
            <div>
                {props.data.allContentstackTestGroup.edges.map((edge, index) => {
                    <div>
                        {edge.node}
                    </div>
                })}
            </div>
        )
    

   
}

export default IndexPage

export const ContentstackPageQuery = graphql`
    query ContentstackPageQuery {
        allContentstackTestGroup(
            limit:100,
            filter:{locale:{eq:"en-us"}}
        ) {
            edges{
              node{
                id
                title
                locale
              }
            }
        }
    }
`
