import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import groupLogo from "../../assets/LogoS.png";
import loginImage from '../../assets/google.png'; 
import guestImage from "../../assets/inscribirse.png"; 
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import "./Login.css";


const Login = () => {
  const { user, loginGoogleWithPopUp, logout, observeAuthState, loading } = useAuthStore();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [nickname, setNickname] = useState('');
  const [description, setDescription] = useState('');

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
    setShowModal(true); 
  }, []);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const handleSaveGuestData = () => {
    console.log("Nickname:", nickname);
    console.log("Description:", description);
    
    setShowModal(false);
    navigate("/Home");
  };

  if (loading) {
    return <p className="loading-text">Cargando...</p>;
  }
};

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

    {showModal && (
      <div className="modal">
        <div className="modal-content">
          <h2>Ingrese como invitado</h2>
          <label>
            Nickname:
            <input 
              type="text" 
              value={nickname} 
              onChange={(e) => setNickname(e.target.value)} 
              required 
            />
          </label>
          <label>
            Descripción:
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required 
            />
          </label>
          <button onClick={handleSaveGuestData}>Guardar datos</button>
          <button onClick={() => setShowModal(false)}>Cancelar</button>
        </div>
      </div>
    )}
  </div>
);

export default Login;


