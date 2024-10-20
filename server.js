const express = require('express')
const db = require('./db')
const path = require('path')
const craftController = require('./controllers/craftController.js')
const reviewController = require('./controllers/reviewController.js')
const typeController = require('./controllers/typeController.js')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client')));

app.listen(PORT, () => {
    console.log(`express server running on ${PORT}`)
})

app.get ('/', (req,res) => {
    res.sendFile(path.join(__dirname,'client','index.html'))
})