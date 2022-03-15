import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Submit from "../components/submit"
import { Link, graphql } from "gatsby"
import { linkStrong } from "../components/layout.module.css"

const IndexPage = ( {data} ) => {

  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Seo title="Home" />

      <div 
      style = {{
        maxWidth: `600px`,
        textAlign: `left`,
        padding: `10rem 0`
      }}>
        <h2 style={{ marginBottom: `1.2rem` }}>How does Infrastructure Interact with the Rest of the Economy? A Quantitative Study on ASEAN</h2>
        <p  style={{ marginBottom: `1.2rem` }}>Sep. 2021, Febtina Setia Retnani</p>
        <Link to="/page-2/" className={ linkStrong }>Read More</Link>
      </div>

      {/* Article */}
      <div 
        style = {{
          textAlign: `left`,
          background: `rgba(255, 255, 255, 1)`,
          padding: `4.8rem 0`
        }}>
        <h1>Latest Articles</h1>

        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.id}>
                <article>
                  <header>
                    <h3>
                      <Link to={"/"} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h3>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt,
                      }}
                      itemProp="description"
                    />
                    <p>{ post.frontmatter.date }</p>
                    <p>{ post.frontmatter.author }</p>
                  </section>
                </article>
              </li>
            
            )})}
        </ol>

        <Link to="/page-2/" className={ linkStrong }>View More</Link>
      
      </div>

      <Submit/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query{
    allMarkdownRemark {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          author
          date(formatString: "MMM DD YYYY")
        }
      }
    }
  }
`

export default IndexPage
