
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Estudo = sequelize.define('Estudo', {
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
  assunto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nivelConhecimento: {
    type: DataTypes.ENUM('iniciante', 'intermediario', 'avancado'),
    allowNull: false,
  },
  planoEstudo: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'estudos',
  timestamps: true,
});

module.exports = Estudo;
