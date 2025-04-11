import { Link } from "react-router-dom";
import { categories } from "./data/books";

const BookCategories = () => {
    return (
        <div className="categories-container">
            <div className="categories-header">
                <h2 className="categories-title">Book Categories</h2>
                <Link to="/add-category" className="add-category-button">
                    Add New Category
                </Link>
            </div>

            <div className="categories-table">
                <div className="table-header">
                    <div className="table-cell header-cell">Category Name</div>
                    <div className="table-cell header-cell">Description</div>
                </div>

                {categories.map((category) => (
                    <div className="table-row" key={category.name}>
                        <div className="table-cell">
                            <Link
                                to={`/category/${category.name}`}
                                className="category-link"
                            >
                                {category.name}
                            </Link>
                        </div>
                        <div className="table-cell">{category.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookCategories;