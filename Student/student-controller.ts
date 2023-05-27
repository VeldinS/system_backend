// @ts-ignore
const mongoose = require('mongoose');
// @ts-ignore
const HttpError = require('../Custom-Error/http-error.ts')
const Student = require('./Student.ts')
// @ts-ignore
const Document = require('./Document.ts')
const RecoverAccount = require('./RecoverAccount.ts')
const RegisterAccount = require('./Register.ts')


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
        takenCourse10ClassAverage,

        takenCourse11,
        takenCourseName11,
        takenCourse11Quiz,
        takenCourse11Homework,
        takenCourse11Project,
        takenCourse11Midterm,
        takenCourse11Final,
        takenCourse11Total,
        takenCourse11Makeup,
        takenCourse11FinalGrade,
        takenCourse11FinalLetterGrade,
        takenCourse11ClassAverage,

        takenCourse12,
        takenCourseName12,
        takenCourse12Quiz,
        takenCourse12Homework,
        takenCourse12Project,
        takenCourse12Midterm,
        takenCourse12Final,
        takenCourse12Total,
        takenCourse12Makeup,
        takenCourse12FinalGrade,
        takenCourse12FinalLetterGrade,
        takenCourse12ClassAverage,

        takenCourse13,
        takenCourseName13,
        takenCourse13Quiz,
        takenCourse13Homework,
        takenCourse13Project,
        takenCourse13Midterm,
        takenCourse13Final,
        takenCourse13Total,
        takenCourse13Makeup,
        takenCourse13FinalGrade,
        takenCourse13FinalLetterGrade,
        takenCourse13ClassAverage,

        takenCourse14,
        takenCourseName14,
        takenCourse14Quiz,
        takenCourse14Homework,
        takenCourse14Project,
        takenCourse14Midterm,
        takenCourse14Final,
        takenCourse14Total,
        takenCourse14Makeup,
        takenCourse14FinalGrade,
        takenCourse14FinalLetterGrade,
        takenCourse14ClassAverage,

        takenCourse15,
        takenCourseName15,
        takenCourse15Quiz,
        takenCourse15Homework,
        takenCourse15Project,
        takenCourse15Midterm,
        takenCourse15Final,
        takenCourse15Total,
        takenCourse15Makeup,
        takenCourse15FinalGrade,
        takenCourse15FinalLetterGrade,
        takenCourse15ClassAverage,

        takenCourse16,
        takenCourseName16,
        takenCourse16Quiz,
        takenCourse16Homework,
        takenCourse16Project,
        takenCourse16Midterm,
        takenCourse16Final,
        takenCourse16Total,
        takenCourse16Makeup,
        takenCourse16FinalGrade,
        takenCourse16FinalLetterGrade,
        takenCourse16ClassAverage,

        takenCourse17,
        takenCourseName17,
        takenCourse17Quiz,
        takenCourse17Homework,
        takenCourse17Project,
        takenCourse17Midterm,
        takenCourse17Final,
        takenCourse17Total,
        takenCourse17Makeup,
        takenCourse17FinalGrade,
        takenCourse17FinalLetterGrade,
        takenCourse17ClassAverage,

        takenCourse18,
        takenCourseName18,
        takenCourse18Quiz,
        takenCourse18Homework,
        takenCourse18Project,
        takenCourse18Midterm,
        takenCourse18Final,
        takenCourse18Total,
        takenCourse18Makeup,
        takenCourse18FinalGrade,
        takenCourse18FinalLetterGrade,
        takenCourse18ClassAverage,

        takenCourse19,
        takenCourseName19,
        takenCourse19Quiz,
        takenCourse19Homework,
        takenCourse19Project,
        takenCourse19Midterm,
        takenCourse19Final,
        takenCourse19Total,
        takenCourse19Makeup,
        takenCourse19FinalGrade,
        takenCourse19FinalLetterGrade,
        takenCourse19ClassAverage,

        takenCourse20,
        takenCourseName20,
        takenCourse20Quiz,
        takenCourse20Homework,
        takenCourse20Project,
        takenCourse20Midterm,
        takenCourse20Final,
        takenCourse20Total,
        takenCourse20Makeup,
        takenCourse20FinalGrade,
        takenCourse20FinalLetterGrade,
        takenCourse20ClassAverage,
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
        takenCourse10ClassAverage,

        takenCourse11,
        takenCourseName11,
        takenCourse11Quiz,
        takenCourse11Homework,
        takenCourse11Project,
        takenCourse11Midterm,
        takenCourse11Final,
        takenCourse11Total,
        takenCourse11Makeup,
        takenCourse11FinalGrade,
        takenCourse11FinalLetterGrade,
        takenCourse11ClassAverage,

        takenCourse12,
        takenCourseName12,
        takenCourse12Quiz,
        takenCourse12Homework,
        takenCourse12Project,
        takenCourse12Midterm,
        takenCourse12Final,
        takenCourse12Total,
        takenCourse12Makeup,
        takenCourse12FinalGrade,
        takenCourse12FinalLetterGrade,
        takenCourse12ClassAverage,

        takenCourse13,
        takenCourseName13,
        takenCourse13Quiz,
        takenCourse13Homework,
        takenCourse13Project,
        takenCourse13Midterm,
        takenCourse13Final,
        takenCourse13Total,
        takenCourse13Makeup,
        takenCourse13FinalGrade,
        takenCourse13FinalLetterGrade,
        takenCourse13ClassAverage,

        takenCourse14,
        takenCourseName14,
        takenCourse14Quiz,
        takenCourse14Homework,
        takenCourse14Project,
        takenCourse14Midterm,
        takenCourse14Final,
        takenCourse14Total,
        takenCourse14Makeup,
        takenCourse14FinalGrade,
        takenCourse14FinalLetterGrade,
        takenCourse14ClassAverage,

        takenCourse15,
        takenCourseName15,
        takenCourse15Quiz,
        takenCourse15Homework,
        takenCourse15Project,
        takenCourse15Midterm,
        takenCourse15Final,
        takenCourse15Total,
        takenCourse15Makeup,
        takenCourse15FinalGrade,
        takenCourse15FinalLetterGrade,
        takenCourse15ClassAverage,

        takenCourse16,
        takenCourseName16,
        takenCourse16Quiz,
        takenCourse16Homework,
        takenCourse16Project,
        takenCourse16Midterm,
        takenCourse16Final,
        takenCourse16Total,
        takenCourse16Makeup,
        takenCourse16FinalGrade,
        takenCourse16FinalLetterGrade,
        takenCourse16ClassAverage,

        takenCourse17,
        takenCourseName17,
        takenCourse17Quiz,
        takenCourse17Homework,
        takenCourse17Project,
        takenCourse17Midterm,
        takenCourse17Final,
        takenCourse17Total,
        takenCourse17Makeup,
        takenCourse17FinalGrade,
        takenCourse17FinalLetterGrade,
        takenCourse17ClassAverage,

        takenCourse18,
        takenCourseName18,
        takenCourse18Quiz,
        takenCourse18Homework,
        takenCourse18Project,
        takenCourse18Midterm,
        takenCourse18Final,
        takenCourse18Total,
        takenCourse18Makeup,
        takenCourse18FinalGrade,
        takenCourse18FinalLetterGrade,
        takenCourse18ClassAverage,

        takenCourse19,
        takenCourseName19,
        takenCourse19Quiz,
        takenCourse19Homework,
        takenCourse19Project,
        takenCourse19Midterm,
        takenCourse19Final,
        takenCourse19Total,
        takenCourse19Makeup,
        takenCourse19FinalGrade,
        takenCourse19FinalLetterGrade,
        takenCourse19ClassAverage,

        takenCourse20,
        takenCourseName20,
        takenCourse20Quiz,
        takenCourse20Homework,
        takenCourse20Project,
        takenCourse20Midterm,
        takenCourse20Final,
        takenCourse20Total,
        takenCourse20Makeup,
        takenCourse20FinalGrade,
        takenCourse20FinalLetterGrade,
        takenCourse20ClassAverage,
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

