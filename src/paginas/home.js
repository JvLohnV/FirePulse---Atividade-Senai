import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import MusicList from '../components/MusicList';
import AddMusic from '../components/AddMusic';
import './homeStyle.css'; 

const Home = () => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    const fetchMusics = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/music', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMusics(res.data);
      } catch(err) {
        console.error(err);
      }
    };
    fetchMusics();
  }, []);

  const handleMusicAdded = (newMusic) => {
    setMusics([...musics, newMusic]);
  };

  return (
    <div className="home-container">
      <h2>Suas Músicas</h2>
      <AddMusic onMusicAdded={handleMusicAdded} />
      <MusicList musics={musics} />
    </div>
  );
};

export default Home;