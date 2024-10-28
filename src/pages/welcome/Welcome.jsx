import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import groupLogo from "../../assets/Icon.png";
import watergruoup from "../../assets/Skin.webp";
import WelcomeLogo from "../../assets/bienvenido.png";
import "./Welcome.css";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";

const Welcome = () => {
  const { user, loginGoogleWithPopUp, observeAuthState, loading } =
    useAuthStore();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("login"); // Estado para la pestaña activa
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

  // Observa cambios en el estado de autenticación
  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  // Si el usuario está autenticado, redirige y crea el usuario
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

  // Maneja el clic en "Iniciar sesión"
  const handleLogin = () => {
    setActiveTab("login");
    setShowModal(true);
  };

  // Maneja el clic en "Regístrate"
  const handleRegister = () => {
    setActiveTab("register");
    setShowModal(true);
  };

  // Cambia entre las pestañas (Iniciar sesión o Regístrate)
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Cierra el modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Redirige al Home después del login
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log("Iniciar sesión con correo y nombre de usuario");
    navigate("/Home");
  };

  // Iniciar sesión con Google (popup)
  const handleGoogleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  // Maneja el clic en "Unirme como invitado"
  const handleGuestLogin = () => {
    navigate("/Home");
  };

  // Maneja la validación del formulario de registro
  const handleSubmitRegister = () => {
    if (username === "") {
      setErrorMessage("Por favor escriba su nombre de usuario.");
    } else {
      // Lógica adicional de registro si es necesario
      console.log("Registro exitoso");
      navigate("/Home");
    }
  };

  return (
    <>
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
        <div className="text-section">
          <img src={WelcomeLogo} alt="Welcome" className="welcome-logo" />
          <p>
            ¿Listo para hacer la diferencia? Inicia sesión y explora cómo puedes
            proteger el agua, uno de nuestros recursos más preciados.
          </p>
        </div>
        <div className="image-section">
          <img
            src={watergruoup}
            alt="Cuidado del agua"
            className="water-image"
          />
        </div>
      </main>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              X
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
                      placeholder="ejemplo@correo.com"
                      required
                      className="rounded-input"
                    />
                  </label>
                  <button type="submit" className="modal-button">
                    Iniciar sesión
                  </button>
                </form>
                <hr />
                <button onClick={handleGoogleLogin} className="google-button">
                  Continua con Google
                </button>
              </div>
            ) : (
              <div className="register-section">
                <label>
                  Nombre de usuario
                  <input
                    type="text"
                    placeholder="Tu nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="rounded-input"
                  />
                </label>
                {errorMessage && (
                  <p className="error-message">{errorMessage}</p> // Mostrar mensaje de error si no se ha ingresado el nombre de usuario
                )}
                <label>
                  Descripción
                  <textarea
                    placeholder="Describe brevemente tu perfil"
                    required
                    className="rounded-input"
                  />
                </label>
                <button onClick={handleGoogleLogin} className="google-button">
                  Unirme con Google
                </button>
                <button onClick={handleSubmitRegister} className="modal-button">
                  Unirme como invitado
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Welcome;