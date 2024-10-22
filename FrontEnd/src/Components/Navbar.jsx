import React from 'react'

import { useSetRecoilState } from 'recoil'
import isSignUp from '../atoms/IsSignup'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";





const Navbar = () => {
    const setSignUp=useSetRecoilState(isSignUp)

    const handleButton = () => {
        setSignUp(true)
        window.location.href = '/login'
    }

    return (
        <>
                <div className='fixed w-[100vw] left-[50%] -translate-x-[50%] h-28 backdrop-blur-xl bg-gray-300/10 flex items-center justify-between px-5 '>
                    <div className='flex items-center justify-center'> 
                        <h1 className='text-[3vw]  mt-5 font-bold text-center text-white mb-8'>Turf!t</h1>
                    </div>
                    <div className='flex items-center justify-center gap-10 text-white '>
                        <button className='flex items-center gap-1'>Turf List <IoIosArrowDown/></button>
                        <Link>About us</Link>
                        <button className='border-white border-2 py-2 px-3 rounded-md'>List your Turf </button>
                        <button onClick={handleButton} className='text-lg relative bg-white  px-8 items-center py-3  rounded-full  text-black transition ease-in-out delay-100 hover:text-blue-400  hover:bg-white hover:-translate-y-2  duration-300 '>Login/Register</button>

                    </div>
                   
                </div>
        </>
    )
}

export default Navbar