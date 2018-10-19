const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
  title: { type: String, required: true },
  image_url: { type: String, required: true },
  level: { type: String, required: true },
  
})