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
            {/* <strong>Prime Properties</strong> */}
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
          {/* <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem active>
                <Link to="#!" className="nav-link">
                  Home
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="#!" className="nav-link">
                  Features
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to="#!" className="nav-link">
                  Pricing
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Dropdown</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Something else here
                    </MDBDropdownItem>
                    <MDBDropdownItem href="#!">
                      Something else here
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse> */}
        </MDBContainer>
      </MDBNavbar>
    )
  }
}

export default Navbar
