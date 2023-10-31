const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '000000',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'Tourism in Jordan E-blog'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};