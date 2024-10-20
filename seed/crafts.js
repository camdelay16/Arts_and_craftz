const db = require('../db')
const { Type, Craft } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const crafts = [
        {
        },
    ]

    await Craft.insertMany(crafts)
    console.log('created crafts')
}

const run = async () => {
    await main()
    db.close()
}

run()