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

function History() {
  return (
    <>
    <h2>History</h2>
    <MDBListGroup light style={{ minWidth: '18rem', "text-align": "left"}}>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start' style={{padding: "1rem 0.5rem"}}>
        <div className='ms-2 me-auto'>
          <div className='fw-bold' >Plastic Bottle</div>10 Feb 2023 10:35 
        </div>
        <MDBBadge pill light>
          +125 points
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start' style={{padding: "1rem 0.5rem"}}>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Plastic Bottle</div>10 Feb 2023 10:37 
        </div>
        <MDBBadge pill light>
          +125 points
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start' style={{padding: "1rem 0.5rem"}}>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Alluminium Can</div>11 Feb 2023 15:43 
        </div>
        <MDBBadge pill light>
          +75 points
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start' style={{padding: "1rem 0.5rem"}}>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Plastic Bottle</div>2 Mar 2023 12:25 
        </div>
        <MDBBadge pill light>
          +125 points
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start' style={{padding: "1rem 0.5rem"}}>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Plastic Bottle</div>2 Mar 2023 12:25 
        </div>
        <MDBBadge pill light>
          +125 points
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start' style={{padding: "1rem 0.5rem"}}>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Plastic Bottle</div>2 Mar 2023 12:25 
        </div>
        <MDBBadge pill light>
          +125 points
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start' style={{padding: "1rem 0.5rem"}}>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Plastic Bottle</div>2 Mar 2023 12:25 
        </div>
        <MDBBadge pill light>
          +125 points
        </MDBBadge>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-start' style={{padding: "1rem 0.5rem"}}>
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>Plastic Bottle</div>2 Mar 2023 12:25 
        </div>
        <MDBBadge pill light>
          +125 points
        </MDBBadge>
      </MDBListGroupItem>
    </MDBListGroup></>
  );
}

export default History;
