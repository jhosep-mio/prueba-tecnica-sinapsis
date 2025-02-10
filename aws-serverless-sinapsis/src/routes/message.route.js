const express = require('express')

const messageController = require('../controllers/message.controller')
const { verifyToken } = require('../middleware/jwt.middlware')

const router = express.Router()

router.get('/getMessagesByCampaign/:campaignId', verifyToken, messageController.getMessagesByCampaign)

module.exports = router
