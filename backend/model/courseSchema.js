const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
  title: { type: String, required: true },
  image_url: { type: String, required: true },
  level: { type: String, required: true },
  short_summary: { type: String, required: true },
  summary: { type: String },
  instructors: [String],
  required_knowledge: { type: String },
  expected_learning: { type: String, required: true },
  available: { type: Boolean, required: true },
  expected_duration: { type: String, required: true },
  type: { type: String, required: true },
  video_url: { type: String },
  likes: { type: Number },
  comments: [{
    username: { type: String, required: true },
    comment: { type: String, required: true }
  }],
  shares: { type: Number }
})

const Course = mongoose.model('Courses', courseSchema)

module.exports = Course