const express = require('express');
const app = express();
const router = express.Router();
const pool = require('../Database');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    const { email, password, } = req.body;
    try{
        const[rows] = await pool.query(`SELECT * FROM users WHERE email = ?`,[email]);
        
        res.json({message:rows})
    }catch(error){
        res.json({message:"login success"})
    }
})

module.exports = router;