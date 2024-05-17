const express = require('express');
const Report = require('../models/reportModel');

const router = express.Router();

// get all reports
router.get('/', (req, res) => {});

// get a single report
router.get('/:id', (req, res) => {});

// post a report
router.post('/', async (req, res) => {
    const { colleagueId, name, dollar } = req.body;

    try {
        const report = await Report.create({ colleagueId, name, dollar });

        res.status(200).json(report);
    }
    catch(error) {
        res.status(400).json({ error: error.message });
    }
})

// delete a report
router.delete('/:id', (req, res) => {});

// update a report
router.patch('/:id', (req, res) => {});

module.exports = router;