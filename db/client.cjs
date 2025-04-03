const { Client } = require ("pg");
const client = newClient (process.env.DATABASE_URL || 'postgres://localhost:5432/');

module.exports = client;