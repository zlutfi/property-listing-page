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

const Form = () => {
  return (
    <MDBCard id="contact">
      <MDBCardTitle
        tag="h4"
        className="h4-responsive text-center p-4  mb-0 font-weight-bold"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <img
          src={logo}
          alt="Prime Properties Logo"
          height="40px"
          className="mr-3 float-left d-md-block d-none"
        />
        Exclusive Luxury Homes in the Heart of Downtown Charlotte.
      </MDBCardTitle>

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
            label="Name"
          />
          <br />

          <input
            type="email"
            id="defaultFormContactEmail"
            className="form-control"
            placeholder="Email"
            label="Email"
          />
          <br />

          <input
            type="text"
            id="defaultFormContactPhone"
            className="form-control"
            placeholder="Phone"
            label="Phone"
          />
          <br />

          <input
            type="text"
            id="defaultFormContactDay"
            className="form-control"
            placeholder="Date"
            label="Appointment Date"
          />
          <br />
          <input
            type="text"
            id="defaultFormContactAppointment"
            className="form-control"
            placeholder="Appointment Time"
            label="Appointment Time"
          />
          <br />
          <textarea
            type="text"
            id="defaultFormContactMessage"
            className="form-control"
            placeholder="Message"
            rows="3"
            label="Your Message"
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
