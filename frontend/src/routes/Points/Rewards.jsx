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
  MDBCardBody,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardImage,
  MDBCardFooter,
  MDBBadge,
  MDBListGroup,
  MDBListGroupItem

}
  from 'mdb-react-ui-kit';

function Rewards() {
  return (
    <MDBRow className='mt-5'>
      <MDBCol>
        <h2>My Rewards</h2>

        <MDBCard
          className='bg-white  my-5 mx-auto'
          style={{ borderRadius: '1rem', maxWidth: '500px' }}>
          <MDBCardBody className='w-100 d-flex flex-column'>
            <MDBCardImage src='/Grab.svg' position='top' alt='...' />
            <MDBCardTitle>Grab</MDBCardTitle>
            <MDBCardText>
              $10 e-Voucher
            </MDBCardText>
            {/* <MDBBtn>1000 points</MDBBtn> */}
          </MDBCardBody>
          <MDBCardFooter className='text-muted'>5a384bf76abd08ec77c</MDBCardFooter>
        </MDBCard>

        <MDBCard
          className='bg-white  my-5 mx-auto'
          style={{ borderRadius: '1rem', maxWidth: '500px' }}
        >
          <MDBCardBody className='w-100 d-flex flex-column'>
            <MDBCardImage src='/Shopee.svg' position='top' alt='...' />
            <MDBCardTitle>Shopee</MDBCardTitle>
            <MDBCardText>
              $10 e-Voucher
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter className='text-muted'>3cfd66d8913e0</MDBCardFooter>
        </MDBCard>

        <MDBCard
          className='bg-white  my-5 mx-auto'
          style={{ borderRadius: '1rem', maxWidth: '500px' }}
        >
          <MDBCardBody className='w-100 d-flex flex-column'>
            <MDBCardImage src='/Lazada.svg' position='top' alt='...' />
            <MDBCardTitle>Lazada</MDBCardTitle>
            <MDBCardText>
              $10 e-Voucher
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter className='text-muted'>76abd08ec77c3cfd66d89</MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}

export default Rewards;
