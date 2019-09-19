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
        relativeDirectory: { eq: "gallery" }
        sourceInstanceName: { eq: "images" }
      }
      limit: 6
      sort: { order: ASC, fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(
              maxHeight: 800
              maxWidth: 1920
              cropFocus: CENTER
              quality: 60
            ) {
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
