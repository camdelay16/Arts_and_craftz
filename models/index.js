const mongoose = require('mongoose')
const craftSchema = require('./craft')
const reviewSchema = require('./review')
const typeSchema = require('./type')

const Craft = mongoose.model('Craft', craftSchema)
const Review = mongoose.model('Review', reviewSchema)
const Type = mongoose.model('Type', typeSchema)

module.exports = {
    Craft,
    Review,
    Type
}