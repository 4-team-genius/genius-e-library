const express = require('express');
const { createBook, getBooks, getBookById, updateBook, deleteBook } = require('./db/booklist.cjs');
const app = express();

app.use(express.json());
 app.get('/api/genius-e-library', async (req, res) => {
    try {
      const books = await getBooks();
      res.json({ books });
    } catch (err) {
      res.status(500).send("Error fetching books");
    }
  });

  app.listen(5173, () =>
    console.log('Server is running on port 5173'));