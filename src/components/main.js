import React from "react"
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBAnimation } from "mdbreact"
import Form from "./form"

const Main = () => {
  return (
    <>
      <MDBContainer>
        <MDBRow className="pb-5">
          <MDBCol
            size="12"
            md="6"
            lg="5"
            className="order-md-last contact-form"
          >
            <MDBAnimation type="bounceInUp" delay="0.4s">
              <Form />
            </MDBAnimation>
          </MDBCol>
          <MDBCol size="12" md="6" lg="7" className="pt-5 pr-md-5">
            <MDBRow>
              <MDBCol className="pb-5 text-center text-md-left">
                <MDBAnimation type="bounceInUp" delay="0s">
                  <h2>
                    <strong>
                      <MDBIcon
                        icon="info-circle"
                        className="mr-2 text-primary"
                      />
                      Property Details
                    </strong>
                  </h2>
                  <hr />
                  <p className="text-justify text-md-left">
                    This architectural masterpiece is designed to take advantage
                    of breathtaking views from nearly every angle. Bask in the
                    morning sun on the veranda, or enjoy a evening dip in the
                    infinity pool. Whatever your fancy, this home has plenty to
                    offer. Located in the heart of downtown Charlotte, your
                    close to everything. Seeing is believing, so schedule your
                    private viewing today!
                  </p>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mx-auto text-center text-md-left">
              <MDBCol>
                <h1 className="font-weight-bold">3</h1>
                <MDBIcon icon="bed" className="mr-2 text-primary" />
                Bedrooms
              </MDBCol>
              <MDBCol>
                <h1 className="font-weight-bold">2</h1>
                <MDBIcon icon="bath" className="mr-2 text-primary" /> Baths
              </MDBCol>
              <MDBCol>
                <h1 className="font-weight-bold">2316</h1>
                <MDBIcon icon="ruler-combined" className="mr-2 text-primary" />
                Sq/Ft
              </MDBCol>
            </MDBRow>
            <hr />

            <MDBRow className="mx-auto text-center text-md-left">
              <MDBCol>
                <h4>
                  <MDBIcon
                    icon="map-marker-alt"
                    className="mr-2 text-primary"
                  />
                  <strong className="font-weight-bold">1682</strong> Rollins
                  Brook Ct
                </h4>
              </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow className="mx-auto text-center text-md-left">
              <MDBCol>
                <h3 className="font-weight-bold">
                  <MDBIcon icon="dollar-sign" className="mr-2  text-primary" />
                  1,894,500
                </h3>
              </MDBCol>
              {/* <MDBCol size="auto">
                <h3>
                  <MDBIcon icon="hammer" className="mr-2  text-primary" />
                  Built <strong className="font-weight-bold">2015</strong>
                </h3>
              </MDBCol> */}
            </MDBRow>
            <hr />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default Main
