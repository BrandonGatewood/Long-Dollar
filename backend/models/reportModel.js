const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
    colleagueId: {
        type: Schema.Types.ObjectId, ref: 'colleagueSchema',
        require: true,
    },
    prevLongDollar: {
        type: Boolean,
        require: true
    } 
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);