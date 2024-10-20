const db = require('../db')
const { Type } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const types = [
        {
        },
    ]

    await Type.insertMany(types)
    console.log('created craft types')
}

const run = async () => {
    await main()
    db.close()
}

run()