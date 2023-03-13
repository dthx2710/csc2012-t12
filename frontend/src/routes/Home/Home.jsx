import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  MDBBadge,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardLink,
} from "mdb-react-ui-kit";
import "./Home.css";
import NavBar from "../NavBar/NavBar";
import Medal from "../../assets/medal.png";
import Logo from "/recycling.svg";
import Giftbox from "../../assets/gift-box.png";
import Point from "../../assets/point.png";
import axios from "axios";

function Home({ user }) {
  const navigate = useNavigate();
  // get user data from backend with id from sessionStorage.getItem('token').id, using axios get /api/info/:id
  useEffect(() => {
    // if user is empty object, redirect to login page
    if (!user) {
      navigate("/");
    }
  }, []);

  function getUserTier() {
    if (user?.lifetimePoints < 1000) {
      return "Recycler";
    } else if (user?.lifetimePoints < 5000) {
      return "Recycling Enthusiast";
    } else if (user?.lifetimePoints < 10000) {
      return "Recycling Expert";
    } else if (user?.lifetimePoints < 20000) {
      return "Recycling Master";
    } else if (user?.lifetimePoints < 50000) {
      return "Recycling Legend";
    } else if (user?.lifetimePoints >= 50000){
      return "Recycling God";
    } else {
      return "Error";
    }
  }

  function getTierProgress() {
    if (user?.lifetimePoints < 1000) {
      return (
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "17%" }}
          aria-valuenow="17"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {user?.lifetimePoints}/1000
        </div>
      );
    } else if (user?.lifetimePoints < 5000) {
      return (
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {user?.lifetimePoints}/5000
        </div>
      );
    } else if (user?.lifetimePoints < 10000) {
      return (
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "50%" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {user?.lifetimePoints}/10000
        </div>
      );
    } else if (user?.lifetimePoints < 20000) {
      return (
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "75%" }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {user?.lifetimePoints}/20000
        </div>
      );
    } else if (user?.lifetimePoints < 50000) {
      return (
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "100%" }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {user?.lifetimePoints}/50000
        </div>
      );
    } else {
      return (
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "100%" }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {user?.lifetimePoints}/∞
        </div>
      );
    }
  }

  function getNextTier() {
    if (user?.lifetimePoints < 1000) {
      return "Recycling Enthusiast";
    } else if (user?.lifetimePoints < 5000) {
      return "Recycling Expert";
    } else if (user?.lifetimePoints < 10000) {
      return "Recycling Master";
    } else if (user?.lifetimePoints < 20000) {
      return "Recycling Legend";
    } else if (user?.lifetimePoints < 50000) {
      return "Recycling God";
    } else if (user?.lifetimePoints >= 50000) {
      return "Recycling God";
    } else {
      return "Error";
    }
  }

  return (
    <>
      <MDBContainer fluid>
        <div className="d-flex justify-content-center align-items-center">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="fw-bold">Recycle Smart.</h2>
        </div>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol col="12">
            <MDBCard
              className="bg-green mb-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "1000px" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold text-black mb-2 text-left">
                  {user?.name}
                </h4>
                <p className="text-black-med">You have: {user?.points} Points</p>
              </div>
              <p className="text-black-med">
                <MDBIcon fas icon="user" /> {user?.id}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <MDBBadge color="light" light>
                  <img src={Medal} alt="Medal" className="logo-small" />
                  {getUserTier()}
                </MDBBadge>
                <div
                  className="progress ms-2"
                  style={{ height: "20px", width: "100%" }}
                >
                  {getTierProgress()}
                </div>
              </div>
              <p className="text-right-small">
                Next Tier: {getNextTier()}{" "}
                <MDBIcon
                  fas
                  icon="question-circle"
                  data-mdb-toggle="tooltip"
                  title="Lifetime Points Accumulated for Next Achievable Tier ★"
                />
              </p>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol col="6">
            <MDBCard
              className="bg-green mb-10 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "750px" }}
            >
              <MDBCardBody className="d-flex flex-column">
                <MDBCardLink href="/points">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold text-black mb-2 text-left">
                      Browse All Rewards
                    </h4>
                    <img
                      src={Giftbox}
                      alt="Giftbox"
                      className="w-10"
                      style={{ maxWidth: "100px" }}
                    />
                  </div>
                </MDBCardLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol col="6">
            <MDBCard
              className="bg-green mb-10 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "750px" }}
            >
              <MDBCardBody className="d-flex flex-column">
                <MDBCardLink href="/guide">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold text-black mb-2 text-left">
                      How to get points?
                    </h4>
                    <img
                      src={Point}
                      alt="Point"
                      className="w-10"
                      style={{ maxWidth: "100px" }}
                    />
                  </div>
                </MDBCardLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <NavBar />
    </>
  );
}

export default Home;
