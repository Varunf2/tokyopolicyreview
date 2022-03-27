import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: `absolute`,
      color: `white`,
      width: `100%`,
      zIndex: 10000,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1100,
        padding: `1rem 1rem`,
        display: `flex`,
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `1.1rem`,
          }}
        >
          {siteTitle}
        </Link>
      </h2>

      {/* Navi Items */}
      <nav style={{ marginLeft: `auto` }}>
        <ul
          style={{
            display: `flex`,
            alignItems: `center`,
            listStyleType: `none`,
            color: `white`,
            margin: 0,
          }}
        >
          <li style={{ margin: `0 0 0 1.4rem`, fontWeight: 700 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              Home{" "}
            </Link>
          </li>
          <li style={{ margin: `0 0 0 1.4rem`, fontWeight: 700 }}>Articles</li>
          <li style={{ margin: `0 0 0 1.4rem`, fontWeight: 700 }}>Submit</li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
