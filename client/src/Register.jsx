import { useState } from 'react';

const Register = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      setUser(data.user); 
      alert('Welcome, Registration successful!');
    } catch (err) {
      alert('Sorry, Registration failed!');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input 
        value={email} 
        onChange={(event) => setEmail(event.target.value)} 
        placeholder="Email" 
        required 
      />
      <input 
        type="password"
        value={password} 
        onChange={(event) => setPassword(event.target.value)} 
        placeholder="Password" 
        required 
      />
      <button>Register</button>
    </form>
  );
};

export default Register;
