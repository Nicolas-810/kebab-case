import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
// import Login from "./pages/Login/Login";
import Page404 from "./pages/page404/Page404";
import Home from "./pages/home/Home";
import "./index.css"

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path:"/welcome", element:<Welcome />},
  { path: "/home", element: <Home /> },
  { path: "*", element: <Page404 /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);