require("dotenv");

const { Pool } = require("pg");

const { DB_URL } = process.env;

const connection = new Pool({
  connectionString: DB_URL,
  ssl: false,
});

module.exports = connection;
