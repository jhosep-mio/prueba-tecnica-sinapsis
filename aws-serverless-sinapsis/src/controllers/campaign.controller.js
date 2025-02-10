const CampaignModel = require('../models/campaign.model')
const MessageModel = require('../models/message.model')

// RETORNAR TODAS LAS CAMPAÑAS
const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await CampaignModel.getAll()
    res.json(campaigns)
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo campañas' })
  }
}

// VALIDAR DATOS DE ENTRADA
const validateCampaignData = (user_id, name, phone_list, message_text) => {
  if (!user_id || !name || !phone_list || !message_text) {
    return 'Faltan datos obligatorios.'
  }

  // Intentar parsear la lista de teléfonos
  let phoneNumbers
  try {
    phoneNumbers = JSON.parse(phone_list)
    if (!Array.isArray(phoneNumbers) || phoneNumbers.length === 0) {
      return 'phone_list debe ser un array de números y no puede estar vacío.'
    }
  } catch {
    return 'Formato inválido en phone_list. Debe ser un array JSON válido.'
  }

  return null // Si no hay errores, retorna null
}

// CREAR CAMAPAÑA
const createCampaign = async (req, res) => {
  try {
    const { user_id, name, phone_list, message_text } = req.body
    const validationError = validateCampaignData(user_id, name, phone_list, message_text)

    if (validationError) {
      return res.status(400).json({ error: validationError })
    }

    const campaignId = await CampaignModel.create({
      user_id,
      name,
      process_date: new Date().toISOString().split('T')[0],
      process_hour: new Date().toLocaleTimeString('es-PE', { hour12: false }), // ✅ Ahora siempre en HH:MM:SS
      process_status: 1,
      phone_list: phone_list,
      message_text
    })
    return res.status(201).json({
      message: 'Campaña creada ',
      campaign_id: campaignId,
      status: true
    })
  } catch (error) {
    console.error('❌ Error creando la campaña:', error)
    return res.status(500).json({ error: 'Error enviando la campaña', error2: error })
  }
}

// ENVIAR SIMULACION DE CAMAPAÑA
const sendCampaign = async (req, res) => {
  try {
    const campaign_id = req.params.campaignId
    const campaign = await CampaignModel.getById(campaign_id)
    if (!campaign) return res.status(404).json({ error: 'Campaña no encontrada' })
    // CAMBIAR ESTADO A ENVIANDO
    await CampaignModel.updateStatus(campaign_id, 2)
    // Simular envío de mensajes con retraso
    const phoneList = JSON.parse(campaign.phone_list)
    for (const phone of phoneList) {
      // Primero, guardamos el mensaje en estado "pendiente" (1)
      const message = await MessageModel.create({
        campaign_id,
        phone,
        text: campaign.message_text,
        shipping_status: 1, // Estado "pendiente"
        process_date: new Date().toISOString().split('T')[0],
        process_hour: new Date().toLocaleTimeString('es-PE', { hour12: false })
      })
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Retraso de 1 seg
      const success = Math.random() < 0.7 // 70% éxito, 30% error
      const newStatus = success ? 2 : 3
      await MessageModel.updateStatus(message, newStatus)
    }
    // Verificar si todos los mensajes están en estado 2 o 3 antes de finalizar la campaña
    const messages = await MessageModel.getMessagesByCampaignId(campaign_id)
    const allProcessed = messages.every((msg) => msg.shipping_status === 2 || msg.shipping_status === 3)
    if (allProcessed) {
      await CampaignModel.updateStatus(campaign_id, 3) //  Cambiar a "finalizada" SOLO si todos los mensajes están en 2 o 3
    }
    return res.json({ message: 'Campaña enviada', status: true })
  } catch (error) {
    console.error('❌ Error enviando la campaña:', error)
    return res.status(500).json({ error: 'Error en el envío' })
  }
}

// OBTENER LA CAMAPAÑA POR ID
const getCampaignById = async (req, res) => {
  try {
    const { id } = req.params
    const campaign = await CampaignModel.getById(Number(id))
    if (!campaign) {
      res.status(404).json({ error: 'Campaña no encontrada' })
      return
    }
    res.json(campaign)
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo la campaña' })
  }
}

// FUNCION PARA BUSCAR CAMPAÑAS POR FECHAS
const getCampaignsByDate = async (req, res) => {
  try {
    const { startDate, endDate } = req.query
    const { user_id } = req.user
 
    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      return res.status(400).json({ error: 'La fecha de inicio no puede ser mayor que la fecha de fin' })
    }

    const campaigns = await CampaignModel.getByDate(startDate, endDate, user_id)
    return res.status(200).json({ campaigns })
  } catch (error) {
    console.error('Error obteniendo campañas:', error)
    return res.status(500).json({ error: 'Error obteniendo campañas', details: error })
  }
}

module.exports = {
  getAllCampaigns,
  createCampaign,
  sendCampaign,
  getCampaignById,
  getCampaignsByDate
}
