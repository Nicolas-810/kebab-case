import React, { useState, useRef, useCallback } from "react";
import useAuthStore from "../stores/use-auth-store"; 
import { useNavigate } from "react-router-dom";
import audioFile from '../assets/Agua.mp3'; 
import muteIcon from '../assets/sin-sonido.png';
import soundIcon from '../assets/volumen.png'; 
import "./Links.css";

const Links = () => {
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Volumen inicial al 100%
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const handleAudioClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.error('Audio playback failed: ', err);
          alert('No se pudo reproducir el audio.'); 
        });
      }
      setIsPlaying(!isPlaying);
      setShowVolumeSlider(!showVolumeSlider); // Mostrar/ocultar el slider
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleLogout = useCallback(() => {
    console.log("Clic en cerrar sesión");
    logout(); 
    navigate("/");
  }, [logout, navigate]);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <button 
                className="button-audio" 
                onClick={handleAudioClick} 
                aria-label={isPlaying ? 'Detener música' : 'Reproducir música'}
              >
                {isPlaying ? (
                  <img src={soundIcon} alt="Mute" /> 
                ) : (
                  <img src={muteIcon} alt="Sound" /> 
                )}
              </button>
            </li>
            {showVolumeSlider && (
              <li className="volume-slider-container">
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01" 
                  value={volume} 
                  onChange={handleVolumeChange} 
                  className="volume-slider" 
                  aria-label="Control de volumen"
                />
              </li>
            )}
            <li>
              <button 
                className="button-logout" 
                onClick={handleLogout} 
                aria-label="Cerrar sesión"
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <audio ref={audioRef} src={audioFile} loop>
        Tu navegador no soporta el elemento de audio.
      </audio>
    </>
  );
};

export default Links;
