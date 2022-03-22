import * as React from "react"
import { Link } from "gatsby"
import { linkStrong } from "./layout.module.css"

const Submit = () => (
  <div
    style={{
      maxWidth: `750px`,
      margin: `0 auto`,
      padding: `5rem 1rem`,
      textAlign: `center`,
    }}
  >
    <h1>Submit Your Articles</h1>
    <p style={{ marginBottom: `2.4rem`, padding: 0, textAlign: `left` }}>
      Introduction comes here. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Ut bibendum leo congue sem interdum, eu commodo enim
      molestie. Etiam eu ligula dui. Ut dignissim auctor maximus. Praesent
      volutpat eu sapien id vestibulum. Nullam lobortis porta erat, sit amet
      pellentesque ex posuere a.
    </p>
    <Link to="/page-2/" className={linkStrong}>
      Contact Us
    </Link>
  </div>
)

export default Submit
