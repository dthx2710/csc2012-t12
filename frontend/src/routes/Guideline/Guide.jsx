import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {
    MDBBadge,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardLink
}
    from 'mdb-react-ui-kit';
import './Guide.css';
import NavBar from '../NavBar/NavBar'

import Logo from '/recycling.svg';

function Guide() {

    return (
        <>
            <MDBContainer fluid>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={Logo} alt="Logo" className="logo" />
                    <h2 className="fw-bold">Recycle Smart.</h2>
                </div>
                <MDBRow className='d-flex justify-content-center align-items-center vw100width'>
                    <MDBCol col='12'>
                        <MDBCard className='bg-green my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '750px' }}>
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="fw-bold text-black mb-2 text-left">Guide to earn points:</h4>
                            </div>
                            <p className="text-black-med">Very good question. What do you think?</p>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>

            <NavBar />
        </>
    );


}

export default Guide;