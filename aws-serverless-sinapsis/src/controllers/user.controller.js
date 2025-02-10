const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserModel = require('../models/users.model')
const customerModel = require('../models/customers.model')

require('dotenv').config({ path: '../../.env' }) // Asegura que lea el .env correctamente

const login = async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password) {
      return res.status(400).json({ status: false, message: 'Complete todos los campos' })
    }
    const user = await UserModel.findoOneByUsername(username)
    if (!user) {
      return res.status(404).json({ status: false, message: 'El usuario no existe' })
    }
    //SUPONIENDO QUE TENEMOS LA CONTRASEÑA HASHEADA.
    //EN ESTE CASO SOLO USAMOS DE PRUEBA EL MISMO CAMPO USERNAME
    const salt = await bcrypt.genSalt(10)
    const passwordHashed = await bcrypt.hash(username, salt)

    const isMatch = await bcrypt.compare(password, passwordHashed)
    if (!isMatch) {
      return res.status(404).json({ status: false, message: 'Contraseña incorrecta' })
    }
    const token = jwt.sign(
      {
        username: user.username,
        user_id: user.id
      },
      process.env.JWT_SECRET ?? '',
      {
        expiresIn: '7d'
      }
    )
    return res.json({ status: true, token })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      message: 'Error server'
    })
  }
}

const profile = async (req, res) => {
  try {
    const { user_id } = req.user
    const user = await UserModel.findoOneByID(user_id)
    return res.json({ status: true, message: user })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      message: 'Error server'
    })
  }
}

const register = async (req, res) => {
  try {
    const { name, username } = req.body
    if (!name || !username) {
      return res.status(400).json({ status: false, message: 'Complete todos los campos' })
    }

    const user = await UserModel.findoOneByUsername(username)

    if (user) {
      return res.status(409).json({ status: false, message: 'El usuario ya existe' })
    }

    const newCustomer = await customerModel.create({ name })

    const newUser = await UserModel.create({ customer_id: newCustomer.id, username })

    return res.json({ status: true, message: 'Usuario registrado con éxito', user: newUser })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      message: 'Error server'
    })
  }
}

module.exports = {
  login,
  profile,
  register
}
