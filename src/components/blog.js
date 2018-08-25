import React from 'react'
import Link from 'gatsby-link'


export default class BlogPage extends React.Component {
    render() {
        const { data } = this.props;
        const blog = data.contentstackBlogs;
        return (
            <div className="container">
                <div>
                    <section>
                        <div className="title">
                            <h2>{blog.title}</h2>
                        </div>
                        <div className="description">
                            {blog.blog_description}
                        </div>
                        <div className="author">
                            By: {blog.authors.map(author => {
                                return(
                                    <span key={author.id}>
                                        {author.name}
                                    </span>
                                )
                            })}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}


export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
      contentstackBlogs(id: {eq: $id}) {
	    title
	    id
	    url
	    blog_description
	    authors {
	   	  id 	
	      name
	    }
	  }
    }
`

