const { conexion } = require('../config/db')

const create = async ({ name }) => {
  const [insertResult] = await conexion.query('INSERT INTO customers (name, status) VALUES (?, ?)', [name, 1])
  const newUserId = insertResult.insertId
  const [rows] = await conexion.query('SELECT name, status FROM customers WHERE id = ?', [newUserId])
  return rows[0]
}

module.exports = {
  create
}
