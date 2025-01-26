const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Event = sequelize.define("Event", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    start_date_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_date_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

module.exports = Event