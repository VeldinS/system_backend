// @ts-ignore
const express = require('express');
// @ts-ignore
const mongoose = require('mongoose');
let bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

//HANDLING 'CORS' ERROR
// @ts-ignore
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//ROUTES
const studentRoutes = require('./Student/student-route.ts')
const professorRoutes = require('./Professor/professor-route.ts')
const saoRoutes = require('./SAO/sao-route.ts')


app.use('/', studentRoutes); // route to STUDENTS
app.use('/', professorRoutes);
app.use('/', saoRoutes);
//CONNECTING TO DATABASE
mongoose
    .connect(`mongodb+srv://veldin:V3ldin123@cluster0.kai58d9.mongodb.net/systemInformation?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000);
        console.log('Connected to database')
    })
    // @ts-ignore
    .catch((err) => {
        console.log(err);
    });

