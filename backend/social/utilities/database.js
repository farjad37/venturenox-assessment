require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_DATABASE_LIST, 'postgres', 'postgres', {
   host: process.env.POSTGRES_HOST,
   dialect: 'postgres',
   logging: false,
 });

module.exports = sequelize;
