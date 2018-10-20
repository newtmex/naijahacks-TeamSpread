const mongoose = require('mongoose')
const { Course } = require('../model/courseSchema')

// Get all course
exports.get_all_courses = (req, res) => {
  res.send('A request to get all courses')
}

// Get a single course
exports.get_course = (req, res) => {
  const id = req.params.id
  res.send('A request to get a course by id:' + id)
}

// Get a all Video
exports.get_all_video = (req, res) => {
  res.send('A request to get all video courses')
}

// Get a single video
exports.get_video = (req, res) => {
  const id = req.params.id
  res.send('A request to get a course by id:' + id)
}

// Get all free courses
exports.get_all_free_course = (req, res) => {
  res.send('A request to get all free courses')
}

// Get a single free course
exports.get_free_course = (req, res) => {
  const id = req.params.id
  res.send('A request to get a free course by id:' + id)
}

// Get all Paid courses
exports.get_all_paid_course = (req, res) => {
  res.send('A request to get all paid courses')
}

// Get a single paid course
exports.get_single_paid_course = (req, res) => {
	const id = req.params.id
	res.send('A request to get a paid course by id:' + id)
};