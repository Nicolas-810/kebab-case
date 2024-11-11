import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import groupLogo from "../../assets/Icon.png";
import watergruoup from "../../assets/Skin.webp";
import waterturtle from "../../assets/turtleA.jpg"
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import "./Welcome.css";


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
      navigate("/home");
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
    navigate("/home");
  };

  const handleGoogleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  const handleSubmitRegister = () => {
    if (username === "") {
      setErrorMessage("Por favor escriba su nombre de usuario.");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="page-container-we">
      <header className="navbar-container-we">
        <div className="logo-section">
          <img src={groupLogo} alt="Logo del proyecto" className="logo" />
          <h3 className="project-title">HYDRONET</h3>
        </div>
        <div className="button-section">
          <button onClick={handleLogin}>Iniciar sesión</button>
          <button onClick={handleRegister}>Regístrate</button>
        </div>
      </header>

      <main className="content-container-we">
        <div className="image-section">
          <div className="image-container">
            <img src={waterturtle} alt="Antes del cuidado del agua" className="before-image" />
            <p className="image-label">Antes</p>
          </div>
          <div className="image-container">
            <img src={watergruoup} alt="Después del cuidado del agua" className="after-image" />
            <p className="image-label">Después</p>
          </div>
        </div>
        <div className="text-section">
          <h1>BIENVENIDOS</h1>
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