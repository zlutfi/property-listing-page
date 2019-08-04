import React from "react"
import {
  MDBJumbotron,
  MDBRow,
  MDBCol,
  //   MDBContainer,
  //   MDBView,
  //   MDBMask,
} from "mdbreact"
import Carousel from "./carousel"
import Form from "./form"
const Hero = () => {
  return (
    <>
      {/* <MDBJumbotron className="p-0"> */}
      <Carousel />
      {/* </MDBJumbotron> */}

      {/* <MDBView>
        <div className="bg">
          <MDBMask
            className="flex-center"
            overlay="white-slight"
            pattern={1}
          ></MDBMask>
        </div>
      </MDBView> */}
    </>
  )
}
export default Hero
