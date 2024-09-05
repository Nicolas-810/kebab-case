import React, { useRef, useEffect } from 'react';
import audioFile from '../assets/Agua.mp3';
import '../Home/Home.css';

const Music = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (err) {
        console.error('Auto-play failed: ', err);
      }
    };
    
    playAudio();
  }, []);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <div>
      <audio ref={audioRef} src={audioFile} loop autoPlay>
        Your browser does not support the audio element.
      </audio>

      <div className="buttonContainer">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
};

export default Music;
