const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Category;