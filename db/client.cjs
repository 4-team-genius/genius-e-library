const { Client } = require("pg");
const client = new Client (process.env.DATABASE_URL || 'postgres://localhost:5432/genius_e_library'
);

module.exports = client;