    
const User = require('./User');
const Financeiro = require('./Finance');
const Estudo = require('./Study');
const Saude = require('./Health');
const PequenaTarefa = require('./Tasks');

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
