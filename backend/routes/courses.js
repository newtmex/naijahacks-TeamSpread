const express = require("express")
const router = express.Router()

const courseController = require('../controllers/courses')
const checkAuth = require('../middleware/auth')

// Get all courses
router.get('/', checkAuth, courseController.get_all_courses)

// Get a single course
router.get('/:id', checkAuth, courseController.get_course)

// Get All video courses
router.get('/video', checkAuth, courseController.get_all_video)

// Get a single video
router.get('/video/:id', checkAuth, courseController.get_video)

// Get All free courses
router.get('/free', checkAuth, courseController.get_all_free_course)

// Get a single free course
router.get('/free/:id', checkAuth, courseController.get_all_courses)

// Get all Paid courses
router.get('/paid', checkAuth, courseController.get_all_paid_course)

// Get a single paid course
router.get('/paid/:id', checkAuth, courseController.get_single_paid_course)

module.exports = router