const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT
const URI = process.env.MONGO_URI

const userRoute = require('./routes/user')
const courseRoute = require('./routes/courses')
const error = require('./middleware/errors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(cors())

// connect mongoose
mongoose.connect(URI, { useNewUrlParser: true, createIndexes: true })
  .then(() => console.log('Connected to Database'))
  .catch(err => console.log('An error occurred...', err))

app.use('/user', userRoute)
app.use('/user/course', courseRoute)
app.use(error)

app.listen(PORT, () => console.log(`server running at port: ${PORT}`))