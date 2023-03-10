import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardImage,

}
  from 'mdb-react-ui-kit';

function PopularRewards() {
    return (
      <MDBRow className='mt-5'>
        <MDBCol>
          <h2>Popular Rewards</h2>
  
          <MDBCard
            className='bg-white  my-5 mx-auto'
            style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='w-100 d-flex flex-column'>
              <MDBCardImage src='/Grab.svg' position='top' alt='...' />
              <MDBCardTitle>Grab</MDBCardTitle>
              <MDBCardText>
                $10 e-Voucher
              </MDBCardText>
              <MDBBtn>1000 points</MDBBtn>
            </MDBCardBody>
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
              <MDBBtn>1000 points</MDBBtn>
            </MDBCardBody>
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
              <MDBBtn>1000 points</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
  
  export default PopularRewards;