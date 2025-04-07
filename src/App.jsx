import BookCategory from "./BookCategory";
import { useEffect, useState } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch("http://localhost:3000/api/books");
      const responseJson = await response.json();
      setBooks(responseJson.books);
    };
    getBooks();
  }, []);

  return (
    <section>
      <h1>Genius E-Library</h1>
      <BookCategory books={books} setSelectedBook={setSelectedBook} />
    </section>
  );
}

export default App;j