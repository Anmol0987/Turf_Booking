import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/auth/profile', { withCredentials: true });
        if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data));
          navigate('/profile'); 
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        navigate('/login'); // Redirect to login if fetching profile fails
      }
    };

    getUserProfile();
  }, [history]);

  return <div>Redirecting...</div>;
};

export default OAuthRedirect;
