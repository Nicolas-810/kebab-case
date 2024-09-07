import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/use-auth-store";
import UserDAO from "../daos/UserDAO";
import groupLogo from "../assets/LogoS.png";
import loginImage from '../assets/CardValle.png'; 
import guestImage from "../assets/inscribirse.png"; 
import "./Login.css";

const Login = () => {
  const { user, loginGoogleWithPopUp, logout, observeAuthState, loading } =
    useAuthStore();

  const navigate = useNavigate();

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
  }, [user]);

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();
  }, [loginGoogleWithPopUp]);

  const handleGuestLogin = useCallback(() => {
    // Agregar la lógica para continuar como invitado
    navigate("/Home");
  }, [navigate]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }

  return (
    <div className="parent-container">
      <img src={groupLogo} alt="Group Logo" className="logo" />
      <div className="container-login">
        <div className="login-container">
        <h3>Inicia sesión con tu cuenta</h3>
          <img src={loginImage} alt="Login" className="container-image" />
          <button className="login-button" onClick={handleLogin}>
            Iniciar sesión
          </button>
        </div>
        <div className="guest-container">
        <h3>Continúa como invitado</h3>
          <img src={guestImage} alt="Guest" className="container-image1" />
          <button className="guest-button" onClick={handleGuestLogin}>
            Continuar como invitado
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
