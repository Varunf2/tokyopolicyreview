import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Article from "../components/article"
import LinkStrong from "../components/linkStrong"

import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from "../components/layout.module.css"

// import { image } from "../../contents/blog/fonops-in-the-south-china-sea-efficient-deterrence-or-misled-strategy/thomas-park-C57lmA3a5zY-unsplash.jpg"

const ArticlesPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Seo title="Home" />

      {/* TOP */}
      <section
        style={{
          display: `grid`,
          background: `black`,
        }}
      >
        {/* <img
          src={image}
          alt="UTokyo Campus"
          style={{
            gridArea: "1/1",
            placeItems: "center",
            height: `450px`,
            filter: `brightness(30%)`,
          }}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        /> */}
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
              padding: `calc(6rem + 67px) 1rem 6rem 1rem`,
              margin: `0 auto`,
            }}
          >
            <h1>Articles</h1>
            <p>
              Introduction comes here. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut bibendum leo congue sem interdum, eu commodo
              enim molestie. Etiam eu ligula dui. Ut dignissim auctor maximus.
              Praesent volutpat eu sapien id vestibulum. Nullam lobortis porta
              erat, sit amet pellentesque ex posuere a.{" "}
            </p>
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
          <h1>Latest Articles</h1>

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
    allMarkdownRemark(
      limit: 10
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

export default ArticlesPage
