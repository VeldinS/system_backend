// @ts-ignore
const mongoose = require('mongoose');
// @ts-ignore
const HttpError = require('../Custom-Error/http-error.ts')
const SAO = require('./SAO.ts')
const fetchDocuments = require('../Student/Document.ts')
const fetchRecoveries = require('../Student/RecoverAccount.ts')
const fetchRegisters = require('../Student/Register.ts')



// @ts-ignore
const createSao = async (req, res, next) => {
    const { mail, password } = req.body;

    const createSao = await new SAO({ mail, password })

    try {
        createSao.save();
        res.status(201).json({ message: "new SAO uploaded", createdPost: createSao });
    } catch (err) {
        const error = new HttpError('Creating SAO failed, please try again.');
        return next(error);
    }
}

// @ts-ignore
const saoLogin = async (req, res, next) => {
    const { mail, password} = req.body;
    let existingUser;
    try {
        existingUser = await SAO.findOne({mail: mail});
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
const getDocuments = async (req, res, next) => {
    let documents;
    try {
        documents = await fetchDocuments.find().sort({ createdAt: -1 });
    }catch(err){
        const error = new HttpError('Fetching documents failed, please try again later.');
        return next(error);
    }
    // @ts-ignore
    res.json(documents.map(document => document.toObject({ getters: true })));
}

// @ts-ignore
const deleteDocument = async (req, res, next) => {
    const documentId = req.params.pid;
    let document;
    try{
        document = await fetchDocuments.findById(documentId);
    }catch (err){
        const error = new HttpError('Something went wrong, could not delete document.');
        return next(error);
    }
    if(!document){
        const error = new HttpError('Could not find a document for this ID.');
        return next(error);
    }
    try{
        await document.deleteOne();
    }catch(err){
        const error = new HttpError('Something went wrong, could not delete document.');
        return next(error);
    }
    res.status(200).json({message: 'Deleted document.'})
}

// @ts-ignore
const getRecovers = async (req, res, next) => {
    let recovery;
    try {
        recovery = await fetchRecoveries.find().sort({ createdAt: -1 });
    }catch(err){
        const error = new HttpError('Fetching documents failed, please try again later.');
        return next(error);
    }
    // @ts-ignore
    res.json(recovery.map(recovery => recovery.toObject({ getters: true })));
}

// @ts-ignore
const deleteRecovery = async (req, res, next) => {
    const recoverId = req.params.pid;
    let recover;
    try{
        recover = await fetchRecoveries.findById(recoverId);
    }catch (err){
        const error = new HttpError('Something went wrong, could not delete recovery.');
        return next(error);
    }
    if(!recover){
        const error = new HttpError('Could not find a recovery for this ID.');
        return next(error);
    }
    try{
        await recover.deleteOne();
    }catch(err){
        const error = new HttpError('Something went wrong, could not delete recovery.');
        return next(error);
    }
    res.status(200).json({message: 'Deleted recovery.'})
}

// @ts-ignore
const getRegisters = async (req, res, next) => {
    let register;
    try {
        register = await fetchRegisters.find().sort({ createdAt: -1 });
    }catch(err){
        const error = new HttpError('Fetching registers failed, please try again later.');
        return next(error);
    }
    // @ts-ignore
    res.json(register.map(register => register.toObject({ getters: true })));
}

// @ts-ignore
const deleteRegister = async (req, res, next) => {
    const registerId = req.params.pid;
    let register;
    try{
        register = await fetchRegisters.findById(registerId);
    }catch (err){
        const error = new HttpError('Something went wrong, could not delete register.');
        return next(error);
    }
    if(!register){
        const error = new HttpError('Could not find a register for this ID.');
        return next(error);
    }
    try{
        await register.deleteOne();
    }catch(err){
        const error = new HttpError('Something went wrong, could not delete register.');
        return next(error);
    }
    res.status(200).json({message: 'Deleted register.'})
}

exports.createSao = createSao;
exports.saoLogin = saoLogin;
exports.getDocuments = getDocuments;
exports.deleteDocument = deleteDocument;
exports.getRecovers = getRecovers;
exports.deleteRecovery = deleteRecovery;
exports.getRegisters = getRegisters;
exports.deleteRegister = deleteRegister;