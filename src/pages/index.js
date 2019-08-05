import React from "react"
import { graphql } from "gatsby"
// Page Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import LightboxPage from "../components/lightbox"

import Main from "../components/main"

const IndexPage = ({ data }) => (
  <Layout>
    <Carousel
      data={data.allFile.edges.map(img => {
        return img.node.childImageSharp.fluid
      })}
    />
    <SEO title="1682 Rollins Brooke Ct" />
    <Main />
    <LightboxPage
      data={data.allFile.edges.map(img => {
        return img.node.childImageSharp.fluid.src
      })}
    />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "gallery" }
      }
      limit: 6
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxHeight: 1080, maxWidth: 1920, cropFocus: CENTER) {
              src
              srcSet
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
