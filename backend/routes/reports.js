const express = require('express');
const {
    getReports,
    getReport,
    createReport
} = require('../controllers/reportController');

const router = express.Router();

// get all reports
router.get('/', getReports);

// get a single report
router.get('/:id', getReport);

// post a report
router.post('/', createReport);


module.exports = router;