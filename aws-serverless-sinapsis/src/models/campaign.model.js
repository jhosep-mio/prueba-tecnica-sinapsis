const { conexion } = require('../config/db')

const getAll = async () => {
  const [result] = await conexion.query('SELECT * FROM campaigns ORDER BY id DESC')
  return result
}

const getById = async (id) => {
  const [result] = await conexion.query('SELECT * FROM campaigns WHERE id = ?', [id])
  return result.length > 0 ? result[0] : null
}

const create = async (campaign) => {
  const { user_id, name, process_date, process_hour, process_status, phone_list, message_text } = campaign

  const [result] = await conexion.query(
    'INSERT INTO campaigns (user_id, name, process_date, process_hour, process_status, phone_list, message_text) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [user_id, name, process_date, process_hour, process_status, phone_list, message_text]
  )

  return result.insertId // Devuelve el ID de la campaña creada
}

const updateStatus = async (id, status) => {
  const [result] = await conexion.query('UPDATE campaigns SET process_status = ? WHERE id = ?', [status, id])
  return result.affectedRows // Devuelve cuántas filas fueron afectadas
}

const getByDate = async (start_date, end_date, user_id) => {
  let sql = 'SELECT * FROM campaigns'
  const params = []
  let hasWhere = false // Para saber si ya se agregó WHERE en la consulta

  if (start_date && end_date) {
    sql += ' WHERE DATE(process_date) BETWEEN ? AND ?'
    params.push(start_date, end_date)
    hasWhere = true
  } else if (start_date) {
    sql += ' WHERE DATE(process_date) >= ?'
    params.push(start_date)
    hasWhere = true
  } else if (end_date) {
    sql += ' WHERE DATE(process_date) <= ?'
    params.push(end_date)
    hasWhere = true
  }
  if (user_id) {
    sql += hasWhere ? ' AND user_id = ?' : ' WHERE user_id = ?'
    params.push(user_id)
  }
  sql += ' ORDER BY id DESC'
  const [campaigns] = await conexion.query(sql, params)
  return campaigns
}

module.exports = {
  getAll,
  getById,
  create,
  updateStatus,
  getByDate
}
