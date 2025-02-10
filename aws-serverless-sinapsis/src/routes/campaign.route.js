const express = require('express')
const campaignController = require('../controllers/campaign.controller')
const { verifyToken } = require('../middleware/jwt.middlware')

const router = express.Router()

router.get('/getAllCampaigns', verifyToken, campaignController.getAllCampaigns)
router.get('/getCampaignsByDate', verifyToken, campaignController.getCampaignsByDate)
router.post('/create', verifyToken, campaignController.createCampaign)
router.post('/sendCampaign/:campaignId', verifyToken, campaignController.sendCampaign)
router.get('/getByCampaign/:campaignId', verifyToken, campaignController.getCampaignById)

module.exports = router
