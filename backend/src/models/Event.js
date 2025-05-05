module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        topics: {
            type: DataTypes.JSON, // Array de tópicos
            allowNull: false,
            defaultValue: [],
        },
        datetime: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Event.associate = (models) => {
        Event.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };

    return Event;
};