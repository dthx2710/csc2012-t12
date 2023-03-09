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
} from 'mdb-react-ui-kit';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import smartTrashBinMarker from '../../assets/smart-trash-bin.png'
import smartTrashBinIcon from '../../assets/rubbish-bin.png'
import './NearMe.css';

var arrCoordinates = [[1.2801112423038696, 103.78607388464746],[1.3427705364726483, 103.7763443205058],[1.324155975572592, 103.8099829305296],[1.4296426377331177, 103.83581437747013],[1.4186394097777044, 103.84118393695039],[1.4446447484802805, 103.77733071836583], [1.4320572404210585, 103.79404986305676], [1.439017890822763, 103.7956759145253], [1.4429775327762566, 103.79042251747308], [1.4433526563936356, 103.79054759835529], [1.443610141482127, 103.8241901533888], [1.4441709237123386, 103.83050095731608], [1.352566573692155, 103.84941345156395], [1.3776481263506677, 103.87856787880655], [1.3742774981966093, 103.89403757461255], [1.393509841683452, 103.89443423347936], [1.3945011953576465, 103.90435070514987], [1.380016526361218, 103.95422329735685], [1.3762493571485368, 103.93300204798197], [1.3545384506931069, 103.9452984728534], [1.3455169664213207, 103.95333081490651], [1.3358014845146626, 103.96166065110971], [1.3047575327477703, 103.87316931919425], [1.3130851952333416, 103.85571632901127], [1.2921668475634462, 103.84629568080254], [1.2671835716156774, 103.82269447790297], [1.3061454780867878, 103.8321151258862], [1.2961324242176315, 103.83142097286928], [1.2899857774586543, 103.80583647595938], [1.3352357106685386, 103.74687836951368], [1.3432397547019266, 103.69771320908455], [1.3349704460830627, 103.74257401990049], [1.328470870678943, 103.67886403619327], [1.3487488455501095, 103.71235541446127], [1.3812123082024015, 103.75996583892852], [1.351267267922168, 103.74893962827556], [1.3636990830933522, 103.76438537093073], [1.3789394595996232, 103.76289514992459], [1.3924100193122546, 103.74334587859327], [1.3973213367991453, 103.7468746978746], [1.413066379103989, 103.74616736656864], [1.436377581848243, 103.78587677591594], [1.293494, 103.857170], [1.369115, 103.845436], [1.371778, 103.893059]]

var LeafIcon = L.Icon.extend({
  options: {
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [-3, -38]
  }
});

const binIcon = new LeafIcon({ iconUrl: smartTrashBinMarker })

function setRecyclingBinsMarkers() {
  return arrCoordinates.map((coords) => {
    return (
      <Marker position={coords}
        icon={binIcon}>
        <Popup>Recycle Smart Bin</Popup>
      </Marker>
    );
  });
}

function NearMe() {
  return (
    <>
      <MDBContainer fluid>
        <h2 className="fw-bold mb-2 text-center"><MDBIcon fas icon="trash" /> Recycle Smart Bins Near Me</h2>

        <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem' }}>

        <p className="text-black-50 mb-3">Find a Recycle Smart Bin near you!</p>

          <MapContainer style={{ width: "75vh", height: "75vh" }} center={[1.3521, 103.8198]} zoom={12} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {setRecyclingBinsMarkers()}
          </MapContainer>

        </MDBCard>




      </MDBContainer>

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
    </>
  );

}

export default NearMe;

