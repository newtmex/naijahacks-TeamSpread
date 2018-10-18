const mongoose = require('mongoose')
const Joi = require('joi')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5 // upgrade this number to 8
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
})

const validateUser = user => {
	const schema = {
    username: Joi.string()
      .alphanum()
      .min(5)
      .max(15)
      .required(),
    password: Joi.string()
    .min(5)
    .max(255)
    .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email()
	}

	return Joi.validate(user, schema)
}

const User = mongoose.model('User', userSchema)

module.exports = {
  User,
  validateUser
}