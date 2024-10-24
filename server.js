const express = require('express')
const db = require('./db')
const path = require('path')
const craftController = require('./controllers/craftController.js')
const typeController = require('./controllers/typeController.js')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 5500

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

app.get('/types', typeController.getAllTypes)
app.get('/types/:id', typeController.getTypesById)
app.get('/types/name/:name', typeController.getTypesByName)
app.post('/types/', typeController.createType)
app.put('/types/:id', typeController.updateType)
app.delete('/types/:id', typeController.deleteType)

app.get('/crafts', craftController.getAllCrafts)
app.get('/crafts/:id', craftController.getCraftsById)
app.get('/crafts/name/:name', craftController.getCraftsByName)
app.get('/crafts/paintdrawing', craftController.getPaintDrawingCrafts)
app.get('/crafts/sculpture', craftController.getSculptureCrafts)
app.get('/crafts/textiles', craftController.getTextilesCrafts)
app.get('/crafts/paper', craftController.getPaperCrafts)
app.get('/crafts/jewelrymaking', craftController.getJewelryMakingCrafts)
app.get('/crafts/homedecor', craftController.getHomeDecorCrafts)
app.get('/crafts/witchcraft', craftController.getWitchcraftCrafts)
app.get('/crafts/kidscrafts', craftController.getKidsCrafts)
app.get('/crafts/freecrafts', craftController.getFreeCrafts)
app.get('/crafts/premiumcrafts', craftController.getPremiumCrafts)
app.post('/crafts/', craftController.createCraft)
app.put('/crafts/:id', craftController.updateCraft)
app.delete('/crafts/:id', craftController.deleteCraft)



app.get('/crafts/:id/reviews', craftController.getCraftReviewById) //get all reviews
app.post('/crafts/:id/reviews', craftController.addCraftReview) //to add new review
app.put('/crafts/:id/reviews/:reviewId', craftController.updateCraftReview) //update a specific review
app.delete('/crafts/:id/reviews/:reviewId', craftController.deleteCraftReview) //deletes specific review

