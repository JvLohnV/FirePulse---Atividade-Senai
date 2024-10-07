import React, { useState } from 'react';
import axios from '../utils/axios';
import './addMusic.css';

const AddMusic = ({ onMusicAdded }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/music', { title, artist, url }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onMusicAdded(res.data);
      setTitle('');
      setArtist('');
      setUrl('');
    } catch(err) {
      console.error(err);
    }
  };

  return (
    <form className="add-music-form" onSubmit={handleSubmit}>
      <h3>Adicionar Nova Música</h3>
      <input 
        type="text" 
        placeholder="Título" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required 
      />
      <input 
        type="text" 
        placeholder="Artista" 
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required 
      />
      <input 
        type="url" 
        placeholder="URL da Música" 
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required 
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddMusic;