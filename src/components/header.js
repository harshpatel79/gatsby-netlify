import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <div className="display-flex">
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            className="float-left"
          >
            {siteTitle}
          </Link>
        </h1>
        <h1>
          <Link
            to="/blogs"
            className="float-left margin-left"
          >
            Blogs
          </Link>
        </h1> 
      </div>
    </div>
  </div>
)

export default Header
