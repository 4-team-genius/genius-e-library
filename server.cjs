const express = require('express');
const { getBooks } = require('./db/booklist.cjs');
const { getCategories } = require('./db/categories.cjs');
const { getUserByToken } = require('./db/users.cjs');
const app = express();

app.use(express.json());
app.use(express.static('dist'));
 
app.get('/api/v1/books/:id', async (req, res) => {
    try {
      const books = await getBooks(req.params.id);
      if (!books) {
      res.json({ books });
      }else {
        res.status(404).send("Book not found");
      }
    } catch (err) {
      res.status(500).send("Error fetching books");
    }
  });

  app.get('/api/v1/bookcategories', async (req, res) => {
    try{
      const bookcategories = await getCategories();
      res.json({ bookcategories });
    } catch (err) {
      res.status(500).send("Error fetching book categories");
    }
  });

  app.get('/api/v1/account', async (req, res) => {
    try {
      const user = await getUserByToken(req.headers.authorization);
      res.json({ user });
    } catch (err) {
      res.status(401).send("Unauthorized access");
    }
  });

  app.get('/api/v1/login', async (req, res) => {
    try {
      const user = await getUserByToken(req.headers.authorization);
      res.json({ user });
    } catch (err) {
      res.status(401).send("Unauthorized access");
    }
  });

  app.get('/api/v1/register', async (req, res) => {
    try {
      const user = await getUserByToken(req.headers.authorization);
      res.json({ user });
    } catch (err) {
      res.status(401).send("Unauthorized access");
    }
  });

  


  app.listen(3000, () =>
    console.log('Server is running on port 3000'));