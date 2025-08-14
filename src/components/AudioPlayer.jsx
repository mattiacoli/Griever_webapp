import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = () => {
  // Lista delle tracce audio
  const tracks = [
    {
      id: 1,
      title: "Burattino di Vetro",
      src: "/assets/audio/Burattino di Vetro - Ascolto Rough NO EDIT.mp3"
    },
    {
      id: 2,
      title: "Cosmo",
      src: "/assets/audio/Cosmo - Ascolto Rough 1 NO EDIT.mp3"
    },
    {
      id: 3,
      title: "Generazione",
      src: "/assets/audio/Generazione - Ascolto Rough 1 NO EDIT.mp3"
    },
    {
      id: 4,
      title: "Prostituzione",
      src: "/assets/audio/Prostituzione- Ascolto Rough NO EDIT.mp3"
    },
    {
      id: 5,
      title: "Punto Zero",
      src: "/assets/audio/Punto Zero - Ascolto Rough NO EDIT.mp3"
    }
  ];

  // Stati del player
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);

  // Ref per l'elemento audio
  const audioRef = useRef(null);

  // Effetto per aggiornare il tempo corrente
  useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    if (audio) {
      audio.addEventListener('loadeddata', setAudioData);
      audio.addEventListener('timeupdate', setAudioTime);

      return () => {
        audio.removeEventListener('loadeddata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
      };
    }
  }, [currentTrack]);

  // Funzioni di controllo del player
  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(false);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(false);
  };

  const selectTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(false);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const seekTime = (e.target.value / 100) * duration;
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  // Funzione per formattare il tempo
  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={tracks[currentTrack].src}
        onEnded={nextTrack}
      />

      {/* Informazioni traccia corrente */}
      <div className="track-info">
        <h3 className="track-title">{tracks[currentTrack].title.toUpperCase()}</h3>
        <p className="track-number">Traccia {currentTrack + 1} di {tracks.length}</p>
      </div>

      {/* Controlli principali */}
      <div className="player-controls">
        <button
          className="control-btn prev-btn"
          onClick={prevTrack}
          aria-label="Traccia precedente"
        >
          <i class="bi bi-skip-backward-fill"></i>
        </button>

        <button
          className="control-btn play-btn"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pausa" : "Play"}
        >
          {isPlaying ? (<i class="bi bi-pause-fill"></i>) : '▶'}
        </button>

        <button
          className="control-btn next-btn"
          onClick={nextTrack}
          aria-label="Traccia successiva"
        >
          <i class="bi bi-skip-forward-fill"></i>
        </button>
      </div>

      {/* Barra di progresso */}
      <div className="progress-container">
        <span className="time-display">{formatTime(currentTime)}</span>
        <input
          type="range"
          className="progress-bar"
          min="0"
          max="100"
          value={duration ? (currentTime / duration) * 100 : 0}
          onChange={handleSeek}
        />
        <span className="time-display">{formatTime(duration)}</span>
      </div>

      {/* Controllo volume */}
      <div className="volume-container">
        <span className="volume-label"><i class="bi bi-volume-up-fill"></i></span>
        <input
          type="range"
          className="volume-slider"
          min="0"
          max="100"
          value={volume * 100}
          onChange={handleVolumeChange}
        />
      </div>

      {/* Lista delle tracce */}
      <div className="playlist">
        <h4 className="playlist-title">Playlist</h4>
        <ul className="track-list">
          {tracks.map((track, index) => (
            <li
              key={track.id}
              className={`track-item ${index === currentTrack ? 'active' : ''}`}
              onClick={() => selectTrack(index)}
            >
              <span className="track-number">{index + 1}.</span>
              <span className="track-name">{track.title}</span>
              {index === currentTrack && isPlaying && (
                <span className="playing-indicator">♪</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .audio-player {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          padding: 2rem;
          max-width: 400px;
          margin: 2rem auto;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .track-info {
          text-align: center;
          margin-bottom: 2rem;
        }

        .track-title {
          font-family: 'MOON GET!', sans-serif;
          font-size: 1.5rem;
          color: var(--text-color);
          margin-bottom: 0.5rem;
        }

        .track-number {
          color: #666;
          font-size: 0.9rem;
        }

        .player-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .control-btn {
          background: var(--primary-color);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(251, 219, 84, 0.3);
        }

        .play-btn {
          width: 60px;
          height: 60px;
          font-size: 1.5rem;
          background: red;
          box-shadow: 0 4px 15px rgba(80, 227, 194, 0.3);
        }

        .control-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .control-btn:active {
          transform: translateY(0);
        }

        .progress-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .progress-bar {
          flex: 1;
          height: 6px;
          background: var(--primary-color);
          border-radius: 3px;
          outline: none;
          cursor: pointer;
        }

        .progress-bar::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: var(--secondary-color);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(80, 227, 194, 0.3);
        }

        .progress-bar::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: var(--secondary-color);
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 10px rgba(80, 227, 194, 0.3);
        }

        .time-display {
          font-size: 0.9rem;
          color: #666;
          min-width: 40px;
          text-align: center;
        }

        .volume-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .volume-label {
          font-size: 1.2rem;
        }

        .volume-slider {
          flex: 1;
          height: 4px;
          background: #ddd;
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }

        .volume-slider::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          background: var(--primary-color);
          border-radius: 50%;
          cursor: pointer;
        }

        .volume-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          background: var(--primary-color);
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }

        .playlist {
          border-top: 1px solid #eee;
          padding-top: 1.5rem;
        }

        .playlist-title {
          font-family: 'MOON GET!', sans-serif;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: var(--text-color);
        }

        .track-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .track-item {
          padding: 0.8rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .track-item:hover {
          background: rgba(251, 219, 84, 0.2);
        }

        .track-item.active {
          background: rgba(80, 227, 194, 0.2);
          color: var(--text-color);
          font-weight: bold;
        }

        .track-number {
          font-weight: bold;
          min-width: 20px;
        }

        .track-name {
          flex: 1;
        }

        .playing-indicator {
          color: var(--secondary-color);
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Responsive design */
        @media (max-width: 480px) {
          .audio-player {
            padding: 1.5rem;
            margin: 1rem;
          }

          .track-title {
            font-size: 1.2rem;
          }

          .control-btn {
            width: 45px;
            height: 45px;
            font-size: 1rem;
          }

          .play-btn {
            width: 55px;
            height: 55px;
            font-size: 1.3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AudioPlayer;
