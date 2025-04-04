import {useEffect, useState} from 'react';

const BookList = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch('localhost:3000/api/books')
      const responseJson = await response.json()
      setBooks(responseJson.books)
    }
  getBooks();
  
}, []);
  const contactClick = (book) => {
    props.setSelectedBook(book);
  };

  return (
    <ul>
      {books.map((individualBook) => {
        return (
          <li
            onClick={() => {contactClick(individualBook)}}
            key={individualBook.id}
            >
            {individualBook.title}
          </li>
        )
      })}
    </ul>
  )
}

export default BookList;