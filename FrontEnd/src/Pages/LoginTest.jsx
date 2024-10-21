import React, { useState } from 'react';

const LoginTest = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Controls form and prompt

  const handleSignUpClick = () => {
    setIsSignUp(true); // Show Sign Up form and prompt
  };

  const handleSignInClick = () => {
    setIsSignUp(false); // Show Sign In form and prompt
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-full max-w-[100vh] min-h-[500px] rounded-lg shadow-lg bg-white overflow-hidden">

        {/* Sign Up Form */}
        <div
          className={`absolute inset-y-0 left-0 w-1/2 h-full bg-green-400 p-8 transition-transform duration-500 ease-in-out ${isSignUp ? 'translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100 pointer-events-auto'
            }`}
        >
          <h1 className="text-2xl font-bold mb-4 text-white">Sign In</h1>
          <div className="flex justify-center mb-4">
            <a href="#" className="social mx-2"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social mx-2"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social mx-2"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p className="mb-4 text-white text-sm">or use your email account</p>
          <input type="email" placeholder="Email" className="bg-gray-200 p-3 mb-2 w-full" />
          <input type="password" placeholder="Password" className="bg-gray-200 p-3 mb-2 w-full" />
          <a href="#" className="text-sm text-white mb-2 block">Forgot your password?</a>
          <button type="submit" className="w-full rounded-full bg-green-600 text-white py-2 px-4 mt-4">
            Sign In
          </button>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute inset-y-0 left-0 w-1/2 h-full bg-yellow-200 p-8 transition-transform duration-500 ease-in-out ${isSignUp ? 'translate-x-full opacity-100 pointer-events-auto' : '-translate-x-0 opacity-0 pointer-events-none'
            }`}
        >
          <h1 className="text-2xl font-bold mb-4 text-white">Create Account</h1>
          <div className="flex justify-center mb-4">
            <a href="#" className="social mx-2"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social mx-2"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social mx-2"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p className="mb-4 text-white text-sm">or use your email for registration</p>
          <input type="text" placeholder="Name" className="bg-gray-200 p-3 mb-2 w-full" />
          <input type="email" placeholder="Email" className="bg-gray-200 p-3 mb-2 w-full" />
          <input type="password" placeholder="Password" className="bg-gray-200 p-3 mb-2 w-full" />
          <button type="submit" className="w-full rounded-full bg-yellow-400 text-white py-2 px-4 mt-4">
            Sign Up
          </button>
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
