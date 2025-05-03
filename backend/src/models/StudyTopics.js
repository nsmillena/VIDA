module.exports = (sequelize, DataTypes) => {
    const StudyTopic = sequelize.define('StudyTopic', {
        title: DataTypes.STRING,
        routeId: DataTypes.INTEGER,
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
          },
    });

    StudyTopic.associate = (models) => {
        StudyTopic.belongsTo(models.StudyRoute, { foreignKey: 'routeId', as: 'route' });
    };

    return StudyTopic;
};