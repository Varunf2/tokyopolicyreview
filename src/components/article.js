import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import * as styles from "./article.module.css"

const Article = ({ post, image }) => {
  return (
    <li
      key={post.id}
      style={{ marginBottom: `1.5rem` }}
      className={styles.article}
    >
      <Link
        to={post.fields.slug}
        style={{ textDecoration: `none`, color: `inherit` }}
      >
        <article style={{ display: `flex`, flexWrap: `wrap-reverse` }}>
          <div style={{ minWidth: 340, flex: 1 }}>
            <header style={{ marginBottom: `0.75rem` }}>
              <h1
                style={{
                  margin: `0 0 0.6rem 0`,
                  padding: 0,
                  fontFamily: "Roboto Slab",
                  fontWeight: `bold`,
                  textRendering: `optimizeLegibility`,
                  fontSize: `0.9rem`,
                  lineHeight: `1.1`,
                }}
              >
                {post.frontmatter.title}
              </h1>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.excerpt,
                }}
                itemProp="description"
                style={{ marginBottom: `0.75rem` }}
              />
              <p style={{ marginBottom: `0.75rem` }}>
                {post.frontmatter.date}, {post.frontmatter.author}
              </p>
            </section>
          </div>
          <GatsbyImage
            image={image}
            alt={post.frontmatter.cover.id}
            className={styles.image}
            style={{
              aspectRatio: `7 / 4`,
            }}
          />
        </article>
      </Link>
    </li>
  )
}

export default Article
