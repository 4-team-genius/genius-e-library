const client = require('./client.cjs');

const createBook = async (bookId, title, author, description, coverImage, available, free, rent, buy, categoryId, userId) => {
  try {
    await client.query(`
      INSERT INTO books (bookId, title, author, description, coverImage, available, free, rent, buy, category, user)
      VALUES ('${bookId}', '${title}', '${author}', '${description}', '${coverImage}','${available}', '${free}', '${rent}', '${buy}', '${categoryId}', '${userId}');
    `);
  } catch (err) {
    console.log(err);
  }
}

const getBooks = async () => {
  try {
    const { rows } = await client.query(`
      SELECT * FROM books;
    `);
    return rows;
  } catch (err) {
    console.log(err);
  }
}

const getBookById = async (bookId) => {
  try {
    const { rows } = await client.query(`
      SELECT * FROM books WHERE id = ${bookId};
    `);
    return rows[0];
  } catch (err) {
    console.log(err);
  }
}

const updateBook = async (bookId, newTitle, newAuthor, newDescription, newCoverImage, newAvailable, newFree, newRent, newBuy, newCategory) => {
  try {
    await client.query(`
      UPDATE books
      SET title = '${newTitle}', author = '${newAuthor}', description = '${newDescription}', coverImage = '${newCoverImage}', available = '${newAvailable}', free = '${newFree}', rent = '${newRent}', buy = '${newBuy}', category = '${newCategory}'
      WHERE id = ${bookId};
    `);
  } catch (err) {
    console.log(err);
  }
}

const deleteBook = async (bookId) => {
  try {
    await client.query(`
      DELETE FROM books WHERE id = ${bookId};
    `);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
}