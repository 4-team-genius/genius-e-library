import {useEffect, useState} from 'react';

const BookList = (props) => {
  const [books, setBooks] = useState([]);

useEffect(() => {
  const getBooks = async () => {
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books')
    const responseJson = await response.json()
    setBooks(responseJson.books)
  }
  getBooks();
}, []);
}

export default BookList;