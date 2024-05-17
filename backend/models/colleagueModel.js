const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const colleagueSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    longDollar: {
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('Colleague', colleagueSchema);

