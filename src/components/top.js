import * as React from "react"
import { Link } from "gatsby"
import { linkStrong } from "./layout.module.css"


const Top = () => (
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
)

export default Top