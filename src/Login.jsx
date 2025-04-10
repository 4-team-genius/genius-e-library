import { useState, useEffect } from "react";

// Login.jsx
const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const attemptToLoginWithToken = async () => {
      const localStorageToken = localStorage.getItem('token');

      if (localStorageToken) {
        try {
          const response = await fetch('/api/v1/login', {
            method: 'GET',
            headers: {
              "Content-Type": "application/json",
              "Authorization": localStorageToken,
            },
          });

          const data = await response.json();
          console.log(data); // Process or use this data to set user
          if (data.user) {
            setUser(data.user);
          }
        } catch (error) {
          console.error("Error logging in with token", error);
        }
      }
    };

    attemptToLoginWithToken();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/v1/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setUser(data.user);
        alert('LOGIN SUCCESSFUL');
      } else {
        alert('LOGIN FAILED');
      }
    } catch (err) {
      alert('LOGIN FAILED');
      console.error("Login error", err);
    }
  };

  const logOut = () => {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Back! 👋</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;