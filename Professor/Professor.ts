// @ts-ignore
const mongoose = require('mongoose');

// @ts-ignore
const Schema = mongoose.Schema;

const professorSchema = new Schema({

    name: { type: String, required: true },
    surname: { type: String, required: true },
    mail: { type: String, required: true },
    password: {type: String, required: true},
    phone: { type: Number, required: true },
    department: { type: String, required: true },

    currentCourse1: { type: String, required: true},
    currentCourse2: { type: String, required: true},
    currentCourse3: { type: String, required: true},
    currentCourse4: { type: String, required: true},
    currentCourse5: { type: String, required: true},
    currentCourseName1: { type: String, required: true,},
    currentCourseName2: { type: String, required: true,},
    currentCourseName3: { type: String, required: true,},
    currentCourseName4: { type: String, required: true,},
    currentCourseName5: { type: String, required: true,},

    currentExam1: { type: String, required: true,},
    currentCourse1Day: { type: String, required: true,},
    currentCourse1Time: { type: Number, required: true,},
    currentCourse1TimeEnd: { type: Number, required: true,},
    currentExam2: { type: String, required: true,},
    currentCourse2Day: { type: String, required: true,},
    currentCourse2Time: { type: Number, required: true,},
    currentCourse2TimeEnd: { type: Number, required: true,},
    currentExam3: { type: String, required: true,},
    currentCourse3Day: { type: String, required: true,},
    currentCourse3Time: { type: Number, required: true,},
    currentCourse3TimeEnd: { type: Number, required: true,},
    currentExam4: { type: String, required: true,},
    currentCourse4Day: { type: String, required: true,},
    currentCourse4Time: { type: Number, required: true,},
    currentCourse4TimeEnd: { type: Number, required: true,},
    currentExam5: { type: String, required: true,},
    currentCourse5Day: { type: String, required: true,},
    currentCourse5Time: { type: Number, required: true,},
    currentCourse5TimeEnd: { type: Number, required: true,},


})

module.exports = mongoose.model('Professor', professorSchema);