const { conexion } = require('../config/db')

const getAllByCampaign = async (campaign_id) => {
  const [result] = await conexion.query('SELECT * FROM messages WHERE campaign_id = ?', [campaign_id])
  return result
}

const create = async (message) => {
  const { campaign_id, phone, text, shipping_status, process_date, process_hour } = message

  const [result] = await conexion.query(
    'INSERT INTO messages (campaign_id, phone, text, shipping_status, process_date, process_hour) VALUES (?, ?, ?, ?, ?, ?)',
    [campaign_id, phone, text, shipping_status, process_date, process_hour]
  )

  return result.insertId // Devuelve el ID del mensaje creado
}

const bulkCreate = async (messages) => {
  if (messages.length === 0) return

  const values = messages.map(({ campaign_id, phone, text, shipping_status, process_date, process_hour }) => [
    campaign_id,
    phone,
    text,
    shipping_status,
    process_date,
    process_hour
  ])

  const [result] = await conexion.query('INSERT INTO messages (campaign_id, phone, text, shipping_status, process_date, process_hour) VALUES ?', [
    values
  ])

  return result.affectedRows
}

const updateStatus = async (id, status) => {
  const [result] = await conexion.query('UPDATE messages SET shipping_status = ? WHERE id = ?', [status, id])

  return result.affectedRows 
}

const getMessagesByCampaignId = async (campaignId) => {
  const [rows] = await conexion.query('SELECT * FROM messages WHERE campaign_id = ?', [campaignId])
  return rows
}

module.exports = {
  getAllByCampaign,
  create,
  bulkCreate,
  updateStatus,
  getMessagesByCampaignId
}
