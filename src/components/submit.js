import * as React from "react"
import LinkStrong from "./linkStrong"

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
    <LinkStrong
      to="/page-2/"
      script="Contact Us"
      color="#010E26"
      placing="center"
    />
  </div>
)

export default Submit
