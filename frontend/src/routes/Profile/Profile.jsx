import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import axios from "axios";
import React, { useState, useEffect } from 'react';
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
  MDBBtn
}
  from 'mdb-react-ui-kit';
import './Profile.css';
import userData from '../../data/Users.json'

function Profile() {

  const navigate = useNavigate();

  const currentUser = userData.userData.find(user => user.login);
  const [disableEditing, setDisableEditing] = useState(true);
  const [id, setId] = useState(currentUser.id);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.username);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const startEditClick = () => {
    setDisableEditing(false);
  };

  const stopEditClick = () => {
    setDisableEditing(true);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
    if (currentPassword !== currentUser.password) {
      alert('Current password is incorrect.');
      return;
    }

    // Validate new password
    if (newPassword && newPassword !== confirmPassword) {
      alert('New password and confirm password must match.');
      return;
    }

    // Update user data
    const updatedUser = {
      ...currentUser,
      name,
      username: email,
      password: newPassword || currentUser.password,
    };
    const updatedUserData = userData.userData.map(user => {
      if (user.id === currentUser.id) {
        return updatedUser;
      } else {
        return user;
      }
    });
    userData.userData = updatedUserData;
    alert('Profile updated successfully.');
    axios.put("http://localhost:3001/userData/" + currentUser.id, {
      id: currentUser.id,
      username: email,
      password: newPassword,
      name: name,
      login: true,
    }).then((response) => {
      console.log(response.status, response.data.token);
    });

    // Clear form
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleLogout = (e) => {
    e.preventDefault();

    // Update database
    axios.put("http://localhost:3001/userData/" + currentUser.id, {
      id: currentUser.id,
      username: currentUser.username,
      password: currentUser.password,
      name: currentUser.name,
      login: false,
    }).then((response) => {
      console.log(response.status, response.data.token);
    });

    // Navigate to homepage
    window.location.href = "/";
  }


  return (
    <><MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Welcome, {currentUser.name}</h2>
              <p className="text-black-50 mb-3">This is your Profile Page</p>

              <hr className="my-4" />

              <MDBBtn className="mb-4 w-100" size='lg' color="primary" onClick={startEditClick} disabled={!disableEditing}>Start Edit</MDBBtn>

              <form method='POST' onSubmit={handleSubmit}>
                <MDBInput wrapperClass='mb-4 w-100' type='text' label='Id' size="lg" value={id} disabled={true} />
                <MDBInput wrapperClass='mb-4 w-100' type='text' label='Name' size="lg" value={name} onChange={handleNameChange} disabled={disableEditing} />
                <MDBInput wrapperClass='mb-4 w-100' type='email' label='Email' size="lg" value={email} onChange={handleEmailChange} disabled={disableEditing} />
                <MDBInput wrapperClass='mb-4 w-100' type='password' label='Current Password' size="lg" value={currentPassword} onChange={handleCurrentPasswordChange} disabled={disableEditing} />
                <MDBInput wrapperClass='mb-4 w-100' type='password' label='New Password' size="lg" value={newPassword} onChange={handleNewPasswordChange} disabled={disableEditing} />
                <MDBInput wrapperClass='mb-4 w-100' type='password' label='Confirm Password' size="lg" value={confirmPassword} onChange={handleConfirmPasswordChange} disabled={disableEditing} />


                <MDBBtn className="mb-2 w-100" size='lg' color="primary" onClick={stopEditClick}>Update</MDBBtn>

              </form>

              <hr className="my-4" />

              <form onSubmit={handleLogout}>
                <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                  Logout
                </MDBBtn>
              </form>




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