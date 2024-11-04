import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page404 from "./pages/page404/Page404";
import Home from "./pages/home/Home";
import Welcome from "./pages/welcome/Welcome";
import WaterScarcity from "./pages/waterscarcity/WaterScarcity";
import WaterPollution from "./pages/waterpollution/WaterPollution";
import OceanAcidificacion from "./pages/oceanacidification/OceanAcidification";
import "./index.css"

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/home", element: <Home /> },
  { path: "*", element: <Page404 /> },
  { path: "/WaterScarcity", element: <WaterScarcity /> },
  { path: "/WaterPullution", element: <WaterPollution/>},
  { path: "/OceanAcidification", element: <OceanAcidificacion/>}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);