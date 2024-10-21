const db = require('../db')
const { Type } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const types = [
        {
            craftType: `Painting and Drawing`,
            description: "Encompasses pencil sketching, charcoal, pastels, and inking techniques. Includes painting techniques such as acrylic, watercolor, and oil painting."
        },
        {
            craftType: "Sculpture",
            description: "Involves creating three-dimensional art using materials like clay, wood, metal, and stone."
        },
        {
            craftType: "Textiles",
            description: "Features crafts like knitting, crocheting, quilting, and embroidery."
        },
        {
            craftType: "Paper Crafts",
            description: "Includes scrapbooking, origami, card making, and paper mache."
        },
        {
            craftType: "Jewelry Making",
            description: "Comprises techniques such as beading, wirework, metal smithing, and polymer clay."
        },
        {
            craftType: `Home Décor`,
            description: "Focuses on DIY projects such as furniture making, candle making, and wall art."
        },
        {
            craftType: `Kids' Crafts`,
            description: "Simple and educational craft projects suitable for children."
        },
        {
            craftType: "Witchcraft",
            description: "Crafts themed around Halloween, including decorations, pumpkin carving, and festive cards."
        }
    ]

    await Type.insertMany(types)
    console.log('created craft types')
}

const run = async () => {
    await main()
    db.close()
}

run()