import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody
}
  from 'mdb-react-ui-kit';
import './Profile.css';

function Profile() {
  return (
    <><MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">This is Profile Page</h2>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    
    <MDBNavbar fixed='bottom' light style={{ backgroundColor: '#FFFFFF' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand>
            <MDBIcon fas icon="home" />
            <MDBNavbarLink href='/home'>Home</MDBNavbarLink>
          </MDBNavbarBrand>

          <MDBNavbarBrand>
            <MDBIcon fas icon="recycle" />
            <MDBNavbarLink href='/nearme'>Near Me</MDBNavbarLink>
          </MDBNavbarBrand>

          <MDBNavbarBrand>
            <MDBIcon fas icon="award" />
            <MDBNavbarLink href='/points'>Points</MDBNavbarLink>
          </MDBNavbarBrand>

          <MDBNavbarBrand>
            <MDBIcon far icon="user-circle" />
            <MDBNavbarLink aria-current='page' href='#'>Profile</MDBNavbarLink>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar></>
  );
}

export default Profile;