const express = require('express')
const app = express();
const router = express.Router();
const pool = require('./Database')


router.get('/', async (req, res) => {
    try {
        // Execute the query using the pool.query or pool.execute method
        // pool.execute is preferred for prepared statements
        const [rows, fields] = await pool.execute('SELECT * FROM `users`');

        // Send the results back as JSON
        res.status(200).json(rows);
    } catch (err) {
        console.error('Database query failed:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router;