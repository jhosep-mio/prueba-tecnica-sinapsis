const { conexion } = require('../config/db')

const findoOneByUsername = async (username) => {
  const [result] = await conexion.query('SELECT * FROM users WHERE username = ?', [username])
  return result[0]
}

const findoOneByID = async (id) => {
  const [result] = await conexion.query('SELECT * FROM users WHERE id = ? ', [id])
  return result[0]
}

const create = async ({ customer_id, username }) => {
  const [insertResult] = await conexion.query('INSERT INTO users (customer_id, username, status) VALUES (?, ?, ?)', [customer_id, username, 1])
  const newUserId = insertResult.insertId
  const [rows] = await conexion.query('SELECT customer_id, username, status FROM users WHERE id = ?', [newUserId])
  return rows[0]
}

module.exports = {
  findoOneByUsername,
  findoOneByID,
  create
}
