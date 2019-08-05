import React, { Component } from "react"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBAnimation,
} from "mdbreact"
import logo from "../images/logo.svg"
import { Link } from "gatsby"

class Navbar extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <MDBNavbar color="white" light expand="lg" className="container-fluid">
        <MDBContainer>
          <MDBNavbarBrand>
            <Link to="/">
              <MDBAnimation type="fadeIn">
                <img
                  src={logo}
                  alt="Prime Properties Logo"
                  height="50rem"
                  className="mr-3"
                />
              </MDBAnimation>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right className="text-center py-3 py-md-0">
              <MDBNavItem>
                <MDBAnimation type="fadeIn">
                  <MDBIcon icon="mobile-alt" className="mr-2" />
                  <a href="tel:888-555-1212">
                    <strong>(888) 555-1212</strong>
                  </a>
                  <span className="ml-3">
                    &nbsp;Call to schedule your <strong>private</strong> tour!
                  </span>
                </MDBAnimation>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    )
  }
}

export default Navbar
