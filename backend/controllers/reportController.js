const Report = require('../models/reportModel');
const mongoose = require('mongoose');

// get all reports
const getReports = async (req, res) => {
    const reports = await Report.find({ }).sort({ createdAt: -1 });

    res.status(200).json(reports);
}

// get a single report
const getReport = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such report' });
    }

    const report = await Report.findById(id);

    if(!report) {
        return res.status(400).json({ error: 'No such report' });
    }
    
    res.status(200).json(report);
}

// create a new report
const createReport = async (req, res) => {
    const { colleagueId, prevLongDollar } = req.body;

    try {
        const report = await Report.create({ colleagueId, prevLongDollar });

        res.status(200).json(report);
    }
    catch(error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getReports,
    getReport,
    createReport
}