// @ts-ignore
const requestDocument = async (req, res, next) => {
    const {docType, docLanguage, docCopies, docReason} = req.body;
    // @ts-ignore
    const createdDocument = await new Document({
        docType,
        docLanguage,
        docCopies,
        docReason
    })

    try {
        // @ts-ignore
        createdDocument.save();
        res.status(201).json({ message: "new document uploaded", createdPost: createdDocument });
    } catch (err) {
        const error = new HttpError('Creating document failed, please try again.');
        return next(error);
    }
}

// @ts-ignore
const recoverAccount = async (req, res, next) => {
    const {studentId, studentMail, securityQuestion, securityAnswer} = req.body;

    const recoverAccountData = await new RecoverAccount({
        studentId,
        studentMail,
        securityQuestion,
        securityAnswer
    })

    try {
        recoverAccountData.save();
        res.status(201).json({ message: "new data uploaded", createdPost: recoverAccountData });
    } catch (err) {
        const error = new HttpError('Creating data failed, please try again.');
        return next(error);
    }
}

// @ts-ignore
const registerAccount = async (req, res, next) => {
    const {name, surname, mail, phone, studentId, citizenshipId, department, securityQuestion, securityAnswer} = req.body;

    const registerAccount = await new RegisterAccount({
        name,
        surname,
        mail,
        phone,
        studentId,
        citizenshipId,
        department,
        securityQuestion,
        securityAnswer
    })

    try {
        registerAccount.save();
        res.status(201).json({ message: "new data uploaded", createdPost: registerAccount });
    } catch (err) {
        const error = new HttpError('Registering failed, please try again.');
        return next(error);
    }
}

exports.createStudent = createStudent;
exports.studentLogin = studentLogin;
exports.getStudentById = getStudentById;
exports.updatePassword = updatePassword;
exports.updateMail = updateMail;
exports.updatePhNum = updatePhNum;
exports.requestDocument = requestDocument;
exports.recoverAccount = recoverAccount;
exports.registerAccount = registerAccount;

