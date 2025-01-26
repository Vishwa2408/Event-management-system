const sequelize = require("../config/database");
const Category = require("./category");
const Event = require("./event");

Event.belongsToMany(Category, { through: "EventCategory" });
Category.belongsToMany(Event, { through: "EventCategory" });

module.exports = { Event, Category, sequelize }