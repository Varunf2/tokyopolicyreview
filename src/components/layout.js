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

const Layout = ({ children, color }) => {
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
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        color={color}
      />
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
            <li style={{ marginLeft: `1rem` }}>
              <a href="https://www.linkedin.com/company/graspp-tokyo-policy-review/about/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5rem"
                  viewBox="0 0 512 512"
                  width="1.5rem"
                >
                  <g>
                    <path
                      d="M512,64c0,-35.323 -28.677,-64 -64,-64l-384,0c-35.323,0 -64,28.677 -64,64l0,384c0,35.323 28.677,64 64,64l384,0c35.323,0 64,-28.677 64,-64l0,-384Z"
                      id="background"
                      fill="#1E1E1E"
                    />
                    <g id="shapes">
                      <rect
                        height="257.962"
                        id="rect11"
                        fill="#fff"
                        width="85.76"
                        x="61.053"
                        y="178.667"
                      />
                      <path
                        d="M104.512,54.28c-29.341,0 -48.512,19.29 -48.512,44.573c0,24.752 18.588,44.574 47.377,44.574l0.554,0c29.903,0 48.516,-19.822 48.516,-44.574c-0.555,-25.283 -18.611,-44.573 -47.935,-44.573Z"
                        id="path13-0"
                        fill="#fff"
                      />
                      <path
                        d="M357.278,172.601c-45.49,0 -65.866,25.017 -77.276,42.589l0,-36.523l-85.738,0c1.137,24.197 0,257.961 0,257.961l85.737,0l0,-144.064c0,-7.711 0.554,-15.42 2.827,-20.931c6.188,-15.4 20.305,-31.352 43.993,-31.352c31.012,0 43.436,23.664 43.436,58.327l0,138.02l85.741,0l0,-147.93c0,-79.237 -42.305,-116.097 -98.72,-116.097Z"
                        id="path15"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </li>
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
