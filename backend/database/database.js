const { Sequelize } = require('sequelize');

// SQLite database file for development
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

module.exports = sequelize;