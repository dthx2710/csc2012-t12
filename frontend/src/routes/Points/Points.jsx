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
  MDBCardFooter

}
  from 'mdb-react-ui-kit';
import './Points.css';
import NavBar from '../NavBar/NavBar'

function Points() {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };



  return (
    <>
      <div>
        <MDBTabs justify className='mb-3 h-100 position-fixed top-0 start-0 end-0' style={{ 'zIndex': '9999' }} >
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'} style={{ background: '#FFFFF1' }}>
              Home
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'} style={{ background: '#FFFFF1' }}>
              Rewards
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'} style={{ background: '#FFFFF1' }}>
              History
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
      </div>

      <MDBContainer fluid style={{ marginTop: '3.5rem', marginBottom: '7rem' }}>
        <MDBRow >
          <MDBCol >
            <MDBTabsContent>
              <MDBTabsPane show={basicActive === 'tab1'}>

                <h2>Popular Rewards</h2>

                <MDBCard
                  className='bg-white  my-5 mx-auto'
                  style={{ borderRadius: '1rem', maxWidth: '500px' }}
                >
                  <MDBCardBody className='w-100 d-flex flex-column'>
                    <MDBCardImage src='/Grab.svg' position='top' alt='...' />
                    <MDBCardTitle>Grab</MDBCardTitle>
                    <MDBCardText>
                      $10 e-Voucher
                    </MDBCardText>
                    <MDBBtn>1000 points</MDBBtn>
                  </MDBCardBody>
                  {/* <MDBCardFooter>1000 points</MDBCardFooter> */}
                </MDBCard>
                
                <MDBCard
                  className='bg-white  my-5 mx-auto'
                  style={{ borderRadius: '1rem', maxWidth: '500px' }}
                >
                  <MDBCardBody className='w-100 d-flex flex-column'>
                    <MDBCardImage src='/Shopee.svg' position='top' alt='...' />
                    <MDBCardTitle>Grab</MDBCardTitle>
                    <MDBCardText>
                      $10 e-Voucher
                    </MDBCardText>
                    <MDBBtn>1000 points</MDBBtn>
                  </MDBCardBody>
                  {/* <MDBCardFooter>1000 points</MDBCardFooter> */}
                </MDBCard>
                <MDBCard
                  className='bg-white  my-5 mx-auto'
                  style={{ borderRadius: '1rem', maxWidth: '500px' }}
                >
                  <MDBCardBody className='w-100 d-flex flex-column'>
                    <MDBCardImage src='/Lazada.svg' position='top' alt='...' />
                    <MDBCardTitle>Grab</MDBCardTitle>
                    <MDBCardText>
                      $10 e-Voucher
                    </MDBCardText>
                    <MDBBtn>1000 points</MDBBtn>
                  </MDBCardBody>
                  {/* <MDBCardFooter>1000 points</MDBCardFooter> */}
                </MDBCard>

              </MDBTabsPane>
              <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
              <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <NavBar />
    </>
  );
}

export default Points;