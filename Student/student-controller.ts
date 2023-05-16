import mongoose from 'mongoose';
const HttpError = require('../Custom-Error/http-error')
const Student = require('./Student')


//CREATING NEW STUDENT AND SENDING IT TO THE DATABASE
// @ts-ignore
const createStudent = async (req, res, next) => {
    const {
        name,
        surname,
        id,
        image,
        mail,
        password,
        phoneNumber,
        citizenshipId,
        registrationYear,
        Department,
        RegistrationType,
        EducationLevel,
        currentCourse1,
        currentCourse1Quiz,
        currentCourse1Homework,
        currentCourse1Project,
        currentCourse1Midterm,
        currentCourse1Final,
        currentCourse1Total,
        currentCourse1Makeup,
        currentCourse1FinalGrade,
        currentCourse1FinalLetterGrade,
        currentCourse1ClassAverage,
        currentCourse2,
        currentCourse2Quiz,
        currentCourse2Homework,
        currentCourse2Project,
        currentCourse2Midterm,
        currentCourse2Final,
        currentCourse2Total,
        currentCourse2Makeup,
        currentCourse2FinalGrade,
        currentCourse2FinalLetterGrade,
        currentCourse2ClassAverage,
        currentCourse3,
        currentCourse3Quiz,
        currentCourse3Homework,
        currentCourse3Project,
        currentCourse3Midterm,
        currentCourse3Final,
        currentCourse3Total,
        currentCourse3Makeup,
        currentCourse3FinalGrade,
        currentCourse3FinalLetterGrade,
        currentCourse3ClassAverage,
        currentCourse4,
        currentCourse4Quiz,
        currentCourse4Homework,
        currentCourse4Project,
        currentCourse4Midterm,
        currentCourse4Final,
        currentCourse4Total,
        currentCourse4Makeup,
        currentCourse4FinalGrade,
        currentCourse4FinalLetterGrade,
        currentCourse4ClassAverage,
        currentCourse5,
        currentCourse5Quiz,
        currentCourse5Homework,
        currentCourse5Project,
        currentCourse5Midterm,
        currentCourse5Final,
        currentCourse5Total,
        currentCourse5Makeup,
        currentCourse5FinalGrade,
        currentCourse5FinalLetterGrade,
        currentCourse5ClassAverage,
        currentExam1,
        currentExam2,
        currentExam3,
        currentExam4,
        currentExam5,
        currentCourseName1,
        currentCourseName2,
        currentCourseName3,
        currentCourseName4,
        currentCourseName5,
        currentCourseSchedule1,
        currentCourseSchedule2,
        currentCourseSchedule3,
        currentCourseSchedule4,
        currentCourseSchedule5,
        takenCourse1,
        takenCourseName1,
        takenCourse1Quiz,
        takenCourse1Homework,
        takenCourse1Project,
        takenCourse1Midterm,
        takenCourse1Final,
        takenCourse1Total,
        takenCourse1Makeup,
        takenCourse1FinalGrade,
        takenCourse1FinalLetterGrade,
        takenCourse1ClassAverage,
        takenCourse2,
        takenCourseName2,
        takenCourse2Quiz,
        takenCourse2Homework,
        takenCourse2Project,
        takenCourse2Midterm,
        takenCourse2Final,
        takenCourse2Total,
        takenCourse2Makeup,
        takenCourse2FinalGrade,
        takenCourse2FinalLetterGrade,
        takenCourse2ClassAverage,
        takenCourse3,
        takenCourseName3,
        takenCourse3Quiz,
        takenCourse3Homework,
        takenCourse3Project,
        takenCourse3Midterm,
        takenCourse3Final,
        takenCourse3Total,
        takenCourse3Makeup,
        takenCourse3FinalGrade,
        takenCourse3FinalLetterGrade,
        takenCourse3ClassAverage,
        takenCourse4,
        takenCourseName4,
        takenCourse4Quiz,
        takenCourse4Homework,
        takenCourse4Project,
        takenCourse4Midterm,
        takenCourse4Final,
        takenCourse4Total,
        takenCourse4Makeup,
        takenCourse4FinalGrade,
        takenCourse4FinalLetterGrade,
        takenCourse4ClassAverage,

        takenCourse5,
        takenCourseName5,
        takenCourse5Quiz,
        takenCourse5Homework,
        takenCourse5Project,
        takenCourse5Midterm,
        takenCourse5Final,
        takenCourse5Total,
        takenCourse5Makeup,
        takenCourse5FinalGrade,
        takenCourse5FinalLetterGrade,
        takenCourse5ClassAverage,

        takenCourse6,
        takenCourseName6,
        takenCourse6Quiz,
        takenCourse6Homework,
        takenCourse6Project,
        takenCourse6Midterm,
        takenCourse6Final,
        takenCourse6Total,
        takenCourse6Makeup,
        takenCourse6FinalGrade,
        takenCourse6FinalLetterGrade,
        takenCourse6ClassAverage,

        takenCourse7,
        takenCourseName7,
        takenCourse7Quiz,
        takenCourse7Homework,
        takenCourse7Project,
        takenCourse7Midterm,
        takenCourse7Final,
        takenCourse7Total,
        takenCourse7Makeup,
        takenCourse7FinalGrade,
        takenCourse7FinalLetterGrade,
        takenCourse7ClassAverage,

        takenCourse8,
        takenCourseName8,
        takenCourse8Quiz,
        takenCourse8Homework,
        takenCourse8Project,
        takenCourse8Midterm,
        takenCourse8Final,
        takenCourse8Total,
        takenCourse8Makeup,
        takenCourse8FinalGrade,
        takenCourse8FinalLetterGrade,
        takenCourse8ClassAverage,

        takenCourse9,
        takenCourseName9,
        takenCourse9Quiz,
        takenCourse9Homework,
        takenCourse9Project,
        takenCourse9Midterm,
        takenCourse9Final,
        takenCourse9Total,
        takenCourse9Makeup,
        takenCourse9FinalGrade,
        takenCourse9FinalLetterGrade,
        takenCourse9ClassAverage,

        takenCourse10,
        takenCourseName10,
        takenCourse10Quiz,
        takenCourse10Homework,
        takenCourse10Project,
        takenCourse10Midterm,
        takenCourse10Final,
        takenCourse10Total,
        takenCourse10Makeup,
        takenCourse10FinalGrade,
        takenCourse10FinalLetterGrade,
        takenCourse10ClassAverage
    }
        = req.body;
    // CREATING NEW STUDENT
    const createdStudent = await new Student({
        name,
        surname,
        id,
        image,
        mail,
        password,
        phoneNumber,
        citizenshipId,
        registrationYear,
        Department,
        RegistrationType,
        EducationLevel,
        currentCourse1,
        currentCourse1Quiz,
        currentCourse1Homework,
        currentCourse1Project,
        currentCourse1Midterm,
        currentCourse1Final,
        currentCourse1Total,
        currentCourse1Makeup,
        currentCourse1FinalGrade,
        currentCourse1FinalLetterGrade,
        currentCourse1ClassAverage,
        currentCourse2,
        currentCourse2Quiz,
        currentCourse2Homework,
        currentCourse2Project,
        currentCourse2Midterm,
        currentCourse2Final,
        currentCourse2Total,
        currentCourse2Makeup,
        currentCourse2FinalGrade,
        currentCourse2FinalLetterGrade,
        currentCourse2ClassAverage,
        currentCourse3,
        currentCourse3Quiz,
        currentCourse3Homework,
        currentCourse3Project,
        currentCourse3Midterm,
        currentCourse3Final,
        currentCourse3Total,
        currentCourse3Makeup,
        currentCourse3FinalGrade,
        currentCourse3FinalLetterGrade,
        currentCourse3ClassAverage,
        currentCourse4,
        currentCourse4Quiz,
        currentCourse4Homework,
        currentCourse4Project,
        currentCourse4Midterm,
        currentCourse4Final,
        currentCourse4Total,
        currentCourse4Makeup,
        currentCourse4FinalGrade,
        currentCourse4FinalLetterGrade,
        currentCourse4ClassAverage,
        currentCourse5,
        currentCourse5Quiz,
        currentCourse5Homework,
        currentCourse5Project,
        currentCourse5Midterm,
        currentCourse5Final,
        currentCourse5Total,
        currentCourse5Makeup,
        currentCourse5FinalGrade,
        currentCourse5FinalLetterGrade,
        currentCourse5ClassAverage,
        currentExam1,
        currentExam2,
        currentExam3,
        currentExam4,
        currentExam5,
        currentCourseName1,
        currentCourseName2,
        currentCourseName3,
        currentCourseName4,
        currentCourseName5,
        currentCourseSchedule1,
        currentCourseSchedule2,
        currentCourseSchedule3,
        currentCourseSchedule4,
        currentCourseSchedule5,
        takenCourse1,
        takenCourseName1,
        takenCourse1Quiz,
        takenCourse1Homework,
        takenCourse1Project,
        takenCourse1Midterm,
        takenCourse1Final,
        takenCourse1Total,
        takenCourse1Makeup,
        takenCourse1FinalGrade,
        takenCourse1FinalLetterGrade,
        takenCourse1ClassAverage,
        takenCourse2,
        takenCourseName2,
        takenCourse2Quiz,
        takenCourse2Homework,
        takenCourse2Project,
        takenCourse2Midterm,
        takenCourse2Final,
        takenCourse2Total,
        takenCourse2Makeup,
        takenCourse2FinalGrade,
        takenCourse2FinalLetterGrade,
        takenCourse2ClassAverage,
        takenCourse3,
        takenCourseName3,
        takenCourse3Quiz,
        takenCourse3Homework,
        takenCourse3Project,
        takenCourse3Midterm,
        takenCourse3Final,
        takenCourse3Total,
        takenCourse3Makeup,
        takenCourse3FinalGrade,
        takenCourse3FinalLetterGrade,
        takenCourse3ClassAverage,
        takenCourse4,
        takenCourseName4,
        takenCourse4Quiz,
        takenCourse4Homework,
        takenCourse4Project,
        takenCourse4Midterm,
        takenCourse4Final,
        takenCourse4Total,
        takenCourse4Makeup,
        takenCourse4FinalGrade,
        takenCourse4FinalLetterGrade,
        takenCourse4ClassAverage,

        takenCourse5,
        takenCourseName5,
        takenCourse5Quiz,
        takenCourse5Homework,
        takenCourse5Project,
        takenCourse5Midterm,
        takenCourse5Final,
        takenCourse5Total,
        takenCourse5Makeup,
        takenCourse5FinalGrade,
        takenCourse5FinalLetterGrade,
        takenCourse5ClassAverage,

        takenCourse6,
        takenCourseName6,
        takenCourse6Quiz,
        takenCourse6Homework,
        takenCourse6Project,
        takenCourse6Midterm,
        takenCourse6Final,
        takenCourse6Total,
        takenCourse6Makeup,
        takenCourse6FinalGrade,
        takenCourse6FinalLetterGrade,
        takenCourse6ClassAverage,

        takenCourse7,
        takenCourseName7,
        takenCourse7Quiz,
        takenCourse7Homework,
        takenCourse7Project,
        takenCourse7Midterm,
        takenCourse7Final,
        takenCourse7Total,
        takenCourse7Makeup,
        takenCourse7FinalGrade,
        takenCourse7FinalLetterGrade,
        takenCourse7ClassAverage,

        takenCourse8,
        takenCourseName8,
        takenCourse8Quiz,
        takenCourse8Homework,
        takenCourse8Project,
        takenCourse8Midterm,
        takenCourse8Final,
        takenCourse8Total,
        takenCourse8Makeup,
        takenCourse8FinalGrade,
        takenCourse8FinalLetterGrade,
        takenCourse8ClassAverage,

        takenCourse9,
        takenCourseName9,
        takenCourse9Quiz,
        takenCourse9Homework,
        takenCourse9Project,
        takenCourse9Midterm,
        takenCourse9Final,
        takenCourse9Total,
        takenCourse9Makeup,
        takenCourse9FinalGrade,
        takenCourse9FinalLetterGrade,
        takenCourse9ClassAverage,

        takenCourse10,
        takenCourseName10,
        takenCourse10Quiz,
        takenCourse10Homework,
        takenCourse10Project,
        takenCourse10Midterm,
        takenCourse10Final,
        takenCourse10Total,
        takenCourse10Makeup,
        takenCourse10FinalGrade,
        takenCourse10FinalLetterGrade,
        takenCourse10ClassAverage
    });

    // SAVING CREATED STUDENT TO DATABASE
    try {
        createdStudent.save();
        res.status(201).json({ message: "new student uploaded", createdPost: createdStudent });
    } catch (err) {
        const error = new HttpError('Creating student failed, please try again.');
        return next(error);
    }
};


