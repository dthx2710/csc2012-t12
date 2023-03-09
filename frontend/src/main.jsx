import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import NearMe from "./routes/NearMe/NearMe";
import Points from "./routes/Points/Points";
import Profile from "./routes/Profile/Profile";
import Guide from "./routes/Guideline/guide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "nearme",
    element: <NearMe />,
    errorElement: <ErrorPage />,
  },
  {
    path: "points",
    element: <Points />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "guide",
    element: <Guide />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);