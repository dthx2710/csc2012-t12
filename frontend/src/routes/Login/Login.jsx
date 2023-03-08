import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import './Login.css';
import userData from '../../data/Users.json'

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //const fs = require('fs'); // Import the File System module
  //const users = require('../../data/Users.json');

  const handleSubmit = (e) => {
    e.preventDefault()
    function checkCredentials(username, password) {
      const currentUser = userData.userData.find(user => user.username === username && user.password === password);
      if (currentUser) {
        alert('User logged in successfully.');

        /*
        axios.put("http://localhost:3001/userData/" + currentUser.id, {
          id: currentUser.id,
          username: currentUser.username,
          password: currentUser.password,
          name: currentUser.name,
          login: true,
        }).then((response) => {
          console.log(response.status, response.data.token);
        }).catch((error) => {
          console.error(error);
        });*/

        // Navigate to homepage
        window.location.href = "/Home";
        //navigate('/home', { replace: true });
      } else {
        // Show an error message if the email and password do not match any user
        alert("Invalid email or password. Please try again.");
      }
    }
    checkCredentials(username, password);
  }


  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <form onSubmit={handleSubmit}>
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">Please enter your login and password!</p>

                <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" value={username} onChange={(e) => setUsername(e.target.value)} />
                <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />

                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                <MDBBtn className="mb-2 w-100" size='lg'>
                  Login
                </MDBBtn>

                <hr className="my-4" />

                <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                  <MDBIcon fab icon="google" className="mx-2" />
                  Sign in with google
                </MDBBtn>

                <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                  <MDBIcon fab icon="facebook-f" className="mx-2" />
                  Sign in with facebook
                </MDBBtn>
              </form>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;