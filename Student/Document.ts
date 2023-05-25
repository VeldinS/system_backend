// @ts-ignore
const mongoose = require('mongoose');

// @ts-ignore
const Schema = mongoose.Schema;

const docSchema = new Schema({

    docType: { type: String, required: true },
    docLanguage: { type: String, required: true },
    docCopies: { type: Number, required: true },
    docReason: { type: String, required: true },
})

module.exports = mongoose.model('Documents', docSchema);