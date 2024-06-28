const Colleague = require('../models/colleagueModel');
const mongoose = require('mongoose');

// get all colleagues
const getColleagues = async (req, res) => {
    const colleagues = await Colleague.find({ }).sort();

    res.status(200).json(colleagues);
}

// get a single colleague
const getColleague = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such colleague' });
    }

    const colleague = await Colleague.findById(id);

    if(!colleague) {
        return res.status(400).json({ error: 'No such colleague' });
    }
    
    res.status(200).json(colleague);
}

// create a new colleague
const createColleague = async (req, res) => {
    const { name, longDollar } = req.body;
    
    // add document to db
    try{
        const colleague = await Colleague.create({ name, longDollar });

        res.status(200).json(colleague);
    }
    catch(error) {
        res.status(400).json({ error: error.message });
    }
}

// delete a colleauge
const deleteColleague = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such colleague' });
    }

    const colleague = await Colleague.findOneAndDelete({ _id: id });

    if(!colleague) {
        return res.status(400).json({ error: 'No such colleague' });
    }

    res.status(200).json(colleague);
}

// update a colleague
const updateColleague = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such colleague' });
    }

    const colleague = await Colleague.findOneAndUpdate({ _id: id }, { ...req.body });

    if(!colleague) {
        return res.status(400).json({ error: 'No such colleague' });
    }

    res.status(200).json(colleague);
}

module.exports = {
    getColleagues,
    getColleague,
    createColleague,
    deleteColleague,
    updateColleague
} 