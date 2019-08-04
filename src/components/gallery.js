import React from "react"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBMask,
  MDBIcon,
} from "mdbreact"

// Gallery
import Lightbox from "react-image-lightbox"
import Img1 from "../images/gallery/img_1.jpg"
import Img2 from "../images/gallery/img_2.jpg"
import Img3 from "../images/gallery/img_3.jpg"
import Img4 from "../images/gallery/img_4.jpg"
import Img5 from "../images/gallery/img_5.jpg"
import Img6 from "../images/gallery/img_6.jpg"
import Divider from "./divider"

// const images = () => (
//     <StaticQuery
//       query={graphql`
//         query CarouselQuery {
//           hero: file(relativePath: { eq: "gallery/hero.jpg" }) {
//             id
//             relativePath
//             childImageSharp {
//               fluid(maxHeight: 1000, maxWidth: 2000, cropFocus: CENTER) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//           img1: file(relativePath: { eq: "gallery/img_1.jpg" }) {
//             id
//             relativePath
//             childImageSharp {
//               fluid(maxHeight: 1000, maxWidth: 2000, cropFocus: CENTER) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//           img2: file(relativePath: { eq: "gallery/img_2.jpg" }) {
//             id
//             relativePath
//             childImageSharp {
//               fluid(maxHeight: 1000, maxWidth: 2000, cropFocus: CENTER) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//           img3: file(relativePath: { eq: "gallery/img_3.jpg" }) {
//             id
//             relativePath
//             childImageSharp {
//               fluid(maxHeight: 1000, maxWidth: 2000, cropFocus: CENTER) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//           img4: file(relativePath: { eq: "gallery/img_4.jpg" }) {
//             id
//             relativePath
//             childImageSharp {
//               fluid(maxHeight: 1000, maxWidth: 2000, cropFocus: CENTER) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//           img5: file(relativePath: { eq: "gallery/img_5.jpg" }) {
//             id
//             relativePath
//             childImageSharp {
//               fluid(maxHeight: 1000, maxWidth: 2000, cropFocus: CENTER) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//           img6: file(relativePath: { eq: "gallery/img_6.jpg" }) {
//             id
//             relativePath
//             childImageSharp {
//               fluid(maxHeight: 1000, maxWidth: 2000, cropFocus: CENTER) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//       `}
//       render={data => (
//         [
//             {data.img1.childImageSharp.fluid.src},
//             {data.img2.childImageSharp.fluid.src},
//             {data.img3.childImageSharp.fluid.src},
//             {data.img4.childImageSharp.fluid.src},
//             {data.img5.childImageSharp.fluid.src},
//             {data.img6.childImageSharp.fluid.src},
//         ]
//         )
//       }
//       />
//     )

//      const smallImages = () => (
//         <StaticQuery
//           query={graphql`
//             query CarouselQuery {
//               hero: file(relativePath: { eq: "gallery/hero.jpg" }) {
//                 id
//                 relativePath
//                 childImageSharp {
//                   fluid(maxHeight: 1000, maxWidth: 2000, cropFocus: CENTER) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//               img1: file(relativePath: { eq: "gallery/img_1.jpg" }) {
//                 id
//                 relativePath
//                 childImageSharp {
//                   fluid(maxHeight: 1000, maxWidth: 2000, cropFocus: CENTER) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//               img2: file(relativePath: { eq: "gallery/img_2.jpg" }) {
//                 id
//                 relativePath
//                 childImageSharp {
//                   fluid(maxHeight: 1000, maxWidth: 2000, cropFocus: CENTER) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//               img3: file(relativePath: { eq: "gallery/img_3.jpg" }) {
//                 id
//                 relativePath
//                 childImageSharp {
//                   fluid(maxHeight: 1000, maxWidth: 2000, cropFocus: CENTER) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//               img4: file(relativePath: { eq: "gallery/img_4.jpg" }) {
//                 id
//                 relativePath
//                 childImageSharp {
//                   fluid(maxHeight: 1000, maxWidth: 2000, cropFocus: CENTER) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//               img5: file(relativePath: { eq: "gallery/img_5.jpg" }) {
//                 id
//                 relativePath
//                 childImageSharp {
//                   fluid(maxHeight: 1000, maxWidth: 2000, cropFocus: CENTER) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//               img6: file(relativePath: { eq: "gallery/img_6.jpg" }) {
//                 id
//                 relativePath
//                 childImageSharp {
//                   fluid(maxHeight: 1000, maxWidth: 2000, cropFocus: CENTER) {
//                     ...GatsbyImageSharpFluid_withWebp
//                   }
//                 }
//               }
//             }
//           `}
//           render={data => (
//             [
//                 {data.img1.childImageSharp.fluid.src},
//                 {data.img2.childImageSharp.fluid.src},
//                 {data.img3.childImageSharp.fluid.src},
//                 {data.img4.childImageSharp.fluid.src},
//                 {data.img5.childImageSharp.fluid.src},
//                 {data.img6.childImageSharp.fluid.src},
//             ]
//             )
//           }
//           />
//         )

const images = [Img1, Img2, Img3, Img4, Img5, Img6]

const smallImages = [Img1, Img2, Img3, Img4, Img5, Img6]

