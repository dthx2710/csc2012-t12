import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import NearMe from "./routes/NearMe/NearMe";
import Points from "./routes/Points/Points";
import Profile from "./routes/Profile/Profile";
import Guide from "./routes/Guideline/guide";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  // user data global state
  const [user, setUser] = useState(null);
  const [sessionPassword, setSessionPassword] = useState(null);

  // if loggedIn is true
  // axios get request to /recycle every 1 second, if success set cooldown of 5 seconds and add rewards
  // if fail, do nothing
  // setInterval(() => {
  //   axios
  //     .get("/recycle")
  //     .then(() => {
  //       setInterval(() => {}, 5000);
  //       // add reward points
  //       // log on window
  //     })
  //     .catch(() => {});
  // }, 1000);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Login
          user={user}
          setUser={setUser}
          setSessionPassword={setSessionPassword}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "home",
      element: <Home user={user} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "nearme",
      element: <NearMe user={user} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "points",
      element: <Points user={user} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "profile",
      element: (
        <Profile
          user={user}
          setUser={setUser}
          sessionPassword={sessionPassword}
          setSessionPassword={setSessionPassword}
        />
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "guide",
      element: <Guide user={user} />,
      errorElement: <ErrorPage />,
    },
  ]);

  if (!router) {
    // Render a loading indicator while router data is being fetched
    return <div>Loading...</div>;
  }
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

root.render(<App />);
