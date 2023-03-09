import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarLink,
  MDBNavbarBrand,
}
from 'mdb-react-ui-kit';
import './NavBar.css';

function NavBar() {
  return (
    <MDBNavbar fixed='bottom' light style={{ backgroundColor: '#FFFFFF' }}>
    <MDBContainer fluid>
      <MDBNavbarBrand>
        <MDBIcon fas icon="home" />
        <MDBNavbarLink href='/home'>Home</MDBNavbarLink>
      </MDBNavbarBrand>

      <MDBNavbarBrand className='active'>
        <MDBIcon fas icon="recycle" />
        <MDBNavbarLink aria-current='page' href='#'>Near Me</MDBNavbarLink>
      </MDBNavbarBrand>

      <MDBNavbarBrand>
        <MDBIcon fas icon="award" />
        <MDBNavbarLink href='/points'>Points</MDBNavbarLink>
      </MDBNavbarBrand>

      <MDBNavbarBrand>
        <MDBIcon far icon="user-circle" />
        <MDBNavbarLink href='/profile'>Profile</MDBNavbarLink>
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar>
  );
}

export default NavBar;