import React, { useEffect, useRef } from 'react';
import styles from "./Video.module.scss";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const playVideo = () => {
      if (videoElement.paused) {
        videoElement.play();
      }
    };

    // Iniciar el video cuando el componente se monta
    playVideo();
  }, []);

  return (
    <div className={styles.video}>
         <video ref={videoRef} autoPlay loop muted>
      <source src="/assets/video/video-hero.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default Video;