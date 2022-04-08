import * as React from "react"
import { graphql } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Article from "../components/article"

const ArticlesPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout color="white">
      <Seo title="Home" />

      {/* TOP */}
      <section
        style={{
          display: `grid`,
        }}
      >
        <StaticImage
          src="../images/steven-su-RTDZpYA8hjs-unsplash.jpg"
          alt="UTokyo Campus"
          style={{
            gridArea: "1/1",
            placeItems: "center",
            height: `450px`,
            filter: `brightness(30%)`,
          }}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
          placeholder="blurred"
        />
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
            display: "grid",
          }}
        >
          <div
            style={{
              textAlign: `left`,
              maxWidth: 1100,
              padding: `calc(6rem + 67px) 1rem 6rem 1rem`,
              margin: `0 auto`,
            }}
          >
            <div
              style={{
                width: `60%`,
                minWidth: `340px`,
              }}
            >
              <h1 style={{ marginBottom: `1.5rem`, color: `white` }}>
                Articles
              </h1>
              <p
                style={{
                  color: `rgba(202, 202, 202, 1)`,
                }}
              >
                TPR publishes articles on a variety of policy issues that aim to
                showcase the best work, insights, and experience of our authors,
                from within the GraSPP community and beyond!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1100,
            padding: `5rem 1rem`,
            textAlign: `left`,
          }}
        >
          <ol style={{ listStyle: `none`, margin: 0 }}>
            {posts.map(post => {
              const image = getImage(post.frontmatter.cover)

              return <Article post={post} image={image} />
            })}
          </ol>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        fields {
          slug
        }
        frontmatter {
          title
          author
          date(formatString: "MMM DD YYYY")
          cover {
            id
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                tracedSVGOptions: { blackOnWhite: true }
              )
            }
          }
        }
      }
    }
  }
`

export default ArticlesPage
