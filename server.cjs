const express = require('express');
const { getBooks } = require('./db/booklist.cjs');
const { getCategories } = require('./db/categories.cjs');
const { getUserByToken } = require('./db/users.cjs');
const app = express();

app.use(express.json());
app.use(express.static('dist'));
 app.get('/api/v1/books', async (req, res) => {
    try {
      const books = await getBooks();
      res.json({ books });
    } catch (err) {
      res.status(500).send("Error fetching books");
    }
  });

  app.get('/', async (req, res) => {
    try{
      const bookcategories = await getBookCategories();
      res.json({ bookcategories });
    } catch (err) {
      res.status(500).send("Error fetching book categories");
    }
  });

  app.get('/api/v1/user', async (req, res) => {
    try {
      const user = await getUserByToken(req.headers.authorization);
      res.json({ user });
    } catch (err) {
      res.status(401).send("Unauthorized access");
    }
  });



  app.listen(3000, () =>
    console.log('Server is running on port 3000'));