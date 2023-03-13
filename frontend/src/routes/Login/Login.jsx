import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "./Login.css";
import logo from "/recycling.svg";

function Login({ user, setUser, setSessionPassword }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      console.log("User:", user);
      navigate("/home");
    }
  }, [user]);

  const handleSubmit = (e) => {
    if (username === "" || password === "") {
      alert("Please enter username and password.");
      return;
    }
    e.preventDefault();
    const login = {
      username: username,
      password: password,
    };
    axios
      .post("/api/login", login)
      .then((response) => {
        if (response.status === 200) {
          axios
            .get(`/api/user/${response.data.id}`)
            .then((res) => {
              setUser({ ...res.data, id: response.data.id });
              setSessionPassword(password);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid username or password. Please try again.");
      });
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <form onSubmit={handleSubmit}>
                <img src={logo} alt="logo" className="logo" />
                <h2 className="fw-bold mb-2 text-center">Recycle Smart</h2>
                <p className="text-black-50 mb-3">
                  Please enter your username and password!
                </p>

                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Username"
                  id="formControlLg"
                  type="text"
                  size="lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  className="mb-4"
                  label="Remember password"
                />

                <MDBBtn className="mb-2 w-100" size="lg">
                  Login
                </MDBBtn>

                <hr className="my-4" />

                <MDBBtn
                  className="mb-2 w-100"
                  size="lg"
                  style={{ backgroundColor: "#dd4b39" }}
                >
                  <MDBIcon fab icon="google" className="mx-2" />
                  Sign in with google
                </MDBBtn>

                <MDBBtn
                  className="mb-4 w-100"
                  size="lg"
                  style={{ backgroundColor: "#3b5998" }}
                >
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
