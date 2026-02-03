const express = require('express');
const app = express();
const router = express.Router();
const pool = require('../Database');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
    const {firstname,lastname,phone,email, password,} = req.body;
    try{
        const[rows] = await pool.query(`SELECT * FROM users WHERE email = ? OR telephone = ? `,[email,phone]);
        if(rows.length > 0){
           return res.status(400).json({message:"Email or firstname or lastname is valit"});
        }
        const saltRounds = 12;
        const hashpassword = await bcrypt.hash(password,saltRounds)
        await pool.query( "INSERT INTO users (firstname, lastname, telephone, email, `password`) VALUES (?, ?, ?, ?, ?)",
            [firstname,lastname,phone,email,hashpassword]
        )
        return res.status(200).json({message:"สมัครสำเร็จ"}) 

    }catch(error){
        res.json({message:`Error connectiondatabase ${error}`})
    }
})

module.exports = router;