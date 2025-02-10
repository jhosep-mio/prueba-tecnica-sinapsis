require("dotenv").config({ path: "../../.env" }); // Asegura que lea el .env correctamente
const mysql = require("mysql2/promise");

const conexion = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false, // Permite conexiones SSL no verificadas (específico de algunas configuraciones de AWS)
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const testConnection = async () => {
  try {
    const connection = await conexion.getConnection();
    await connection.ping(); // Prueba de conexión
    console.log("✅ Conexión a MySQL establecida");
    connection.release();
  } catch (error) {
    console.error("❌ Error conectando a MySQL:", error);
    setTimeout(testConnection, 5000); // Reintentar en 5 segundos
  }
};

testConnection();

module.exports = { conexion };
