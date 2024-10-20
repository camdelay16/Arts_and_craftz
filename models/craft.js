const { Schema } = require('mongoose')

const Craft = new Schema (
    {
        brand_name: ,
        url: ,
    },
    { timestamps: true }
)

module.exports = Craft