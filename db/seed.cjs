require('dotenv').config({path:__dirname+'/../.env'});

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
        description VARCHAR(2000) NOT NULL,
        cover_image VARCHAR(300),
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
  await createUser('test1@gmail.com', '1test');
  await createUser('test2@gmail.com', '2test');
  await createUser('test3@gmail.com', '3test');
  await createUser('test4@gmail.com', '4test');

  await createCategory('History');
  await createCategory('Science');
  await createCategory('Entertainment');
  await createCategory('Travel');
  await createCategory('Fiction');

  await createBook("The Cat in the Hat", "Dr. Seuss", "The Cat in the Hat is a children book by American author Dr. Seuss. It was first published in 1957 and tells the story of two young children who are visited by a mischievous cat in a hat. The cat causes chaos in the house, but the children have a lot of fun.", "https://upload.wikimedia.org/wikipedia/en/1/10/The_Cat_in_the_Hat.png", true, true, 2.99, 9.99, 1, 1);
  await createBook("The Adventures of Pinocchio", "Carlo Collodi", "The Adventures of Pinocchio is a novel by Italian writer Carlo Collodi about a wooden puppet who magically comes to life. The novel was first published in 1883 and follows Pinocchio adventures as he tries to become a real boy.", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/The_Adventures_of_Pinocchio_-_Cover.jpg/640px-The_Adventures_of_Pinocchio_-_Cover.jpg", true, true, 1.99, 8.99, 4, 2);
  await createBook("Alice Adventures in Wonderland", "Lewis Carroll", "Alice Adventures in Wonderland is a novel by English writer Lewis Carroll about a young girl named Alice who falls down a rabbit hole and enters a fantastical world called Wonderland. The novel was first published in 1865 and follows Alice adventures as she meets strange and wonderful creatures, including the White Rabbit, the Mad Hatter, and the Cheshire Cat.", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Alice%27s_Adventures_in_Wonderland_-_Carroll%2C_Robinson_-_S001_-_Cover.jpg/640px-Alice%27s_Adventures_in_Wonderland_-_Carroll%2C_Robinson_-_S001_-_Cover.jpg", true, true, 2.99, 10.99, 5, 3);
  await createBook("Lord of the Flies", "William Golding", "Lord of the Flies is a novel by English writer William Golding published in 1954. The novel tells the story of a group of British schoolboys who are stranded on a deserted island after their plane crashes. The boys must learn to survive without adults, but their attempts at self-governance descend into chaos and violence.", "https://upload.wikimedia.org/wikipedia/en/9/9b/LordOfTheFliesBookCover.jpg", true, true, 1.99, 8.99, 3, 4);
  await createBook("Little Women", "Louisa May Alcott", "Little Women is a novel by American author Louisa May Alcott published in 1868. The novel tells the story of the March sisters, four young women who must navigate the challenges of life and love during the American Civil War. The novel is a coming-of-age story that explores themes of family, friendship, and the importance of strong female characters.", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Houghton_AC85.A%E2%84%93194L.1869_pt.2aa_-_Little_Women%2C_title.jpg/400px-Houghton_AC85.A%E2%84%93194L.1869_pt.2aa_-_Little_Women%2C_title.jpg", true, true, 2.99, 9.99, 2, 5);
  
  await client.end();
}

syncAndSeed();