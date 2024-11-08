/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import './VideoEasterEgg.css';

function VideoEasterEgg({ activationSequence, videoSrc }) {
  const [inputSequence, setInputSequence] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      setInputSequence((prev) => prev + event.key);

      if (inputSequence + event.key === activationSequence) {
        setShowVideo(true);
        setInputSequence('');

        // Tenta ativar o modo de tela cheia e reprodução automática
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.requestFullscreen().then(() => {
              videoRef.current.play();
            });
          }
        }, 100);
      } else if (!activationSequence.startsWith(inputSequence + event.key)) {
        setInputSequence('');
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [inputSequence, activationSequence]);

  // Função para fechar o card e parar o vídeo
  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reseta o vídeo
    }
    setShowVideo(false);
  };

  return (
    <>
      {showVideo && (
        <div className="video-overlay">
          <div className="video-card">
            <button className="close-button" onClick={handleCloseVideo}>
              Fechar
            </button>
            <video
              ref={videoRef}
              width="100%"
              controls
              autoPlay
              playsInline
              src={videoSrc}
              onLoadedData={() => {
                videoRef.current.play().catch((error) => {
                  console.log('Autoplay bloqueado:', error);
                });
              }}
            >
              Seu navegador não suporta o vídeo.
            </video>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoEasterEgg;
