import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
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
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Profile.css";
import NavBar from "../NavBar/NavBar";

function Profile({ user, setUser, sessionPassword, setSessionPassword }) {
  const navigate = useNavigate();
  const [disableEditing, setDisableEditing] = useState(true);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setusername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [points, setPoints] = useState("");
  const [lifetimePoints, setLifetimePoints] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      setId(user?.id);
      setName(user?.name);
      setusername(user?.username);
      setPoints(user?.points);
      setLifetimePoints(user?.lifetimePoints);
    }
  }, [user]);

  const startEditClick = () => {
    setDisableEditing(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsername = (event) => {
    setusername(event.target.value);
  };

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate current password
    if (currentPassword !== sessionPassword) {
      alert("Current password is incorrect.");
      return;
    }

    // Validate new password
    if (newPassword && newPassword !== confirmPassword) {
      alert("New password and confirm password must match.");
      return;
    }

    setDisableEditing(true);

    // Update user data
    axios
      .put("/api/user/" + user?.id, {
        name: name,
        username: username,
        password: newPassword || sessionPassword,
      })
      .then((response) => {});

    const updatedUser = {
      id: id,
      name: name,
      username: username,
      points: points,
      lifetimePoints: lifetimePoints,
    };
    setUser(updatedUser);
    setSessionPassword(newPassword || sessionPassword);

    // Clear form
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    alert("Profile updated successfully.");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    // Clear user data
    setUser(null);
    // Navigate to login page
    navigate("/");
  };

  return (
    <>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">
                  Welcome, {user?.name}
                </h2>
                <p className="text-black-50 mb-3">This is your Profile Page</p>

                <hr className="my-4" />

                <MDBBtn
                  className="mb-4 w-100"
                  size="lg"
                  color="primary"
                  onClick={startEditClick}
                  disabled={!disableEditing}
                >
                  Start Edit
                </MDBBtn>

                <form method="POST" onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    type="text"
                    label="Id"
                    size="lg"
                    value={id}
                    disabled={true}
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    type="text"
                    label="Name"
                    size="lg"
                    value={name}
                    onChange={handleNameChange}
                    disabled={disableEditing}
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    type="text"
                    label="Username"
                    size="lg"
                    value={username}
                    onChange={handleUsername}
                    disabled={disableEditing}
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    type="password"
                    label="Current Password"
                    size="lg"
                    value={currentPassword}
                    onChange={handleCurrentPasswordChange}
                    disabled={disableEditing}
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    type="password"
                    label="New Password"
                    size="lg"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    disabled={disableEditing}
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    type="password"
                    label="Confirm Password"
                    size="lg"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    disabled={disableEditing}
                  />

                  <MDBBtn className="mb-2 w-100" size="lg" color="primary">
                    Update
                  </MDBBtn>
                </form>

                <hr className="my-4" />

                <form onSubmit={handleLogout}>
                  <MDBBtn
                    className="mb-2 w-100"
                    size="lg"
                    style={{ backgroundColor: "#dd4b39" }}
                  >
                    Logout
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <NavBar />
    </>
  );
}

export default Profile;
