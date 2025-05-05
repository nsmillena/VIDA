const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {};

db.User = require('./User')(sequelize, Sequelize.DataTypes);
db.StudyRoute = require('./StudyRoute')(sequelize, Sequelize.DataTypes);
db.StudyTopic = require('./StudyTopics')(sequelize, Sequelize.DataTypes);
db.Event = require('./Event')(sequelize, Sequelize.DataTypes);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

if (db.User.associate) db.User.associate(db);
if (db.StudyRoute.associate) db.StudyRoute.associate(db);
if (db.StudyTopic.associate) db.StudyTopic.associate(db);
if (db.Event.associate) db.Event.associate(db);

module.exports = db;