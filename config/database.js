require('dotenv').config();

module.exports = {
    username: process.env.DB_USERNAME || root,
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'deportes',
    host: process.env.DB_HOST         || 'localhot',
    dialect: process.env.DB_DIALECT   || 'mysql',

    migrationStorage: "json", // esto es donde se almacena el  tipo de almacenamiento para el seguiento de las migraciones
    migrationStoragePath: "sequelizeMigration.json",  // nombre del archivo del migration

    seederStorage: "json",
    seederStoragePath: "sequelizeSeeds.json",
}