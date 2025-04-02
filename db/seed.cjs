// require('dotenv').config({path:__dirname+'/../.env'});

const client = require('./client.cjs');
const { createUser } = require('./users.cjs');
const { createBook } = require('./booklist.cjs');
const { createCategory } = require('./categories.cjs');

const dropTables = async() => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS booklist;
      DROP TABLE IF EXISTS categories;
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

      CREATE TABLE categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(30)
      );

      CREATE TABLE booklist (
        id SERIAL PRIMARY KEY,
        title VARCHAR(60) NOT NULL UNIQUE,
        author VARCHAR(60) NOT NULL,
        description VARCHAR(500) NOT NULL,
        cover_image VARCHAR(100),
        available BOOLEAN NOT NULL,
        free BOOLEAN NOT NULL,
        rent INTEGER NOT NULL,
        buy INTEGER NOT NULL,
        category_id INTEGER REFERENCES categories(id),
        user_id INTEGER REFERENCES users(id)
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

  await createUser('test@aol.com', '12345');

  await createCategory('History');
  
  await createBook("The Cat in the Hat", "Dr. Seuss", "The Cat in the Hat is a children book by American author Dr. Seuss. It was first published in 1957 and tells the story of two young children who are visited by a mischievous cat in a hat. The cat causes chaos in the house, but the children have a lot of fun.", "https://upload.wikimedia.org/wikipedia/en/1/10/The_Cat_in_the_Hat.png", false, true, 2.99, 9.99, 1, 1);
  
  await client.end();
}

syncAndSeed();