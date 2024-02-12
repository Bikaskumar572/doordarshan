const express = require('express')
const chatRouter = require('../routers/chatRouter')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use('/api/v1', chatRouter)

module.exports = app