//LOGIN FOR STUDENTS
// @ts-ignore
const studentLogin = async (req, res, next) => {
    const { mail, password} = req.body;
    let existingUser;
    try {
        existingUser = await Student.findOne({mail: mail});
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

//GETTING SPECIFIC STUDENT BY ITS UNIQUE ID FROM DATABASE
// @ts-ignore
const getStudentById = async (req, res, next) => {
    const studentId = req.params.pid;
    let specificStudent;
    try {
        specificStudent = await Student.findById(studentId);
    }catch (err){
        const error = new HttpError('Something went wrong, could not find student.');
        return next(error);
    }
    //IF ACTIVITY IS NOT FOUND
    if(!specificStudent) {
        const error = new HttpError('Could not find an student for the provided id.');
        return next(error);
    }
    res.json(specificStudent.toObject({getters: true}) );
};

//UPDATING STUDENT PASSWORD
// @ts-ignore
const updatePassword = async (req, res, next) => {
    const { password } = req.body;
    const studentId = req.params.pid;
    let student;
    try{
        student = await Student.findById(studentId);
    }catch (err){
        const error = new HttpError('Something went wrong, could not update password.');
        return next(error);
    }
    //UPDATING THE DATA
    student.password = password;
    //UPDATING PASSWORD DATA WITH NEW INFORMATION IN THE DATABASE
    try{
        await student.save();
    }catch (err){
        const error = new HttpError('Something went wrong, could not update password.');
        return next(error);
    }
    res.status(200).json({ place:  student.toObject({getters: true}) })
};

//UPDATING STUDENT MAIL
// @ts-ignore
const updateMail = async (req, res, next) => {
    const { mail } = req.body;
    const studentId = req.params.pid;
    let student;
    try{
        student = await Student.findById(studentId);
    }catch (err){
        const error = new HttpError('Something went wrong, could not update mail.');
        return next(error);
    }
    //UPDATING THE DATA
    student.mail = mail;
    //UPDATING MAIL DATA WITH NEW INFORMATION IN THE DATABASE
    try{
        await student.save();
    }catch (err){
        const error = new HttpError('Something went wrong, could not update mail.');
        return next(error);
    }
    res.status(200).json({ place:  student.toObject({getters: true}) })
};

//UPDATING STUDENT PHONE NUMBER
// @ts-ignore
const updatePhNum = async (req, res, next) => {
    const { phoneNumber } = req.body;
    const studentId = req.params.pid;
    let student;
    try{
        student = await Student.findById(studentId);
    }catch (err){
        const error = new HttpError('Something went wrong, could not update phone number.');
        return next(error);
    }
    //UPDATING THE DATA
    student.phoneNumber = phoneNumber;
    //UPDATING phone number DATA WITH NEW INFORMATION IN THE DATABASE
    try{
        await student.save();
    }catch (err){
        const error = new HttpError('Something went wrong, could not update phone number.');
        return next(error);
    }
    res.status(200).json({ place:  student.toObject({getters: true}) })
};

exports.createStudent = createStudent;
exports.studentLogin = studentLogin;
exports.getStudentById = getStudentById;
exports.updatePassword = updatePassword;
exports.updateMail = updateMail;
exports.updatePhNum = updatePhNum;

