const { User } = require("../models");

const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: ["id", "name", "email", "phone"],
    });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: "Erro interno", error: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const user = await User.findByPk(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Atualiza apenas os campos enviados no body
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    // Salva no banco de dados
    await user.save();

    res.json({ message: "Perfil atualizado com sucesso", user: user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao atualizar perfil", error: error.message });
  }
};

module.exports = { getProfile, updateProfile };
