const express = require('express');
const { 
    getColleagues,
    getColleague,
    createColleague,
    deleteColleague,
    updateColleague
} = require('../controllers/colleagueController');

const router = express.Router();

// get all colleagues
router.get('/', getColleagues);

// get a single colleague
router.get('/:id', getColleague);

// create a new colleague
router.post('/', createColleague);

// delete a colleague
router.delete('/:id', deleteColleague);

// update a report
router.patch('/:id', updateColleague);

module.exports = router;