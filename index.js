const express = require("express");
const cors = require('cors');
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

app.use(cors())
app.use(express.json()) 

const triageRoute = require('./routes/triage');
const consentLetterRoute = require('./routes/consentLetter');

app.use('/api/triage', triageRoute);
app.use('/api/consentLetter', consentLetterRoute);

mongoose.connect(
    process.env.MONGODB_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => console.log('connected to DB'))
.catch(err => console.log(err))

app.listen(5000,() => console.log("Server listening at port 5000"));