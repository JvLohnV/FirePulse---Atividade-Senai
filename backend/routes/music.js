const express = require('express');
const router = express.Router();
const Music = require('../models/Music');
const { protect } = require('../middleware/authMiddleware');

// Criar nova música
router.post('/', protect, async (req, res) => {
  const { title, artist, url } = req.body;
  try {
    const music = new Music({ title, artist, url, user: req.user._id });
    await music.save();
    res.status(201).json(music);
  } catch(err) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Obter todas as músicas
router.get('/', protect, async (req, res) => {
  try {
    const musics = await Music.find({ user: req.user._id });
    res.json(musics);
  } catch(err) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

// Outros endpoints: Atualizar, Deletar, Compartilhar, etc.

module.exports = router;