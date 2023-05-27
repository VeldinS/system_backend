const express = require('express');
const mongoose = require('mongoose')
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
const studentRoutes = require('./Student/student-route')

app.use('/', studentRoutes); // route to STUDENTS

//CONNECTING TO DATABASE
mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kai58d9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000);
        console.log('Connected to database')
    })
    // @ts-ignore
    .catch((err) => {
        console.log(err);
    });

