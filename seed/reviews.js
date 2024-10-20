const db = require('../db')
const { Review, Craft } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const reviews = [
        {
        },
    ]

    await Review.insertMany(reviews)
    console.log('created reviews')
}

const run = async () => {
    await main()
    db.close()
}

run()