/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer
          style={{
            padding: `0 1rem`,
            margin: `2.4rem auto`,
            maxWidth: 1100,
            display: `flex`,
          }}
        >
          <p style={{ display: `inline-block`, fontSize: `0.8rem` }}>
            © Tokyo Policy Review {new Date().getFullYear()}
          </p>
          <ul
            style={{
              marginLeft: `auto`,
              listStyleType: `none`,
              display: `flex`,
            }}
          >
            <li style={{ marginLeft: `1rem` }}>aa</li>
            <li style={{ marginLeft: `1rem` }}>bb</li>
          </ul>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
