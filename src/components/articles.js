import * as React from "react"
import { Link } from "gatsby"
import { linkStrong } from "./layout.module.css"


const Articles = () => (
  <div 
    style = {{
      textAlign: `left`,
      background: `rgba(255, 255, 255, 1)`,
      padding: `4.8rem 0`
    }}>
    <h1>Latest Articles</h1>
    <p>Article list comes here. </p>
    <Link to="/page-2/" className={ linkStrong }>View More</Link>
  </div>
)

export default Articles