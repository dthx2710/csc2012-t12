import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import React from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarLink,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import "./NavBar.css";

function NavBar(props) {
  const { zIndex } = props;

  return (
    <MDBNavbar
      fixed="bottom"
      light
      style={{ backgroundColor: "#FFFFFF", zIndex: zIndex }}
    >
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <MDBIcon className="me-3" fas icon="home" />
          <Link to="/home">Home</Link>
        </MDBNavbarBrand>

        <MDBNavbarBrand className="active">
          <MDBIcon className="me-3" fas icon="recycle" />
          <Link to="/nearme">Near Me</Link>
        </MDBNavbarBrand>

        <MDBNavbarBrand>
          <MDBIcon className="me-3" fas icon="award" />
          <Link to="/points">Points</Link>
        </MDBNavbarBrand>

        <MDBNavbarBrand>
          <MDBIcon className="me-3" far icon="user-circle" />
          <Link to="/profile">Profile</Link>
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavBar;
