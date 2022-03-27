import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Submit from "../components/submit"
import Article from "../components/article"
import LinkStrong from "../components/linkStrong"

import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../components/layout.module.css"

const IndexPage = ({ data }) => {
  const firstpost = data.one.nodes[0]
  const firstpostImage = getImage(firstpost.frontmatter.cover)
  const posts = data.two.nodes

  return (
    <Layout color="white">
      <Seo title="Home" />
      <section
        style={{
          display: `grid`,
        }}
      >
        <GatsbyImage
          image={firstpostImage}
          alt={firstpost.frontmatter.cover.id}
          style={{
            gridArea: "1/1",
            placeItems: "center",
            height: `610px`,
            filter: `brightness(30%)`,
          }}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
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
              width: `100%`,
              maxWidth: 1100,
              padding: `calc(10rem + 96px) 1rem 0 1rem`,
              margin: `0 auto`,
            }}
          >
            <div className={styles.hoveranime}>
              <Link
                to={firstpost.fields.slug}
                itemProp="url"
                style={{ textDecoration: `none` }}
              >
                <h2
                  style={{
                    marginTop: 0,
                    color: `white`,
                    width: `60%`,
                    minWidth: `340px`,
                  }}
                >
                  {firstpost.frontmatter.title}
                </h2>
                <p
                  style={{
                    marginBottom: `1.2rem`,
                    color: `rgba(202, 202, 202, 1)`,
                  }}
                >
                  {firstpost.frontmatter.date}, {firstpost.frontmatter.author}
                </p>

                <LinkStrong
                  to={firstpost.fields.slug}
                  script="Read More"
                  color="white"
                  placing="left"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <section style={{ background: `rgba(255, 255, 255, 1)` }}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1100,
            padding: `5rem 1rem`,
            textAlign: `left`,
          }}
        >
          <h1 style={{ marginBottom: `3rem` }}>Latest Articles</h1>

          <ol style={{ listStyle: `none`, margin: 0 }}>
            {posts.map(post => {
              const image = getImage(post.frontmatter.cover)

              return <Article post={post} image={image} />
            })}
          </ol>

          <LinkStrong
            to="/articles/"
            script="View More"
            color="#1E1E1E"
            placing="left"
          />
        </div>
      </section>

      <Submit />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    one: allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
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
                width: 1000
                placeholder: BLURRED
                tracedSVGOptions: { blackOnWhite: true }
              )
            }
          }
        }
      }
    }

    two: allMarkdownRemark(
      skip: 1
      limit: 4
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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

export default IndexPage
