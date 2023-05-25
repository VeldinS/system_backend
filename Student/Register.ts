// @ts-ignore
const mongoose = require('mongoose');

// @ts-ignore
const Schema = mongoose.Schema;

const registerSchema = new Schema({

    name: { type: String, required: true },
    surname: { type: String, required: true },
    mail: { type: String, required: true },
    phone: { type: Number, required: true },
    studentId: { type: String, required: true },
    citizenshipId: { type: String, required: true },
    department: { type: String, required: true },
    securityQuestion: { type: String, required: true },
    securityAnswer: { type: String, required: true },
})

module.exports = mongoose.model('Register Requests', registerSchema);