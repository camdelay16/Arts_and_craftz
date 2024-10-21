//Get Index
const { Product, Craft } = require('../models')
const getAllCrafts = async (req,res) => {
    try {
        const crafts = await Craft.find()
        res.json(crafts)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Get Show 
const getCraftsById = async (req,res) => {
    try { 
        const { id } = req.params
        const craft = await Craft.findById(id)
        if (craft) {
            return res.json(craft)
        }
        return res.status(404).send('Product with that ID not found.')
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

//Get By Name
const getCraftsByName = async (req,res) => {
    try {
        const { name } = req.params
        const crafts = await Craft.find({ craftName: new RegExp(name, 'i') })
        if (crafts.length > 0) {
            return res.json(crafts)
        }
        return res.status(404).send('Craft with that name not found.')
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getPaintDrawingCrafts = async (req,res) => {
    try {
        const { type } = req.params
        const crafts = await Craft.find({ craftType_id: '67159bf0c5f0b8a90eb3b0fb' })
            return res.json(crafts)
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getSculptureCrafts = async (req,res) => {
    try {
        const { type } = req.params
        const crafts = await Craft.find({ craftType_id: '67159bf0c5f0b8a90eb3b0fc' })
            return res.json(crafts)
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getTextilesCrafts = async (req,res) => {
    try {
        const { type } = req.params
        const crafts = await Craft.find({ craftType_id: '67159bf0c5f0b8a90eb3b0fd' })
            return res.json(crafts)
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getPaperCrafts = async (req,res) => {
    try {
        const { type } = req.params
        const crafts = await Craft.find({ craftType_id: '67159bf0c5f0b8a90eb3b0fe' })
            return res.json(crafts)
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getJewelryMakingCrafts = async (req,res) => {
    try {
        const { type } = req.params
        const crafts = await Craft.find({ craftType_id: '67159bf0c5f0b8a90eb3b0ff' })
            return res.json(crafts)
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getHomeDecorCrafts = async (req,res) => {
    try {
        const { type } = req.params
        const crafts = await Craft.find({ craftType_id: '67159bf0c5f0b8a90eb3b100' })
            return res.json(crafts)
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

const getWitchcraftCrafts = async (req,res) => {
    try {
        const { type } = req.params
        const crafts = await Craft.find({ craftType_id: '67159bf0c5f0b8a90eb3b102' })
            return res.json(crafts)
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

//Get Kid Friendly Crafts
const getKidsCrafts = async (req,res) => {
    try {
        const kidFriendlyCrafts = await Craft.find({ forKids: true })
        if (kidFriendlyCrafts.length > 0) {
            return res.json(kidFriendlyCrafts)
        }
        return res.status(404).send('No kid friendly crafts found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Get Free Crafts
const getFreeCrafts = async (req,res) => {
    try {
        const freeCrafts = await Craft.find({ premiumMembership: false })
        if (freeCrafts.length > 0) {
            return res.json(freeCrafts)
        }
        return res.status(404).send('No free crafts found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Get Premiun Crafts
const getPremiumCrafts = async (req,res) => {
    try {
        const premiumCrafts = await Craft.find({ premiumMembership: true })
        if (premiumCrafts.length > 0) {
            return res.json(premiumCrafts)
        }
        return res.status(404).send('No premium crafts found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Create - Post
const createCraft = async (req,res) => {
    try {
        const craft = await new Craft(req.body)
        await craft.save()
        return res.status(201).json({craft})
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

//Update - Put
const updateCraft = async (req,res) => {
    try {
        let { id } = req.params
        let craft = await Craft.findByIdAndUpdate(id, req.body, { new: true })
        if (craft) {
            return res.status(200).json(craft)
        }
        throw new Error('Craft not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Get Craft Review -
const getCraftReviewById = async (req,res) => {
    try { 
        const { id } = req.params
        const craft = await Craft.findById(id)
        if (craft.craftReviews.length > 0) {
            return res.json(craft.craftReviews)
        }
        return res.status(404).send('Craft reviews with that ID not found.')
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

//Add - Craft Review
const addCraftReview = async (req, res) => {
    try {
        const { id } = req.params
        const { reviewer, rating, review } = req.body

        const craft = await Craft.findById(id)
        if(!craft) {
            return res.status(404).send('Craft not found')
        }
        const newReview = { reviewer, rating, review }
        craft.craftReviews.push(newReview)

        await craft.save()
        return res.status(201).json(craft)
    }
    catch (e) {
        return res.status(500).send(e.message)
    }
}

//Update - Put
const updateCraftReview = async (req,res) => {
    try {
        let { id, reviewId } = req.params
        const { reviewer, rating, review } = req.body
        let craft = await Craft.findById(id)
        if (!craft) {
            return res.status(404).send('Craft not found')
        }
        const indReview = craft.craftReviews.id(reviewId)
        if(!indReview) {
            return res.status(404).send('Review not found')
        }

        if (reviewer !== undefined) indReview.reviewer = reviewer
        if (rating !== undefined) indReview.rating = rating
        if (review !== undefined) indReview.review = review

        await craft.save()
        return res.status(200).json(craft)

    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Delete Review
const deleteCraftReview = async (req,res) => {
    try {
        const { id, reviewId } = req.params
        const craft = await Craft.findById(id)
        if (!craft) {
            return res.status(404).send('Craft not found')
        }
        const review = craft.craftReviews.id(reviewId)
        if(!review) {
            return res.status(404).send('Review not found')
        }
        review.deleteOne()

        await craft.save()
        return res.status(200).json(craft)

    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Delete - Delete
const deleteCraft = async (req,res) => {
    try {
        const { id } = req.params
        const deleted = await Craft.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Craft deleted.')
        }
        throw new Error('Craft not found.') 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


module.exports = {
    getAllCrafts,
    getCraftsById,
    getCraftsByName,
    getPaintDrawingCrafts,
    getSculptureCrafts,
    getTextilesCrafts,
    getPaperCrafts,
    getJewelryMakingCrafts,
    getHomeDecorCrafts,
    getWitchcraftCrafts,
    getKidsCrafts,
    getFreeCrafts,
    getPremiumCrafts,
    createCraft,
    updateCraft,
    getCraftReviewById,
    addCraftReview,
    updateCraftReview,
    deleteCraftReview,
    deleteCraft
}