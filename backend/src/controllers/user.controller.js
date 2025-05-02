const User = require('../models/User');

// Ver perfil
const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'name', 'email', 'phone'] // Exibir apenas esses dados
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar perfil', error: err.message });
  }
};

// Atualizar perfil
const updateProfile = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    await user.save();

    res.json({ message: 'Perfil atualizado com sucesso', user });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar perfil', error: err.message });
  }
};

module.exports = { getProfile, updateProfile };
