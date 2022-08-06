const mysql = require('mysql')

const pool = mysql.createPool({
    host:'localhost',
    database:'bdteste',
    user:'root',
    password:'',
    connectionLimit:10,
    
})

module.exports = pool