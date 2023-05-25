// @ts-ignore
const mongoose = require('mongoose');

// @ts-ignore
const Schema = mongoose.Schema;

const accRecoverSchema = new Schema({

    studentId: { type: String, required: true },
    studentMail: { type: String, required: true },
    securityQuestion: { type: String, required: true },
    securityAnswer: { type: String, required: true },
})

module.exports = mongoose.model('Account Recover', accRecoverSchema);