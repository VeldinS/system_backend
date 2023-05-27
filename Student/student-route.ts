// @ts-ignore
const express = require('express');
const studentControllers = require('./student-controller.ts')

// @ts-ignore
const router = express.Router();

//CREATING ROUTES FOR ACTIVITIES
router.post('/Student/Create', studentControllers.createStudent);
router.post('/Login/Student', studentControllers.studentLogin);
router.get('/Student/:pid', studentControllers.getStudentById);
router.patch('/Student/UpdatePassword/:pid', studentControllers.updatePassword);
router.patch('/Student/UpdateMail/:pid', studentControllers.updateMail);
router.patch('/Student/UpdatePhNum/:pid', studentControllers.updatePhNum);
router.post('/Student/SCA/:pid', studentControllers.requestDocument);
router.post('/Student/RecoverAccount', studentControllers.recoverAccount);
router.post('/Student/Register', studentControllers.registerAccount);

module.exports = router;