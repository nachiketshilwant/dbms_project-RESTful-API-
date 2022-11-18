const { createPool } = require("mysql");

const pool=createPool({
    // port: process.env.DB_PORT,
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASS,
    // database: process.env.MYSQL_DB,

    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'Test@12321',
    database: 'test',
    connectionLimit: 10
})

module.exports = pool;