var db = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    user : process.eng.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
  }
});

module.exports = db;

