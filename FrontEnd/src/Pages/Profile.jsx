import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:3000/api/auth/profile', {
          withCredentials: true,
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        });

        if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data));
          setUser(response.data);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error.response);  // Error handling
      }
    };

    fetchUserProfile();
  }, []);

  
  const HandleLogout = async () => {
    alert('Logging out...');
    try {
      await axios.get('http://localhost:3000/api/auth/logout', { withCredentials: true });
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    } catch (error) {
      console.error('Error logging out:', error.response);  // Error handling
    }
  }



  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">User Profile</h1>
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-bold">Username: {user.username}</h2>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      </div>
      <button onClick={HandleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
