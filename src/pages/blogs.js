import React from 'react'
import Link from 'gatsby-link'


export default class IndexPage extends React.Component {
    render() {
        const { data } = this.props;
        const blogs = data.allContentstackBlogs.edges;
        console.log("blogs",blogs)
        return (
            <div className="container">
                {blogs.map(edge => {
                    return(
                        <div key={edge.node.id}>
                            <section>
                                <div className="title">
                                    <h2>{edge.node.title}</h2>
                                </div>
                                <div className="description">
                                    {edge.node.short_title}
                                    <Link
                                    to={edge.node.url}
                                    >
                                    <span> Read more... </span>
                                    </Link>
                                </div>
                                <div className="author">
                                    By: {edge.node.authors.map(author => {
                                        return(
                                            <span key={author.id}>
                                                {author.name}
                                            </span>
                                        )
                                    })}
                                </div>
                            </section>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export const pageQuery = graphql`
    query BlogQuery {
      allContentstackBlogs(
        limit: 1000,
        sort: { order: DESC, fields: [created_at] }
            ) {
        edges {
          node {
            id
            url
            title
            short_title
            authors {
              name
              id
            }
          }
        }
      }
    }
`