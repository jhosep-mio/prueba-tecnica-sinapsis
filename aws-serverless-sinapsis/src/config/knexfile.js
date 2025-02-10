require("dotenv").config({ path: "../../.env" }); // Asegura que lea el .env correctamente

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "",
    },
    migrations: {
      directory: "./migrations",
    },
  },
  production: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST, // Endpoint de RDS
      user: process.env.DB_USER, // Usuario de AWS RDS
      password: process.env.DB_PASSWORD, // Contraseña de AWS RDS
      database: process.env.DB_NAME, // Nombre de la BD en RDS
      ssl: {
        rejectUnauthorized: false, // Necesario para evitar problemas de conexión
      },
    },
    migrations: {
      directory: "./migrations",
    },
  },
};
