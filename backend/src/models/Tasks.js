
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PequenaTarefa = sequelize.define('PequenaTarefa', {
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
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  concluida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  dataCriacao: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  dataConclusao: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'pequenas_tarefas',
  timestamps: false, 
});

module.exports = PequenaTarefa;
