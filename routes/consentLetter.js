const express = require('express');
const router = express.Router();
const ConsentLetter = require('../models/consentLetter.js')

router.get('/', async (req, res) => {
    try {
        const consentLetters = await ConsentLetter.find();
        res.json(consentLetters)
    } catch (err) {
        res.json({ message: err })
    }
});

router.post('/add', async (req, res) => {
    try {
        const newConsentLetter = new ConsentLetter({...req.body})
        await newConsentLetter.save()
        res.json({message: 'successfull'})
    } catch (err) {
        res.json({ message: err })
    }
});

router.get('/:phone', async (req, res) => {
    const phone = req.params.phone
    try {
        const consentLetter = await ConsentLetter.findOne({phone});
        res.json(consentLetter)
    } catch (err) {
        res.json({ message: err })
    }
});

module.exports = router;