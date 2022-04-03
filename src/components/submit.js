import * as React from "react"

import { hoveranime } from "./layout.module.css"

const Submit = () => (
  <div
    style={{
      maxWidth: `750px`,
      margin: `0 auto`,
      padding: `5rem 1rem`,
      textAlign: `center`,
    }}
  >
    <h1 style={{ marginBottom: `3rem` }}>Submit Your Articles</h1>
    <p style={{ marginBottom: `2.4rem`, padding: 0, textAlign: `left` }}>
      Introduction comes here. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Ut bibendum leo congue sem interdum, eu commodo enim
      molestie. Etiam eu ligula dui. Ut dignissim auctor maximus. Praesent
      volutpat eu sapien id vestibulum. Nullam lobortis porta erat, sit amet
      pellentesque ex posuere a.
    </p>
    <a
      href="https://drive.google.com/file/d/102hV4KBnkpJTDAb9AGKKnnZISmDd-GWv/view?usp=sharing"
      style={{
        display: `inline-flex`,
        position: `relative,`,
        textDecorationColor: `#1E1E1E`,
      }}
      className={hoveranime}
    >
      <p
        style={{
          fontFamily: `Roboto Slab`,
          fontStyle: `normal`,
          fontWeight: 500,
          fontSize: `0.8rem`,
          textDecoration: `none`,
          color: `#1E1E1E`,
          margin: 0,
          lineHeight: `inherit`,
          display: `inline-block`,
        }}
      >
        Contact Us
      </p>
      <span alt="linkIcon" style={{ margin: 0, paddingLeft: `0.5rem` }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#1E1E1E"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
        </svg>
      </span>
    </a>
  </div>
)

export default Submit
