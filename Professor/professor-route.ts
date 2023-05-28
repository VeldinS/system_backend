// @ts-ignore
import studentControllers from "../Student/student-controller";

const express = require('express');
const professorControllers = require('./professor-controller')

// @ts-ignore
const router = express.Router();

//CREATING ROUTES FOR ACTIVITIES
router.post('/Professor/Create', professorControllers.createProfessor);
router.post('/Login/Professor', professorControllers.professorLogin);
router.get('/Professor/:pid', professorControllers.getProfessorById);

module.exports = router;