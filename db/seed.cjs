require('dotenv').config({path:__dirname+'/../.env'});

const client = require('./client.cjs');
const { createUser } = require('./users.cjs');
const { createBook } = require('./booklist.cjs');
const { createCategory } = require('./categories.cjs');

const dropTables = async() => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS categories;
      DROP TABLE IF EXISTS booklist;
      DROP TABLE IF EXISTS users;
    `);
  } catch(err) {
    console.log(err);
  }
}

const createTables = async () => {
  try {
    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(30) NOT NULL UNIQUE,
        password VARCHAR(60) NOT NULL,
        verified BOOLEAN NOT NULL DEFAULT false,
        registration_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE booklist (
        id SERIAL PRIMARY KEY,
        title VARCHAR(60) NOT NULL UNIQUE,
        author VARCHAR(60) NOT NULL,
        description VARCHAR(500) NOT NULL,
        cover_image BYTEA,
        available BOOLEAN NOT NULL,
        free BOOLEAN NOT NULL,
        rent INTEGER NOT NULL,
        buy INTEGER NOT NULL,
        category INTEGER REFERENCES categories(id),
        user INTEGER REFERENCES users(id)
      );

      CREATE TABLE categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(30)
      );
    `);
  } catch (err) {
    console.log(err);
  }
};

const syncAndSeed = async() => {
  await client.connect();

  await dropTables();

  await createTables();

  await createUser();

  await createCategory();
  
  await createBook();
  
  await client.end();
}

syncAndSeed();