import React, { useState, useRef, useCallback } from "react";
import useAuthStore from "../stores/use-auth-store";
import { useNavigate } from "react-router-dom";
import audioFile from '../assets/Beautiful.mp3'; 
import "./Links.css";


const Links = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleAudioClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.error('Audio playback failed: ', err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLogout = useCallback(() => {
    console.log("Clic en cerrar sesión");
    navigate("/");
    logout();
  }, [logout, navigate]);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <button className="button-audio" onClick={handleAudioClick}>
                {isPlaying ? 'Calma' : 'Agua'}
              </button>
            </li>
            <li>
              <button className="button-logout" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <audio ref={audioRef} src={audioFile} loop>
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default Links;


