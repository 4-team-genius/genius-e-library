import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import BookList from './BookList.jsx';
import Login from './Login.jsx';
import Account from './Account.jsx';
import Register from "./Register.jsx";
import BookDetails from "./BookDetails.jsx";
import BookCategory from "./BookCategory.jsx";
import BookCategories from "./BookCategories.jsx";
import AddBook from "./AddBook.jsx";
import AddCategory from "./AddCategory.jsx";

const App = () => {
  const [user, setUser] = useState();

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="logo">Genius e-Library 📚</h1>
        <nav className="main-nav">
          <Link to="/books" className="nav-link">Home</Link>
          <Link to="/categories" className="nav-link">Categories</Link>
          {!user ? (
            <div className="auth-links">
              <Link to="/login" className="nav-link">Log In</Link>
              {/* <Link to="/register" className="nav-link">Register</Link> */}
            </div>
          ) : (
            <Link to="/account" className="nav-link">My Account</Link>
          )}
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/account" element={<Account user={user} />} />
          <Route path="/categories" element={<BookCategories user={user} />} />
          <Route path="/category/:categoryName" element={<BookCategory />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/add-category" element={<AddCategory />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Genius e-Library. All rights reserved.</p>
      </footer>
    </div >
  );
};

export default App;