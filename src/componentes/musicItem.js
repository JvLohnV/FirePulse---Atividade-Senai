import React from 'react';
import './musicItem.css';

const MusicItem = ({ music }) => {
  const handlePlay = () => {
    // Lógica para tocar a música
  };

  const handleSave = () => {
    // Lógica para salvar a música
  };

  const handleShare = () => {
    // Lógica para compartilhar a música
  };

  return (
    <div className="music-item">
      <div className="music-info">
        <h3>{music.title}</h3>
        <p>{music.artist}</p>
      </div>
      <div className="music-actions">
        <button onClick={handlePlay}>Ouvir</button>
        <button onClick={handleSave}>Salvar</button>
        <button onClick={handleShare}>Compartilhar</button>
      </div>
    </div>
  );
};

export default MusicItem;