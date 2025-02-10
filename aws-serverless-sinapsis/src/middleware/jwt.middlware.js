const jwt = require('jsonwebtoken')
require('dotenv').config({ path: '../../.env' }) // Asegura que lea el .env correctamente

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1] // "Bearer <token>"
  if (!token) {
    return res.status(404).json({ status: false, message: 'Token not provider' })
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      ok: false,
      message: 'Token invalid'
    })
  }
}

module.exports = {
  verifyToken
}
