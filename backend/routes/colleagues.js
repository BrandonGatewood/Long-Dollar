const express = require('express');
const Colleague = require('../models/colleagueModel');

const router = express.Router();

// get all colleagues
router.get('/', (req, res) => {});

// get a single colleague
router.get('/:id', (req, res) => {});

// post a new colleague
router.post('/', async (req, res) => {
    const { name, longDollar } = req.body;

    try{
        const colleague = await Colleague.create({ name, longDollar });

        res.status(200).json(colleague);
    }
    catch(error) {
        res.status(400).json({ error: error.message });
    }
});

// delete a colleague
router.delete('/:id', (req, res) => {})

// update a report
router.patch('/:id', (req, res) => {})

module.exports = router;