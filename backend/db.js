const mysql = require('mysql2');
require('dotenv').config();

// Crear conexión con MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  connectionLimit: 10
});

// Conectar la base de datos
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection error:", err);
  } else {
    console.log("✅ MySQL Database connected successfully!");
    connection.release(); // Liberar la conexión
  }
});

module.exports = pool.promise();
