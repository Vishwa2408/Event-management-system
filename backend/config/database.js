const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'postgres',
    username: 'postgres',
    password: 'vishwa',
    database: 'event_management',
});

module.exports = sequelize;
