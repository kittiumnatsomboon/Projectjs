const express = require('express');
const app = express();
const router = express.Router();
const pool = require('../Database')


router.post('/', async (req, res) => {
    const {firstname,lastname,email, password,} = req.body;
    console.log(firstname);     
})

module.exports = router;