const captions = [
  "Kitchen",
  "Master Bedroom",
  "Master Bathroom",
  "Dining Room",
  "Alternate Kitchen View",
  "Guest Bedroom",
]

class Gallery extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state
    return (
      <>
        {/* <Divider bottom="#f1f1f1" top="#fff" /> */}

        <div className="py-5" style={{ backgroundColor: "#f1f1f1" }}>
          <MDBContainer>
            <MDBRow>
              <MDBCol className="text-center text-md-left">
                <h2 className="h2-responsive mb-5 mb-md-0 font-weight-bold">
                  {/* <MDBIcon icon="image" className="mr-2 text-primary" /> */}
                  Property Photos
                </h2>
                <hr class="d-md-block d-none" />
              </MDBCol>
            </MDBRow>
            <div className="mdb-lightbox no-margin">
              <MDBRow>
                <MDBCol size="6" md="4" className="mb-md-3">
                  <figure>
                    <MDBView
                      hover
                      zoom
                      className="z-depth-1"
                      onClick={() =>
                        this.setState({ photoIndex: 0, isOpen: true })
                      }
                    >
                      <img
                        src={smallImages[0]}
                        alt="Gallery"
                        className="img-fluid"
                      />
                      <MDBMask overlay="black-light" className="flex-center">
                        <p className="text-center lead text-white font-weight-bold">
                          <MDBIcon icon="search-plus" className="mr-2" />
                          {captions[0]}
                        </p>
                      </MDBMask>
                    </MDBView>
                  </figure>
                </MDBCol>
                <MDBCol size="6" md="4" className="mb-md-3">
                  <figure>
                    <MDBView
                      hover
                      zoom
                      className="z-depth-1"
                      onClick={() =>
                        this.setState({ photoIndex: 1, isOpen: true })
                      }
                    >
                      <img
                        src={smallImages[1]}
                        alt="Gallery"
                        className="img-fluid"
                      />
                      <MDBMask overlay="black-light" className="flex-center">
                        <p className="text-center lead text-white font-weight-bold">
                          <MDBIcon icon="search-plus" className="mr-2" />
                          {captions[1]}
                        </p>
                      </MDBMask>
                    </MDBView>
                  </figure>
                </MDBCol>
                <MDBCol size="6" md="4" className="mb-md-3">
                  <figure>
                    <MDBView
                      hover
                      zoom
                      className="z-depth-1"
                      onClick={() =>
                        this.setState({ photoIndex: 2, isOpen: true })
                      }
                    >
                      <img
                        src={smallImages[2]}
                        alt="Gallery"
                        className="img-fluid"
                      />
                      <MDBMask overlay="black-light" className="flex-center">
                        <p className="text-center lead text-white font-weight-bold">
                          <MDBIcon icon="search-plus" className="mr-2" />
                          {captions[2]}
                        </p>
                      </MDBMask>
                    </MDBView>
                  </figure>
                </MDBCol>
                <MDBCol size="6" md="4" className="mb-md-3">
                  <figure>
                    <MDBView
                      hover
                      zoom
                      className="z-depth-1"
                      onClick={() =>
                        this.setState({ photoIndex: 3, isOpen: true })
                      }
                    >
                      <img
                        src={smallImages[3]}
                        alt="Gallery"
                        className="img-fluid"
                      />
                      <MDBMask overlay="black-light" className="flex-center">
                        <p className="text-center lead text-white font-weight-bold">
                          <MDBIcon icon="search-plus" className="mr-2" />
                          {captions[3]}
                        </p>
                      </MDBMask>
                    </MDBView>
                  </figure>
                </MDBCol>
                <MDBCol size="6" md="4" className="mb-md-3">
                  <figure>
                    <MDBView
                      hover
                      zoom
                      className="z-depth-1"
                      onClick={() =>
                        this.setState({ photoIndex: 4, isOpen: true })
                      }
                    >
                      <img
                        src={smallImages[4]}
                        alt="Gallery"
                        className="img-fluid"
                      />
                      <MDBMask overlay="black-light" className="flex-center">
                        <p className="text-center lead text-white font-weight-bold">
                          <MDBIcon icon="search-plus" className="mr-2" />
                          {captions[4]}
                        </p>
                      </MDBMask>
                    </MDBView>
                  </figure>
                </MDBCol>
                <MDBCol size="6" md="4" className="mb-md-3">
                  <figure>
                    <MDBView
                      hover
                      zoom
                      className="z-depth-1"
                      onClick={() =>
                        this.setState({ photoIndex: 5, isOpen: true })
                      }
                    >
                      <img
                        src={smallImages[5]}
                        alt="Gallery"
                        className="img-fluid"
                      />
                      <MDBMask overlay="black-light" className="flex-center">
                        <p className="text-center lead text-white font-weight-bold">
                          <MDBIcon icon="search-plus" className="mr-2" />
                          {captions[5]}
                        </p>
                      </MDBMask>
                    </MDBView>
                  </figure>
                </MDBCol>
              </MDBRow>
            </div>
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                imageTitle={photoIndex + 1 + "/" + images.length}
                imageCaption={captions[photoIndex]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </MDBContainer>
        </div>
      </>
    )
  }
}

export default Gallery
