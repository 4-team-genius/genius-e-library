import { useParams, Link } from "react-router-dom";
import { fakeBooks } from "./data/books";

const BookDetails = () => {
    const { id } = useParams();
    const book = fakeBooks.find(b => b.id === parseInt(id));

    if (!book) return <div>Book not found</div>;

    const handleRent = () => {
        alert(`Renting ${book.title}... Proceeding to payment`);
    };

    const handleBuy = () => {
        alert(`Buying ${book.title}... Proceeding to payment`);
    };

    return (
        <div className="book-details-container">
            <h1 className="x1book-title">{book.title}</h1>

            <div className="book-content">
                <div className="book-media">
                    <img
                        src={book.image}
                        alt={book.title}
                        className="book-cover"
                    />
                    <p className="book-author">By {book.author || "Unknown Author"}</p>
                    <Link
                        to={`/category/${book.category}`}
                        className="book-category-link"
                    >
                        {book.category}
                    </Link>
                </div>

                <div className="book-info">
                    <p className="book-description">{book.description}</p>

                    <div className="book-actions">
                        <button onClick={handleRent} className="book-details__rent-button">
                            Rent Book ($9.99)
                        </button>
                        <button onClick={handleBuy} className="book-details__buy-button">
                            Buy Book ($19.99)
                        </button>
                    </div>
                </div>
            </div>

            <div className="ad-card">
                <h3>Limited Time Offer! ⏳</h3>
                <p>Get 3 months free with annual membership!</p>
                <button className="cta-button">Learn More</button>
            </div>
        </div>
    );
};

export default BookDetails;