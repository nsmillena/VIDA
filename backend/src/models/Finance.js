
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Financeiro = sequelize.define('Financeiro', {
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
    type: DataTypes.ENUM('renda', 'gasto', 'meta'),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
}, {
  tableName: 'financeiro',
  timestamps: true,
});

module.exports = Financeiro;
