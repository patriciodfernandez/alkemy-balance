//ajskdbnaskjndszkjdnakjsdnkjasnd
const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/balance", {
  logging: false, // set to console.log to see the raw SQL queries

});

module.exports = db;