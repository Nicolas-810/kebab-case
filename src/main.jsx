import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

import Home from "./pages/home/Home";
import Welcome from "./pages/welcome/Welcome";
import Page404 from "./pages/page404/Page404";
import WaterPollution from "./pages/waterpollution/WaterPollution";
import OceanAcidification from "./pages/OceanAcidification/OceanAcidification";
import WaterScarcity from "./pages/waterscarcity/WaterScarcity";
import ModelScarcity from "./pages/modelScarcity/modelScarcity";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/home", element: <Home /> },
  { path: "/WaterScarcity", element: <WaterScarcity /> },
  { path: "/WaterPollution", element: <WaterPollution /> },
  { path: "/OceanAcidification", element: <OceanAcidification /> },
  { path: "/modelScarcity", element: <ModelScarcity /> },
  { path: "*", element: <Page404 /> }, 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
