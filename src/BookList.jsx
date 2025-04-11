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
    : books.filter(book => book.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="book-list-container">
      <div className="filters">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-filter"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
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
                {eachBook.category}
              </div>
              <button className="Free-button">Free</button>
              <button className="Rent-button">Rent</button>
              <button className="Buy-button">Buy</button>
            </div>
          </div>
        ))}

        {/* Advertisement Card */}
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