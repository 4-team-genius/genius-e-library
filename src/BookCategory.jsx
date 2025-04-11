import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fakeBooks } from "./data/books"; 

const BookCategory = ({ setBookDetails }) => { 
  const { categoryName } = useParams();
  const [categoryBooks, setCategoryBooks] = useState([]);

  useEffect(() => {
    if (categoryName.toLowerCase() === "all") {
      setCategoryBooks(fakeBooks);
    } else {
      const filteredBooks = fakeBooks.filter(
        (book) => book.category.toLowerCase() === categoryName.toLowerCase()
      );
      setCategoryBooks(filteredBooks);
    }
  }, [categoryName]);

  return (
    <div className="category-page">
      <div className="book-list-container">
        <h2>Books in {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Category</h2>
        <div className="books-grid">
          {categoryBooks.map((eachBook) => (
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
    </div>
  );
};

export default BookCategory;