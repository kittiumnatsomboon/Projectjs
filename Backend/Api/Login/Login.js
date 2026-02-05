const express = require('express');
const app = express();
const router = express.Router();
const pool = require('../Database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
router.post('/', async (req, res) => {
    const { email, password, } = req.body;
    try {
        const [rows] = await pool.query(`SELECT * FROM users WHERE email = ?`, [email]);
        if (rows.length === 0) return res.json({ message: "ไม่พบอีเมลล์" })
        const user = rows[0];
        // Compare the submitted password with the stored hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ message: "รหัสผ่านผิดพลาดโปรดลองอีกครั้ง" })
        }
        // Authentication successful (implement session or JWT here)
        const payload = {
            userid: user.Userid,
            firstname: user.firstname,
            lastname: user.lastname,
            usertype: user.usertype,
            email: user.email,
            created_at: user.created_at,
            updated_at: user.updated_at,
        };

        // 4. Sign the token with the secret key and an expiration time
        const token = jwt.sign(payload,process.env.JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour

        // 5. Send the token in the response
        return res.json({
            message:"เข้าสู่ระบบสำเร็จ",
            token:token
        })
    } catch (error) {
        res.json({ message: "DATABASE Disconnection" })
    }
})

module.exports = router;