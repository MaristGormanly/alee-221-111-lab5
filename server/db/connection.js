/* const pool = require('mysql').pool;

pool = new pool( { 
    host: "localhost",
    port: 1337,
    user: "adminUser",
    password: "letmein",
    database: "socialMedia",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    // ssl: process.env.PG_SSL === "true" ? true : false
} );

module.exports = {
    pool: () => pool,
    query: ( text, params ) => pool.query( text, params ),
}; */