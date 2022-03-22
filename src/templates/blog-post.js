import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <Seo title={post.frontmatter.title} description={post.excerpt} />

      <article
        style={{
          margin: `0 auto`,
          maxWidth: 750,
          padding: `5rem 1rem`,
          textAlign: `left`,
        }}
      >
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <p>{post.frontmatter.author}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}
export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 250)
      html
      frontmatter {
        title
        author
        date(formatString: "MMM DD YYYY")
      }
    }
  }
`
