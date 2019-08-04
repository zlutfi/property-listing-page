import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  MDBCarousel,
  //   MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  //   MDBView,
  //   MDBMask,
  //   MDBContainer,
} from "mdbreact"

export default () => (
  <StaticQuery
    query={graphql`
      query CarouselQuery {
        hero: file(relativePath: { eq: "gallery/hero.jpg" }) {
          id
          relativePath
          childImageSharp {
            fluid(maxHeight: 800, maxWidth: 2000, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img1: file(relativePath: { eq: "gallery/img_1.jpg" }) {
          id
          relativePath
          childImageSharp {
            fluid(maxHeight: 800, maxWidth: 2000, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img2: file(relativePath: { eq: "gallery/img_2.jpg" }) {
          id
          relativePath
          childImageSharp {
            fluid(maxHeight: 800, maxWidth: 2000, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img3: file(relativePath: { eq: "gallery/img_3.jpg" }) {
          id
          relativePath
          childImageSharp {
            fluid(maxHeight: 800, maxWidth: 2000, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img4: file(relativePath: { eq: "gallery/img_4.jpg" }) {
          id
          relativePath
          childImageSharp {
            fluid(maxHeight: 800, maxWidth: 2000, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img5: file(relativePath: { eq: "gallery/img_5.jpg" }) {
          id
          relativePath
          childImageSharp {
            fluid(maxHeight: 800, maxWidth: 2000, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img6: file(relativePath: { eq: "gallery/img_6.jpg" }) {
          id
          relativePath
          childImageSharp {
            fluid(maxHeight: 800, maxWidth: 2000, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <MDBCarousel
        activeItem={1}
        length={7}
        showControls={true}
        showIndicators={false}
        interval={4000}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <Img
              className="d-block w-100"
              fluid={data.hero.childImageSharp.fluid}
              alt="slide1"
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <Img
              className="d-block w-100"
              fluid={data.img1.childImageSharp.fluid}
              alt="slide2"
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <Img
              className="d-block w-100"
              fluid={data.img2.childImageSharp.fluid}
              alt="slide3"
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <Img
              className="d-block w-100"
              fluid={data.img3.childImageSharp.fluid}
              alt="slide4"
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <Img
              className="d-block w-100"
              fluid={data.img4.childImageSharp.fluid}
              alt="slide5"
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <Img
              className="d-block w-100"
              fluid={data.img5.childImageSharp.fluid}
              alt="slide6"
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="7">
            <Img
              className="d-block w-100"
              fluid={data.img6.childImageSharp.fluid}
              alt="slide7"
            />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    )}
  />
)
