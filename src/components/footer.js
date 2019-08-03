import React from "react"
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact"
import agent from "../images/agent.jpg"
import logo from "../images/icon.svg"
import Divider from "./divider.js"

const Footer = () => {
  return (
    <>
      <Divider bottom="#fff" top="#f1f1f1" />

      <MDBFooter className="font-small pt-5 container-fluid">
        <MDBContainer className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <MDBRow>
                <MDBCol md="auto">
                  <img
                    src={agent}
                    className="rounded-circle img-fluid"
                    width="100px"
                  />
                </MDBCol>
                <MDBCol md="auto" middle>
                  <p>
                    <strong className="font-weight-bold">
                      Cheryl Hofflinger
                    </strong>
                    <br /> Agent, Prime Properties
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>

            <MDBCol md="3">
              <h5 className="font-weight-bold">Prime Properties</h5>
              <p>
                1200 E Prime St
                <br />
                Charlotte, NC 28282
              </p>
              <p>
                <span className="font-weight-bold">Phone</span>: (888) 555-1212
                <br />
                <span className="font-weight-bold">Email</span>:
                hello@primeproperties.homes
                <br />
                <a href="#!">
                  <MDBIcon
                    fab
                    icon="facebook-square"
                    size="1x"
                    className="mr-2"
                  />
                </a>
                <a href="#!">
                  <MDBIcon
                    fab
                    icon="twitter-square"
                    size="1x"
                    className="mr-2"
                  />
                </a>
                <a href="#!">
                  <MDBIcon
                    fab
                    icon="pinterest-square"
                    size="1x"
                    className="mr-2"
                  />
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="text-center py-3 mt-4">
          <img
            src={logo}
            alt="Prime Properties Logo"
            height="40px"
            className="mr-3"
          />
          &copy; {new Date().getFullYear()} Copyright -{" "}
          <a href="https://www.gatsbyjs.org">Prime Properties Realty</a>
        </div>
      </MDBFooter>
      <Divider bottom="#9783f6" top="#fff" />
    </>
  )
}

export default Footer
