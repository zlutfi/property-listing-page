import React from "react"
import Img from "gatsby-image"

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact"

const Carousel = ({ data }) => (
  <MDBCarousel
    activeItem={1}
    length={6}
    showControls={true}
    showIndicators={true}
    interval={4000}
    className="z-depth-1"
  >
    <MDBCarouselInner>
      {data.map((slide, index) => {
        return (
          <MDBCarouselItem itemId={index + 1} key={index}>
            <MDBView>
              <Img className="d-block w-100" fluid={slide} alt="slide1" />
              <MDBMask overlay="black-light" />
            </MDBView>
          </MDBCarouselItem>
        )
      })}
    </MDBCarouselInner>
  </MDBCarousel>
)
export default Carousel
