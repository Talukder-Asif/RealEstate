import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./Layout/MainLayout";
import HomeLayout from "./Pages/HomePage/HomeLayout";
import AuthProvider from "./AuthProvider/AuthProvider";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/Resistation/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path:"/signin",
        element:<SignIn></SignIn>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
