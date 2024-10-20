const mongoose = require('mongoose')
const craftSchema = require('./craft')
const typeSchema = require('./type')

const Craft = mongoose.model('Craft', craftSchema)
const Type = mongoose.model('Type', typeSchema)

module.exports = {
    Craft,
    Type
}