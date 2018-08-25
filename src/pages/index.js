import React from 'react'
import Link from 'gatsby-link'


export default class IndexPage extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className="container">
                <section>
                    <div className="title">
                        <h2>Gatsby</h2>
                    </div>
                    <div className="description">
                        {data.contentstackGatsbyContentstackIntro.gatsby_intro}
                    </div>
                </section>
                <section>
                    <div className="title">
                        <h2>Contentstack</h2>
                    </div>
                    <div className="description">
                        {data.contentstackGatsbyContentstackIntro.contentstack_intro}
                    </div>
                </section>
            </div>
        )
    }
}


export const pageQuery = graphql`
    query IndexQuery {
      contentstackGatsbyContentstackIntro{
        title
        gatsby_intro
        contentstack_intro
      }
    }
`