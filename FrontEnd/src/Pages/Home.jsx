import React from 'react'
import Navbar from '../Components/Navbar'
import { IoIosArrowDown } from "react-icons/io";
import { GrSearch } from "react-icons/gr";
import TurfBox from '../Components/TurfBox';
import { BsArrowRight } from "react-icons/bs";



const Home = () => {
  return (
    <>
      {/* <div className='h-screen w-full ' >
    <Navbar/>
    <img className='h-screen w-full' src="https://images.unsplash.com/photo-1713815713124-362af0201f3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
   </div> */}
      <div
        className="flex flex-col justify-start items-center h-screen shadow-2xl"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1713815713124-362af0201f3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', // replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Navbar />
        {/* Body */}
        <div className='flex flex-col items-center justify-center mt-52 gap-16'>
          <h2 className='text-center text-5xl text-white font-bold uppercase'>Best Turf Booking Platform <br /> in your Area</h2>
          <h3 className='text-center text-lg text-white'>You can choose from variety of sports , such as cricket, Football , Badminton , tennis and more <br /> and book your preferred time slot and location</h3>
          <div className='h-24 w-[50vw] rounded-md bg-white shadow-lg flex items-center justify-evenly'>
            <div className='flex flex-col items-start justify-center gap-1 p-1'>
              <h1 className='font-bold'>Type</h1>
              <h2 className='flex items-center gap-1'>Football <IoIosArrowDown /></h2>
            </div>
            <div className='flex flex-col items-start justify-center gap-1 p-1'>
              <h1 className='font-bold'>Location</h1>
              <h2 className='flex items-center gap-1'>Bhopal <IoIosArrowDown /></h2>
            </div>
            <div className='flex flex-col items-start justify-center gap-1 p-1'>
              <h1 className='font-bold'>Date</h1>
              <h2 className='flex items-center gap-1'>24-4-12 <IoIosArrowDown /></h2>
            </div>
            <div className='flex flex-col items-start justify-center gap-1 p-1'>
              <h1 className='font-bold'>Price</h1>
              <h2 className='flex items-center gap-1'>1k <IoIosArrowDown /></h2>
            </div>
            <div className='flex items-center justify-center bg-green-700 p-4 rounded-md'>
              <GrSearch className='text-white' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-start bg-white px-32 py-12'>
        <div className='flex justify-between items-center w-full px-14'>
          <h1>Expolre Best Turfs Near You</h1>
          <div className='flex justify-between items-center gap-2 :hover cursor-pointer'>
            <h5>See all</h5>
            < BsArrowRight  className='text-center' />
          </div>
        </div>

        <div className='flex flex-wrap '>
          <div className='w-1/3 flex justify-center py-4 '>
            <TurfBox title='Turf 1' />
          </div>
          <div className='w-1/3 flex justify-center py-4 '>
            <TurfBox title='Turf 1' />
          </div> <div className='w-1/3 flex justify-center py-4 '>
            <TurfBox title='Turf 1' />
          </div> <div className='w-1/3 flex justify-center py-4 '>
            <TurfBox title='Turf 1' />
          </div> <div className='w-1/3 flex justify-center py-4 '>
            <TurfBox title='Turf 1' />
          </div> <div className='w-1/3 flex justify-center py-4 '>
            <TurfBox title='Turf 1' />
          </div>

        </div>
      </div>


    </>
  )
}

export default Home