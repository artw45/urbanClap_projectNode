// requirements
const express = require('express');
const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = "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";
const app = express();
const port = 80;
var bodyParser = require('body-parser');
var cors = require('cors');

//mongoose 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/urbanClap',{useNewUrlParser:true,useUnifiedTopology:true});

//checking for mongoose connection
const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));
db.once("open",() => {
    console.log("we are connected");
});

//serviceprovider schema
var serviceProvider  = new mongoose.Schema({
    name : String,
    userName : String,
    address : String,
    reach : Number,
    reviews : Number,
    mobileNumber1 : String,
    mobileNumber2 : String,
    email1 : String,
    email2 : String,
    instagram : String,
    facebook : String,
    linkedIn : String,
    clients : [String],
    nameOfServices : [String],
    images : [[String]],
    password : String
});

const Model = mongoose.model('serviceproviderModel',serviceProvider); 
const query = "";

//signIn Schema
var signInSchema = new mongoose.Schema({
    userName : String,
    password : String
});

const signInModel = mongoose.model('signInModel',signInSchema);

// passing js and image files and other cotents
app.use(express.urlencoded());
app.use(express.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json('application/json'));
app.use(cors({origin : 'http://localhost:4200',optionsSuccessStatus : 200})); 

//settiig api key to send email
sgMail.setApiKey(sendgridAPIKey);

//endpoints description
app.get('/',(req,res) => {
    res.sendFile("/Users/jayparekh/Documents/college_project_trials/JJAG/serviceprovider/serviceproviderpage.html");
});

app.post("/sendMail", (req,res) => {
    console.log("hi");
    console.log(req.body);
    sgMail.send({
        to : "arishrathwa45@gmail.com",
        from : "arishrathwa45@gmail.com",
        subject : "Work Assignment",
        text : req.body.message
    },(err,success) => {
        if(err) {
            res.send("Can't Send Email! Check Your Network Availibilty");
        }
        else {
            res.send(`your message is sent to ${req.body.email}`);
        }
    });
    
});

app.get("/data/:query",(req,res) => {
    Model.findOne({userName:req.params.query},(err,success) => {
        if(err) {
            console.log("not geting");
        }
        else {
            res.send(success);
        }
    });
})

app.post("/signUp",(req,res) => {
    let serviceProviderData = new Model(req.body);
    let signInData = new signInModel();
    signInData.userName = req.body.userName;
    signInData.password = req.body.password;
    signInData.save((err,success) => {
        if(err) {
            console.log("not saved");
        }
    });

    serviceProviderData.save((err,success) => {
        if(err) {
            console.log('not saves');
        }
    });

    res.send({
        'arish' : "rathwa"
    });
});

app.post("/signin",(req,res) => {
    signInModel.findOne({userName:req.body.userName,password:req.body.password},(err,success) => {
        if(err) {
            res.send("not verified");
        }
        else {
            res.send(success);
        }
    })
});

app.get("/serviceproviders/:query",(req,res) => {
    console.log("hi");
    console.log(req.params.query);
    Model.find({nameOfServices : [req.params.query]},(err,success) => {
        res.send(success);
    });
})

app.listen(port,() => {
    console.log(`service is ON on port ${port}`);
});

