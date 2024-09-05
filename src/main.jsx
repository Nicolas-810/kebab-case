import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Page404 from './Page404/page404';
import Login from './Login/Login';
import './index.css';


const router = createBrowserRouter([
  { path: "/", element: <Login /> },  
  { path: "/Home", element: <Home /> },
  { path: "*", element: <Page404 /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
