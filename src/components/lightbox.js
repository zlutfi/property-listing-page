import React from "react"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
  MDBView,
  MDBMask,
  MDBIcon,
} from "mdbreact"
import Lightbox from "react-image-lightbox"

class LightboxPage extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: this.props.data,
  }

  renderImages = () => {
    let photoIndex = -1
    const { images } = this.state

    return images.map((imageSrc, index) => {
      photoIndex++
      const privateKey = photoIndex
      // const captions = [
      //   "Kitchen",
      //   "Master Bedroom",
      //   "Master Bathroom",
      //   "Dining Room",
      //   "Alternate Kitchen View",
      //   "Guest Bedroom",
      // ]
      return (
        <MDBCol size="6" md="4" className="mb-3" key={index}>
          <MDBAnimation type="fadeIn" delay={"0.2" * photoIndex + "s"} reveal>
            <figure className=" z-depth-1">
              <div
                onClick={() =>
                  this.setState({ photoIndex: privateKey, isOpen: true })
                }
              >
                <MDBView hover zoom>
                  <img
                    key={photoIndex}
                    src={imageSrc}
                    alt="Gallery"
                    className="img-fluid"
                  />
                  <MDBMask overlay="black-light" className="flex-center">
                    <p className="text-center lead text-white font-weight-bold">
                      <MDBIcon icon="search-plus" className="mr-2" size="2x" />
                      {/* {captions[photoIndex]} */}
                    </p>
                  </MDBMask>
                </MDBView>
              </div>
            </figure>
          </MDBAnimation>
        </MDBCol>
      )
    })
  }

  render() {
    const { photoIndex, isOpen, images } = this.state
    return (
      <>
        <div className="lightbox gallery container-fluid py-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol className="text-center text-md-left">
                <h2 className="h2-responsive mb-5 font-weight-bold">
                  Property Photos
                </h2>
              </MDBCol>
            </MDBRow>
            <MDBRow>{this.renderImages()}</MDBRow>
          </MDBContainer>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            enableZoom={false}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </>
    )
  }
}

export default LightboxPage
