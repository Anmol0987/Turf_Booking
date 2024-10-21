import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <>
   <div className='h-screen w-full ' >
    <Navbar/>
    <img className='h-screen w-full' src="https://images.unsplash.com/photo-1713815713124-362af0201f3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
   </div>
    </>
  )
}

export default Home