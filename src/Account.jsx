import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserByToken } from './api/v1/users';

const Account = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); 
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUserByToken(token);
        setUser(userData);
      } catch (err) {
        navigate('/login');
      }
    };
    
    if (token) {
      fetchUserData();
    } else {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <div className="account">
      {user ? (
        <div>
          <h2>Account Information</h2>
          <p>Email: {user.email}</p>
          {}
        </div>
      ) : (
        <p>Account Details</p>
      )}
    </div>
  );
};

export default Account;