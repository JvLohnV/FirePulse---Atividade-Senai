import React from 'react';
import MusicItem from './musicItem';
import './MusicList.css';

const MusicList = ({ musics }) => {
  return (
    <div className="music-list">
      {musics.map(music => (
        <MusicItem key={music._id} music={music} />
      ))}
    </div>
  );
};

export default MusicList;