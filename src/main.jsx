import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

import Home from "./pages/home/Home";
import Welcome from "./pages/welcome/Welcome";
import Page404 from "./pages/page404/Page404";
import WaterPollution from "./pages/waterpollution/WaterPollution";
import OceanAcidification from "./pages/oceanacidification/OceanAcidification";
import ModelScarcity from "./pages/modelScarcity/ModelScarcity";
import WaterScarcity from "./pages/waterscarcity/WaterScarcity";
import Quiz from "./pages/quiz/Quiz";
import Quizv2 from "./pages/quiz/Quizv2";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/home", element: <Home /> },
  { path: "/WaterScarcity", element: <WaterScarcity /> },
  { path: "/WaterPollution", element: <WaterPollution /> },
  { path: "/OceanAcidification", element: <OceanAcidification /> },
  { path: "/ModelScarcity", element: <ModelScarcity /> },
  { path: "/Quiz", element: <Quiz /> },
  { path: "/Quizv2", element: <Quizv2 /> },
  { path: "*", element: <Page404 /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
