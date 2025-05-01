
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Saude = sequelize.define('Saude', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  tipo: {
    type: DataTypes.ENUM('fisica', 'mental'),
    allowNull: false,
  },
  descricaoRotina: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  acompanhamentoProfissional: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  orientacoes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'saude',
  timestamps: true,
});

module.exports = Saude;
