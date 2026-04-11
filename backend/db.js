const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,       // 👈 from .env
  user: process.env.DB_USER,       // 👈 from .env
  password: process.env.DB_PASSWORD, // 👈 from .env
  database: process.env.DB_NAME    // 👈 from .env
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

module.exports = connection;
