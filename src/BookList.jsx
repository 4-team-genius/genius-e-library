import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fakeBooks, categories } from './data/books';

const BookList = ({ setBookDetails }) => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    setBooks(fakeBooks);
  }, []);

  const filteredBooks = selectedCategory === 'All'
    ? books
    : books.filter(book =>
      book.category.toLowerCase() === selectedCategory.toLowerCase()
    );

  return (
    <div className="book-list-container">
      <div className="filters">
        <div className="filter-group">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-filter"
          >
            {categories.map(cat => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <Link to="/add-book" className="add-book-button">
          Add New Book
        </Link>
      </div>

      <div className="books-grid">
        {filteredBooks.map((eachBook) => (
          <div key={eachBook.id} className="book-card">
            <img
              src={eachBook.image || '/placeholder-book.jpg'}
              alt={eachBook.title}
              className="book-image"
            />
            <div className="book-info">
              <Link
                to={`/books/${eachBook.id}`}
                onClick={() => setBookDetails(eachBook)}
                className="book-title"
              >
                {eachBook.title}
              </Link>
              <p className="book-description">
                {eachBook.description?.slice(0, 30) + '...'}
              </p>
              <div className="book-category">
                <Link
                  to={`/category/${eachBook.category}`}
                  className=""
                >
                  {eachBook.category}
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="ad-card">
          <h3>Special Offer! 🎉</h3>
          <p>Get premium membership for 50% off!</p>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default BookList;