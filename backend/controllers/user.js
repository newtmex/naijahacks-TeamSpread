const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const { User, validateUser } = require('../model/userSchema')

// Register new user
exports.signup = async (req, res) => {
  
  const { error } = validateUser(req.body)
  if (error) return res.status(400).json({
    error: error.details[0].message
  })

  let user = await User.findOne({ email: req.body.email })
  if (user) return res.status(400).json({
    message: 'user already registered'
  })

  console.log(req.body)
  user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    languages: req.body.languages
  })

  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(user.password, salt)
  const token = user.generateToken()

  const userDetails = await user.save()
  res.status(201).json({
    token,
    id: userDetails._id,
    username: userDetails.username,
    email: userDetails.email,
    languages: userDetails.languages
  })
}

// Login User
exports.login = async (req, res, next) => {
  const id = req.params.id
  const user = await User.findById(id).select('-password -__v')
  if (!user) return res.status(400).json({
    message: 'Resource not found'
  })

  
  res.json(user)
}

// Get all users
exports.get_all_users = async (req, res) => {
  const users = await User.find().select('username email')

  if (!users) return res.status(500).send(error.message)
  res.send(users)
}