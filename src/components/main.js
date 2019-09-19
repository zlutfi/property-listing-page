import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation } from "mdbreact"
import Form from "./form"

const Main = () => {
  return (
    <>
      <MDBContainer>
        <MDBRow className="pb-5">
          {/* Contact Form */}
          <MDBCol
            size="12"
            md="6"
            lg="5"
            className="order-md-last contact-form"
          >
            <MDBAnimation type="fadeIn" delay="0.4s">
              <Form />
            </MDBAnimation>
          </MDBCol>
          {/* Property Details */}
          <MDBCol size="12" md="6" lg="7" className="pt-5 pr-md-5">
            <MDBRow>
              <MDBCol className="pb-5 text-center text-md-left">
                <MDBAnimation type="fadeIn" delay="0s">
                  <h2 className="h2-responsive mb-5 font-weight-bold">
                    Property Details
                  </h2>
                  <p className="text-center text-md-left">
                    This architectural masterpiece is designed to take advantage
                    of breathtaking views from nearly every angle. Bask in the
                    morning sun on the veranda, or enjoy a evening dip in the
                    infinity pool. Whatever your fancy, this home has plenty to
                    offer. Located in the heart of downtown Charlotte, you're
                    close to everything. Seeing is believing, so schedule your
                    private viewing today!
                  </p>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mx-auto text-center text-md-left mb-5 mb-md-0">
              {/* Bedrooms */}
              <MDBCol>
                <h1 className="font-weight-bold h1-responsive">3</h1>
                <MDBIcon icon="bed" className="mr-2 text-primary" />
                Bedrooms
              </MDBCol>
              {/* Bathrooms */}
              <MDBCol>
                <h1 className="font-weight-bold h1-responsive">2</h1>
                <MDBIcon icon="bath" className="mr-2 text-primary" /> Baths
              </MDBCol>
              {/* Sqft */}
              <MDBCol>
                <h1 className="font-weight-bold h1-responsive">2316</h1>
                <MDBIcon icon="ruler-combined" className="mr-2 text-primary" />
                Sq/Ft
              </MDBCol>
            </MDBRow>
            <hr className="d-none d-md-block" />
            {/* Address section */}
            <MDBRow className="mx-auto text-center text-md-left mb-5 mb-md-0">
              <MDBCol>
                <h4 className="h4-responsive">
                  <MDBIcon
                    icon="map-marker-alt"
                    className="mr-2 text-primary"
                  />
                  <strong className="font-weight-bold">1682</strong> Rollins
                  Brook Ct
                </h4>
              </MDBCol>
            </MDBRow>
            <hr className="d-none d-md-block" />
            {/* Pricing section */}
            <MDBRow className="mx-auto text-center text-md-left">
              <MDBCol>
                <h3 className="font-weight-bold h3-responsive">
                  <MDBIcon icon="dollar-sign" className="mr-2  text-primary" />
                  1,894,500
                </h3>
              </MDBCol>
            </MDBRow>
            <hr className="d-none d-md-block" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default Main
