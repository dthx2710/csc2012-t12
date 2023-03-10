import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
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
import PopularRewards from './PopularRewards';
import Rewards from './Rewards';
import History from './History';


function Points() {
  const [basicActive, setBasicActive] = useState('tab1');
  const [tabZIndex, setTabZIndex] = useState(0);
  const [navBarZIndex, setNavBarZIndex] = useState(0);

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  useEffect(() => {
    if(basicActive === 'tab1' || basicActive === 'tab2' || basicActive === 'tab3'){
      setTabZIndex(0);
      setNavBarZIndex(1);
    }
    else{
      setTabZIndex(1);
      setNavBarZIndex(0);
    }
  }, [basicActive, setNavBarZIndex, setTabZIndex]);

  return (
    <>
      <div>
        <MDBTabs justify className='mb-3 h-100 position-fixed top-0 start-0 end-0' style={{ zIndex: tabZIndex }} >
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
            {basicActive === 'tab1' && <PopularRewards />}
            {basicActive === 'tab2' && <Rewards />}
            {basicActive === 'tab3' && <History />}
            {
              /*
              <MDBTabsContent>
                <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
                <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
              </MDBTabsContent>
              */
            }

          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <NavBar zIndex={navBarZIndex} onClick={() => handleBasicClick('navBar')} active={basicActive === 'navBar'}/>
    </>
  );
}

export default Points;