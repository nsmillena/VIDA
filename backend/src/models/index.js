    
const User = require('./User');
const Financeiro = require('./Financeiro');
const Estudo = require('./Estudo');
const Saude = require('./Saude');
const PequenaTarefa = require('./PequenaTarefa');

User.hasMany(Financeiro, { foreignKey: 'usuarioId' });
Financeiro.belongsTo(User, { foreignKey: 'usuarioId' });

User.hasMany(Estudo, { foreignKey: 'usuarioId' });
Estudo.belongsTo(User, { foreignKey: 'usuarioId' });

User.hasMany(Saude, { foreignKey: 'usuarioId' });
Saude.belongsTo(User, { foreignKey: 'usuarioId' });

User.hasMany(PequenaTarefa, { foreignKey: 'usuarioId' });
PequenaTarefa.belongsTo(User, { foreignKey: 'usuarioId' });

module.exports = {
  User,
  Financeiro,
  Estudo,
  Saude,
  PequenaTarefa,
};
