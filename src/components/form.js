import React from "react"
import { Link } from "gatsby"
import {
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
} from "mdbreact"
import logo from "../images/icon.svg"
import Divider from "./divider.js"

const Form = () => {
  return (
    <MDBCard id="contact">
      <MDBCardTitle
        tag="h4"
        className="text-center p-4  mb-0"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <img
          src={logo}
          alt="Prime Properties Logo"
          height="40px"
          className="mr-3 float-left"
        />
        Exclusive Luxury Homes in the Heart of Downtown Charlotte.
      </MDBCardTitle>
      <Divider bottom="#f8f9fa" top="#f1f1f1" />

      <MDBCardBody>
        <MDBCardText className="mb-4 text-center">
          Schedule a time to view this property today!
        </MDBCardText>
        <form>
          <input
            type="text"
            id="defaultFormContactNameEx"
            className="form-control"
            placeholder="Name"
          />
          <br />

          <input
            type="email"
            id="defaultFormContactEmailEx"
            className="form-control"
            placeholder="Email"
          />
          <br />

          <input
            type="text"
            id="defaultFormContactPhoneEx"
            className="form-control"
            placeholder="Phone"
          />
          <br />

          <input
            type="text"
            id="defaultFormContactPhoneEx"
            className="form-control"
            placeholder="Day"
          />
          <br />
          <input
            type="text"
            id="defaultFormContactPhoneEx"
            className="form-control"
            placeholder="Appointment Time"
          />
          <br />
          <textarea
            type="text"
            id="defaultFormContactMessageEx"
            className="form-control"
            placeholder="Message"
            rows="3"
          />
          <div className="text-center mt-4">
            <Link to="/">
              <MDBBtn type="submit" color="primary">
                Schedule Your Tour <MDBIcon icon="envelope" className="ml-2" />
              </MDBBtn>
            </Link>
          </div>
        </form>
      </MDBCardBody>
    </MDBCard>
  )
}

export default Form
