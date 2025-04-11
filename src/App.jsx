// App.jsx
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import BookList from './BookList.jsx';
import Login from './Login.jsx';
import Account from './Account.jsx';
import Register from "./Register.jsx";
import BookCategory from "./BookCategory.jsx";
// import './App.css'; // Create this CSS file

const App = () => {
  const [user, setUser] = useState();
  const [bookDetails, setBookDetails] = useState({});

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="logo">Genius e-Library 📚</h1>
        <nav className="main-nav">
          <Link to="/books" className="nav-link">Home</Link>
          {!user ? (
            <div className="auth-links">
              <Link to="/login" className="nav-link">Log In</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </div>
          ) : (
            <Link to="/account" className="nav-link">My Account</Link>
          )}
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/books" element={<BookList setBookDetails={setBookDetails} />} />
          {/* <Route path="/books/:id" element={<BookDetails bookDetails={bookDetails} setBookDetails={setBookDetails} />} /> */}
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          {/* <Route path="/register" element={<Register setUser={setUser} />} /> */}
          <Route path="/account" element={<Account user={user} />} />
          <Route path="/bookcategories" element={<BookCategory />} />
        </Routes>
      </main>
    </div >
  );
};

export default App;