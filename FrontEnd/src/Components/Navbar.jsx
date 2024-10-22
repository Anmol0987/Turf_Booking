import React, { useEffect, useState } from 'react'

import { useSetRecoilState } from 'recoil'
import isSignUp from '../atoms/IsSignup'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { useRecoilState } from 'recoil'
import isLoginAtom from '../atoms/Islogin'
import axios from 'axios'


const Navbar = () => {
    const [isLogin, setIsLogin] = useRecoilState(isLoginAtom)
    const setSignUp = useSetRecoilState(isSignUp)
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle dropdown
    const toggleDropdown = () => {
      setIsOpen(!isOpen); // Toggles the state between true and false
    };
    

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
            setIsLogin(false)
            window.location.href = '/';
        } catch (error) {
            console.error('Error logging out:', error.response);  // Error handling
        }
    }

    const handleButton = () => {
        setSignUp(true)
        window.location.href = '/login'
    }

    return (
        <>
            <div className='relative w-full h-24 backdrop-blur-xl bg-gray-300/10 flex items-center justify-between px-6 '>
                <div className='flex items-center justify-center'>
                    <h1 className='text-[3vw]  mt-5 font-bold text-center text-white mb-8'>Turf!t</h1>
                </div>
                <div className='flex items-center justify-center gap-5 text-white '>
                    <button className='flex items-center gap-1'>Turf List <IoIosArrowDown /></button>
                    <Link>About us</Link>
                    <button className='border-white border-2 py-2 px-3 rounded-md'>List your Turf </button>
                    {
                        isLogin ? (
                            <>
                            <button className="flex items-center gap-1 justify-center text-white border-2 border-white px-4 py-2 rounded" onClick={toggleDropdown}> User <IoIosArrowDown/> </button>
                                    {/* Dropdown div */}
                                    {isOpen  && (
                                        <div className="absolute top-20 right-2 bg-white border shadow-lg rounded p-4 h-72 w-96">
                                             <div className="text-black shadow-md rounded py-2 px-6">
                                                <h2 className="text-lg"> {user.username}</h2>
                                                <p className='text-sm'> {user.email}</p>
                                                </div>
                                            <button onClick={HandleLogout} className='py-1 px-2 text-sm bg-red-500 text-white rounded-md m-2'>Logout</button> 
                                        </div>
                                    )}
                                    
                            </>
                            ) : ( 
                                <button onClick={handleButton} className='text-lg relative bg-white  px-8 items-center py-3  rounded-full  text-black transition ease-in-out delay-100 hover:text-blue-400  hover:bg-white hover:-translate-y-2  duration-300 '>Login/Register</button>
                            )
                    }


                </div>

            </div>
        </>
    )
}

export default Navbar