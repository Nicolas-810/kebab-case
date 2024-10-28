import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import groupLogo from "../../assets/Icon.png";
import watergruoup from "../../assets/Skin.webp";
import "./Welcome.css";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";


const Welcome = () => {
  const { user, loginGoogleWithPopUp, observeAuthState, loading } = useAuthStore();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  useEffect(() => {
    if (user) {
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      UserDAO.createUser(newUser);
      navigate("/Home");
    }
  }, [user, navigate]);

  const handleLogin = () => {
    setActiveTab("login");
    setShowModal(true);
  };

  const handleRegister = () => {
    setActiveTab("register");
    setShowModal(true);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    navigate("/Home");
  };

  const handleGoogleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  const handleSubmitRegister = () => {
    if (username === "") {
      setErrorMessage("Por favor escriba su nombre de usuario.");
    } else {
      navigate("/Home");
    }
  };

  return (
    <div className="page-container">
      <header className="navbar-container">
        <div className="logo-section">
          <img src={groupLogo} alt="Logo del proyecto" className="logo" />
          <h3 className="project-title">HYDRONET</h3>
        </div>
        <div className="button-section">
          <button onClick={handleLogin}>Iniciar sesión</button>
          <button onClick={handleRegister}>Regístrate</button>
        </div>
      </header>

      <main className="content-container">
        <div className="image-section">
          <img src={watergruoup} alt="Cuidado del agua" className="turtle-image" />
        </div>
        <div className="text-section">
          <h1>Bienvenidos</h1>
          <p>
            ¿Listo para hacer la diferencia? Inicia sesión y explora cómo puedes
            proteger el agua, uno de nuestros recursos más preciados.
          </p>
        </div>
      </main>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <div className="tabs">
              <button
                className={`tab ${activeTab === "login" ? "active" : ""}`}
                onClick={() => handleTabChange("login")}
              >
                Iniciar sesión
              </button>
              <button
                className={`tab ${activeTab === "register" ? "active" : ""}`}
                onClick={() => handleTabChange("register")}
              >
                Regístrate
              </button>
            </div>

            {activeTab === "login" ? (
              <div className="login-section">
                <form onSubmit={handleSubmitLogin}>
                  <label>
                    Correo electrónico
                    <input
                      type="email"
                      className="rounded-input"
                      placeholder="Ingrese su correo"
                    />
                  </label>
                  <label>
                    Contraseña
                    <input
                      type="password"
                      className="rounded-input"
                      placeholder="Ingrese su contraseña"
                    />
                  </label>
                  <button type="submit" className="modal-button">
                    Iniciar sesión
                  </button>
                </form>
                <button className="google-button" onClick={handleGoogleLogin}>
                  Iniciar sesión con Google
                </button>
              </div>
            ) : (
              <div className="register-section">
                <form onSubmit={handleSubmitRegister}>
                  <label>
                    Nombre de usuario
                    <input
                      type="text"
                      className="rounded-input"
                      placeholder="Nombre de usuario"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </label>
                  {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                  <button type="submit" className="modal-button">
                    Regístrate
                  </button>
                </form>
                <button className="google-button" onClick={handleGoogleLogin}>
                  Regístrate con Google
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;