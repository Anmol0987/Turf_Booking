import React from 'react'
import logo from '../assets/logo/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <>
                <div className='fixed w-[95%] left-[50%] -translate-x-[50%] h-28 backdrop-blur-xl bg-gray-600/30 flex items-center justify-between px-5 mt-5 rounded-full'>
                    <div className='relative h-full'>
                        <img className='relative cursor-pointer  h-full' src={logo} alt="" />
                    </div>
                    <div className='relative flex justify-between items-center gap-8 text-green-300 text-xl ' >
                        <span className='trasition ease-in-out delay-100 hover:-translate-y-2 hover:text-2xl duration-300 cursor-pointer hover:underline'>Contact Us</span>
                        <span className='trasition ease-in-out delay-100 hover:-translate-y-2 hover:text-2xl duration-300 cursor-pointer hover:underline'>About Us</span>
                        <span className='trasition ease-in-out delay-100 hover:-translate-y-2 hover:text-2xl duration-300 cursor-pointer hover:underline'>Become Supplier</span>
                    </div>
                    <div className='reletive flex mx-5   gap-3 '>
                        <Link to='/login' className='text-xl bg-blue-400 px-8 items-center py-3  rounded-full  text-white transition ease-in-out delay-100 hover:text-blue-400  hover:bg-white hover:-translate-y-2  duration-300 '>Login</Link>
                        <Link to='/register' className='text-xl bg-green-500 px-8 items-center py-3  rounded-full text-white transition ease-in-out delay-100  hover:text-green-400  hover:bg-white hover:-translate-y-2 duration-300 '>Register</Link>
                    </div>
                </div>
        </>
    )
}

export default Navbar