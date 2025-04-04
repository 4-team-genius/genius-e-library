import { useState, useEffect } from "react";

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
    <>
      <h1>Genius-e-Library</h1>
      {token ? (
        <>
          <h1>Welcome to Genius e-Library</h1>
          <button onClick={logOut}>LogOut</button>
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button type="submit">LogIn</button>
        </form>
      )}
    </>
  );
};

export default Login;