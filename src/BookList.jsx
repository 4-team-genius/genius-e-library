import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ setBookDetails }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch('/api/v1/bookslist');
        const bookObject = await response.json();
        setBooks(bookObject.books);
      } catch (err) {
        console.log(err);
      }
    };

    getBooks();
  }, []);

  return (
    <ol>
      {books.map((eachBook) => (
        <li key={eachBook.id}>
          <Link to={`/books/${eachBook.id}`} onClick={() => setBookDetails(eachBook)}>
            {eachBook.title}
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default BookList;