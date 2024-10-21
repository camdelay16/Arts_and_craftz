const { Type } = require('../models')

// Get Index
const getAllTypes = async (req,res) => {
    try {
        const types = await Type.find()
        res.json(types)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Get Show 
const getTypesById = async (req,res) => {
    try { 
        const { id } = req.params
        const type = await Type.findById(id)
        if (type) {
            return res.json(type)
        }
        return res.status(404).send('Type with that ID not found.')
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

//Get By Name
const getTypesByName = async (req,res) => {
    try {
        const { name } = req.params
        const types = await Type.find({ craftType: new RegExp(name, 'i') })
        if (types.length > 0) {
            return res.json(types)
        }
        return res.status(404).send('Type with that name not found.')
    } catch(e) {
        return res.status(500).send(e.message)
    }
}

//Create - Post
const createType = async (req,res) => {
    try {
        const type = await new Type(req.body)
        await type.save()
        return res.status(201).json({type})
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

//Update - Put
const updateType = async (req,res) => {
    try {
        let { id } = req.params
        let type = await Type.findByIdAndUpdate(id, req.body, { new: true })
        if (type) {
            return res.status(200).json(type)
        }
        throw new Error('Type not found.')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

//Delete - Delete
const deleteType = async (req,res) => {
    try {
        const { id } = req.params
        const deleted = await Type.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Type deleted.')
        }
        throw new Error('Type not found.') 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllTypes,
    getTypesById,
    getTypesByName,
    createType,
    updateType,
    deleteType
}