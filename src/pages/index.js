import React from "react"

// Page Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import Gallery from "../components/gallery"
import Main from "../components/main"

const IndexPage = () => (
  <Layout>
    <Carousel />
    <SEO title="1682 Rollins Brooke Ct" />
    <Main />
    <Gallery />
  </Layout>
)

export default IndexPage
