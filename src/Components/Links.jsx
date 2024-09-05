import React from "react";
import useAuthStore from "../stores/use-auth-store";
import "./Links.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Links = () => {
  const { logout } = useAuthStore();

  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    console.log("Clic en cerrar sesión");
    navigate("/");
    logout();
  }, [logout]);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <button className="button-logout" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Links;
