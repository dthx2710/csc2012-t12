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
import Guide from "./routes/Guideline/Guide";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  // user data global state
  const [user, setUser] = useState(null);
  const [sessionPassword, setSessionPassword] = useState(null);
  const [recycleInterval, setRecycleInterval] = useState(null);

  // if loggedIn is true
  // axios get request to /recycle every 1 second, if success set cooldown of 5 seconds and add rewards
  // if fail, do nothing

  const startRecycleInterval = () => {
    const intervalId = setInterval(async () => {
      const status = await pollRecycle();
      if (status) {
        clearInterval(intervalId);
        setTimeout(() => {
          startRecycleInterval();
        }, 5000);
      }
    }, 1000);
    setRecycleInterval(intervalId);
  };

  useEffect(() => {
    clearInterval(recycleInterval);
    if (user) {
      startRecycleInterval();
    } else {
      clearInterval(recycleInterval);
    }
    return () => clearInterval(recycleInterval);
  }, [user?.id]);

  const pollRecycle = async () => {
    let status = false;
    await axios.get("/api/recycle/" + user.id).then((res) => {
      if (res.data.status === true) {
        // can = 75 points, bottle = 125 points, paper = 25 points
        const rewardMap = {
          can: 75,
          plastic: 125,
          paper: 25,
          nothing: 0,
        };
        const rewardPoint = rewardMap[res.data.type];
        // add reward points
        // post request to /api/point/{id} to add points
        axios.post("/api/point/" + user.id, { points_change: rewardPoint });

        console.log("Recycled: ", res.data.type);
        console.log("Points added: ", rewardPoint);

        // update user data
        // setUser({ ...user, points: user.points + rewardPoint, lifetimePoints: user.lifetimePoints + rewardPoint })
        axios.get("/api/user/" + user.id).then((res) => {
          setUser({
            ...user,
            points: res.data.points,
            lifetimePoints: res.data.lifetimePoints,
          });
        });
        // log on window
        alert(
          "You recycled a " +
            res.data.type +
            " and earned " +
            rewardPoint +
            " points"
        );
        status = true;
      }
    });
    return status;
  };

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
