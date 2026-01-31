const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host:process.env.DBHOST,
    user:process.env.DBUSER,
    password:process.env.DBPASSWORD,
    database:process.env.DBDATABASE,
    queueLimit:0,
    connectionLimit:10
})

module.exports = pool;