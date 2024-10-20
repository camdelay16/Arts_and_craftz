const { Schema } = require('mongoose')

const Type = new Schema (
    {
        brand_name: ,
        url: ,
    },
    { timestamps: true }
)

module.exports = Type