require('dotenv').config()
const express = require('express')
const serverless = require('serverless-http')
const swaggerUi = require('swagger-ui-express')
const specs = require('./server/swagger')
const mysql = require('mysql2')
const campaignRoutes = require('./routes/campaign.route')
const messageRoutes = require('./routes/message.route')
const usersRoutes = require('./routes/users.route')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const corsOptions = {
  origin: ['http://localhost:4200', 'https://sinapsis.hostbacon.lat'], // Array con varios orígenes
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: false
}

const app = express()
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())

app.options('*', (req, res) => {
  const allowedOrigins = ['http://localhost:4200', 'https://sinapsis.hostbacon.lat']
  const origin = req.headers.origin
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin)
  }
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  res.sendStatus(200)
})

// Configurar Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
// Conexión a MySQL

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

app.use('/api/campaigns', campaignRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', usersRoutes)

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err)
  } else {
    console.log('✅ Conectado a MySQL')
  }
})

// Exportar para Serverless
module.exports.app = serverless(app)
