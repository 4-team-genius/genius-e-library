import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import BookList from './BookList.jsx';
import Login from './Login.jsx';
//import Register from './Register.jsx';
import Account from './Account.jsx';

const App = () => {
  const [user, setUser] = useState();
  const [bookDetails, setBookDetails] = useState({});

  return (
    <>
      <div>
        <h1>Genius e-Library</h1>
        <nav>
          <Link to="/books">Home</Link>
          {!user ? (
            <>
              <Link to="/login">Log In</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <Link to="/account">My Account</Link>
          )}
        </nav>

        <Routes>
          <Route path="/books" element={<BookList setBookDetails={setBookDetails} />} />
          {/* <Route path="/books/:id" element={<BookDetails bookDetails={bookDetails} setBookDetails={setBookDetails} />} /> */}
          <Route path="/login" element={<Login setUser={setUser} />} />
          {/* <Route path="/register" element={<Register setUser={setUser} />} /> */}
          <Route path="/account" element={<Account user={user} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;