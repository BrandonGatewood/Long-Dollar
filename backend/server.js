require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const colleagueRoutes = require('./routes/colleagues');
const reportRoutes = require('./routes/reports');

// express app
const  app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/colleagues', colleagueRoutes);
app.use('/api/reports', reportRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for req
        app.listen(process.env.PORT, () => {
            console.log("Connected to db and listening on port 4000");
        })
    })
    .catch((error) => {
        console.log(error);
    })
