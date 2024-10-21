import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginTest = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [username, setUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email:loginEmail, password:loginPassword });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        // alert('Login successful!');
        navigate('/profile');
      } else {
        setError('Login failed: Invalid credentials');
      }
    } catch (error) {
      setError('Login failed: ' + error.response?.data?.error || 'Server error');
    }
  };

  const handleGoogleLogin = () => {
    window.open(`http://localhost:3000/api/auth/google`, "_self");
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/auth/register', { username:username, email:registerEmail,password: registerPassword });
    alert('Registration successful!');
    navigate('/login');
    setIsSignUp(false);
    setLoginEmail(registerEmail);
    setRegisterEmail('');
    setRegisterPassword('');
    setUsername('');
  }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-full max-w-[100vh] min-h-[500px] rounded-lg shadow-lg bg-white overflow-hidden">

        {/* Sign Up Form */}
        <div
          className={`absolute inset-y-0 left-0 w-1/2 h-full bg-yellow-200 p-8 transition-transform duration-500 ease-in-out ${isSignUp ? 'translate-x-full opacity-100 pointer-events-auto' : '-translate-x-0 opacity-0 pointer-events-none'
            }`}
        >
          <h1 className="text-2xl font-bold mb-4 text-white">Create Account</h1>
          <form onSubmit={handleRegisterSubmit} >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register
            </button>
          </form>
        </div>
        {/* Sign In Form */}
        

        <div className={`absolute inset-y-0 left-0 w-1/2 h-full bg-green-400 p-8 transition-transform duration-500 ease-in-out ${isSignUp ? 'translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100 pointer-events-auto'}`}>
          <form onSubmit={handleLoginSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className='flex justify-between'>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
              <button
                onClick={handleGoogleLogin}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login with Google
              </button>
            </div>
          </form>
        </div>
        {/* Overlay */}
        <div
          className={`absolute inset-y-0 left-1/2 w-1/2 h-full bg-gradient-to-r from-green-400 to-yellow-200 text-white transition-transform duration-500 ease-in-out ${isSignUp ? '-translate-x-full' : 'translate-x-0'
            }`}
        >
          <div className="flex flex-col justify-center items-center h-full p-8">
            {/* Sign In Prompt */}
            {!isSignUp && (
              <div className="absolute top-0 flex flex-col justify-center items-center h-full w-full text-center">
                <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
                <p className="mb-4">To keep connected with us, please login with your personal info.</p>
                <button
                  onClick={handleSignUpClick}
                  className="bg-transparent border border-white rounded-full py-2 px-5"
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Sign Up Prompt */}
            {isSignUp && (
              <div className="absolute top-0 flex flex-col justify-center items-center h-full w-full text-center">
                <h1 className="text-3xl font-bold mb-2">Hello, Friend!</h1>
                <p className="mb-4">Enter your details and start your journey with us.</p>
                <button
                  onClick={handleSignInClick}
                  className="bg-transparent border border-white rounded-full py-2 px-5"
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginTest;
