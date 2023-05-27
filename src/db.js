const { Pool } = require('pg')

const pool = new Pool({
    password: 'Vz-04102000',
    database: 'skills',
    port: 5432,
    host: 'localhost',
    user: 'postgres'
});

module.exports = pool;