import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Top from "../components/top"
import Articles from "../components/articles"
import Submit from "../components/submit"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Top/>
    <Articles/>
    <Submit/>
  </Layout>
)

export default IndexPage
