import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/auth/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
    };

    fetchUserProfile();
  }, []);

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
    </div>
  );
};

export default Profile;
