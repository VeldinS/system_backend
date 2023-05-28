// @ts-ignore
import Student from "../Student/Student";

const mongoose = require('mongoose');
// @ts-ignore
const HttpError = require('../Custom-Error/http-error.ts')
const Professor = require('./Professor')
// @ts-ignore
const createProfessor = async (req, res, next) => {
    const {
        name,
        surname,
        mail,
        password,
        phone,
        department,
        currentCourse1,
        currentCourse2,
        currentCourse3,
        currentCourse4,
        currentCourse5,

        currentExam1,
        currentCourse1Day,
        currentCourse1Time,
        currentCourse1TimeEnd,
        currentExam2,
        currentCourse2Day,
        currentCourse2Time,
        currentCourse2TimeEnd,
        currentExam3,
        currentCourse3Day,
        currentCourse3Time,
        currentCourse3TimeEnd,
        currentExam4,
        currentCourse4Day,
        currentCourse4Time,
        currentCourse4TimeEnd,
        currentExam5,
        currentCourse5Day,
        currentCourse5Time,
        currentCourse5TimeEnd,
        currentCourseName1,
        currentCourseName2,
        currentCourseName3,
        currentCourseName4,
        currentCourseName5,
    } = req.body;

    const createProfessor = await new Professor({
        name,
        surname,
        mail,
        password,
        phone,
        department,
        currentCourse1,
        currentCourse2,
        currentCourse3,
        currentCourse4,
        currentCourse5,

        currentExam1,
        currentCourse1Day,
        currentCourse1Time,
        currentCourse1TimeEnd,
        currentExam2,
        currentCourse2Day,
        currentCourse2Time,
        currentCourse2TimeEnd,
        currentExam3,
        currentCourse3Day,
        currentCourse3Time,
        currentCourse3TimeEnd,
        currentExam4,
        currentCourse4Day,
        currentCourse4Time,
        currentCourse4TimeEnd,
        currentExam5,
        currentCourse5Day,
        currentCourse5Time,
        currentCourse5TimeEnd,
        currentCourseName1,
        currentCourseName2,
        currentCourseName3,
        currentCourseName4,
        currentCourseName5
    })

    try {
        createProfessor.save();
        res.status(201).json({ message: "new professor uploaded", createdPost: createProfessor });
    } catch (err) {
        const error = new HttpError('Creating professor failed, please try again.');
        return next(error);
    }
}

// @ts-ignore
const professorLogin = async (req, res, next) => {
    const { mail, password} = req.body;
    let existingUser;
    try {
        existingUser = await Professor.findOne({mail: mail});
    }catch (err){
        const error = new HttpError('Login failed, please try again later.');
        return next(error);
    }
    if(!existingUser || existingUser.password !== password){
        const error = new HttpError('Invalid credentials, could not log you in.');
        return next(error);
    }
    res.json({message: 'Logged in',user:  existingUser.toObject({getters: true})});
}

// @ts-ignore
const getProfessorById = async (req, res, next) => {
    const professorId = req.params.pid;
    let specificProfessor;
    try {
        specificProfessor = await Professor.findById(professorId);
    }catch (err){
        const error = new HttpError('Something went wrong, could not find professor.');
        return next(error);
    }
    //IF ACTIVITY IS NOT FOUND
    if(!specificProfessor) {
        const error = new HttpError('Could not find a professor for the provided id.');
        return next(error);
    }
    res.json(specificProfessor.toObject({getters: true}) );
};

exports.createProfessor = createProfessor;
exports.professorLogin = professorLogin;
exports.getProfessorById = getProfessorById;