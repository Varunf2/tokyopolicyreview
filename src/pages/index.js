import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Submit from "../components/submit"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { linkStrong } from "../components/layout.module.css"

const IndexPage = ({ data }) => {
  const firstpost = data.one.nodes[0]
  const firstpostImage = getImage(firstpost.frontmatter.cover)
  const posts = data.two.nodes

  return (
    <Layout>
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
              padding: `calc(10rem + 96px) 1rem 10rem 1rem`,
              margin: `0 auto`,
            }}
          >
            <Link
              to={firstpost.fields.slug}
              itemProp="url"
              style={{ textDecoration: `none` }}
            >
              <h2
                style={{
                  marginBottom: `1.2rem`,
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
              <p className={linkStrong} style={{ color: `white` }}>
                Read More
              </p>
            </Link>
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
          <h1>Latest Articles</h1>

          <ol style={{ listStyle: `none`, margin: 0 }}>
            {posts.map(post => {
              const image = getImage(post.frontmatter.cover)

              return (
                <li key={post.id} style={{ marginBottom: `1.5rem` }}>
                  <Link
                    to={post.fields.slug}
                    style={{ textDecoration: `none`, color: `inherit` }}
                  >
                    <article style={{ display: `flex` }}>
                      <div style={{ flex: `1` }}>
                        <header style={{ marginBottom: `0.75rem` }}>
                          <h3>{post.frontmatter.title}</h3>
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
                        style={{ maxWidth: `250px`, height: `170px` }}
                      />
                    </article>
                  </Link>
                </li>
              )
            })}
          </ol>

          <Link to="/page-2/" className={linkStrong}>
            View More
          </Link>
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
                width: 1500
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
                width: 250
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
