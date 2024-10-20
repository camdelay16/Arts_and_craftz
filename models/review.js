const { Schema } = require('mongoose')

const Review = new Schema (
    {
        brand_name: ,
        url: ,
    },
    { timestamps: true }
)

module.exports = Review