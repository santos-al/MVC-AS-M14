const Sequelize = require('sequelize');
const path = require('path');

require('dotenv').config(path.join(__dirname, '.env'));

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    "tech_blog_db", 
    'root', 
    'root1234', 
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;
