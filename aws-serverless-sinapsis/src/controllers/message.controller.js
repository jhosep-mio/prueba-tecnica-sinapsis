const MessageModel = require('../models/message.model')

// RETORNAR TODAS LAS CAMPAÑAS
const getMessagesByCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params
    const messages = await MessageModel.getMessagesByCampaignId(Number(campaignId))

    if (!messages.length) {
      return res.status(404).json({ error: 'No se encontraron mensajes para esta campaña' })
    }

    return res.status(200).json({ messages })
  } catch (error) {
    console.error('❌ Error obteniendo mensajes de la campaña:', error)
    return res.status(500).json({ error: 'Error interno del servidor' })
  }
}

module.exports = {
  getMessagesByCampaign
}
