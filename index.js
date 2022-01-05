const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json()) 

const triageRoute = require('./routes/triage');
const consentLetterRoute = require('./routes/consentLetter');

app.use('/api/triage', triageRoute);
app.use('/api/consentLetter', consentLetterRoute);

app.listen(5000,() => console.log("Server listening at port 5000"));