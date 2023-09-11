const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/database');
require('dotenv').config();

const db = {};

db.connection = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    timezone: '-03:00'
});

// cargamos los modelos a la BBDD

module.exports = db;