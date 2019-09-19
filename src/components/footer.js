import React from "react"
import { MDBFooter } from "mdbreact"
import logo from "../images/icon.svg"

const Footer = () => {
  return (
    <>
      <MDBFooter className="font-small container-fluid">
        <div className="text-center py-4">
          <img
            src={logo}
            alt="Prime Properties Logo"
            height="40px"
            className="mr-3"
          />
          &copy; {new Date().getFullYear()} Copyright -{" "}
          <strong>Prime Properties Realty</strong>
        </div>
      </MDBFooter>
    </>
  )
}

export default Footer
