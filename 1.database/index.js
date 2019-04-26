const mysql = require('mysql')

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "gemaster12345",
    port : "3306",
    database : "movie"
})

module.exports = db