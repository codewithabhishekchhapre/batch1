import React, { useEffect, useState } from 'react';
import UserList from './UserList ';
import { useNavigate } from 'react-router-dom';

function Privateroute() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (!storedToken) {
      navigate('/login');
    } else {
      setToken(storedToken);
    }
  }, []);

  if (!token) {
    // Optionally show a loading spinner or nothing while checking token
    return null;
  }

  return <UserList />;
}

export default Privateroute;
