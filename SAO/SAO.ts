// @ts-ignore
const mongoose = require('mongoose');

// @ts-ignore
const Schema = mongoose.Schema;

const saoSchema = new Schema({

    mail: { type: String, required: true },
    password: {type: String, required: true},

})

module.exports = mongoose.model('SAO', saoSchema);