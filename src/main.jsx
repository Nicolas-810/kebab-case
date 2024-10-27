import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
// import Login from "./pages/Login/Login";
import Page404 from "./pages/page404/Page404";
import Home from "./pages/home/Home";
import "./index.css"
import Problematics from './pages/problematics/Problematics'; 


const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },


  // { path: "/login", element: <Login /> },
  { path:"/problematics", element:<Problematics />},
  { path: "/home", element: <Home /> },
  { path: "*", element: <Page404 /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
