const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware');
const User = require('../models/User');

router.get('/me', verifyToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'name', 'email', 'phone'],
    });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Erro interno', error: error.message });
  }
});

module.exports = router;