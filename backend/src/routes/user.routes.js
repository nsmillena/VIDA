const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.middleware');
const { User } = require('../models'); // Import correto

// Buscar perfil
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
    console.error('Erro ao buscar usuário:', error);
    res.status(500).json({ message: 'Erro interno', error: error.message });
  }
});

// Atualizar perfil
router.put('/me', verifyToken, async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    await user.save();

    res.json({ message: 'Perfil atualizado com sucesso', user });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(500).json({ message: 'Erro ao atualizar perfil', error: error.message });
  }
});

module.exports = router;
