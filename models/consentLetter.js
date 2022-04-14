const mongoose = require("mongoose");

const consentLetterSchema = new mongoose.Schema({
    age: String,
    colony: String,
    designed: String,
    in_charge: String,
    name_cli_1: String,
    name_cli_2: String,
    name_doc: String,
    name_id: String,
    number: String,
    phone: String,
    postal_code: String,
    procedures: String,
    sex: String,
    state: String,
    street: String,
    town:String
});

module.exports = mongoose.model('ConsentLetter', consentLetterSchema);