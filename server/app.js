const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const cookieParser = require('cookie-parser')
const authRouter = require('./controllers/auth')
const usersRouter = require('./controllers/users')
const roomsRouter = require('./controllers/rooms')

const app = express()

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MONGODB')
  })
  .catch((error) => {
    console.log('Failed to connect to MongoDB', error.message)
  })

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)
app.use('/api/rooms', roomsRouter)

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'Something went wrong'
  return res.status(errorStatus).json({
    status: errorStatus,
    message: errorMessage,
  })
})

module.exports = app