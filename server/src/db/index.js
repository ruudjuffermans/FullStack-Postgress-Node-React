require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

pool.connect(error => {
    if (error) {
        console.error('Database connection failed:', error);
        return;
    }
    console.log("Successfully connected to the database.");
});

module.exports = pool;