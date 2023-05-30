// @ts-ignore
const express = require('express');
const saoControllers = require('./sao-controller.ts')

// @ts-ignore
const router = express.Router();

//CREATING ROUTES FOR ACTIVITIES
router.post('/SAO/Create', saoControllers.createSao);
router.post('/Login/SAO', saoControllers.saoLogin);
router.get('/SAO/Documents', saoControllers.getDocuments);
router.delete('/SAO/Documents/Delete/:pid', saoControllers.deleteDocument);
router.get('/SAO/Recover', saoControllers.getRecovers);
router.delete('/SAO/Recover/Delete/:pid', saoControllers.deleteRecovery);
router.get('/SAO/Register', saoControllers.getRegisters);
router.delete('/SAO/Register/Delete/:pid', saoControllers.deleteRegister);

module.exports = router;