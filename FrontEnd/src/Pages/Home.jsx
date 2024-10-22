import React from 'react'
import Navbar from '../Components/Navbar'
import { IoIosArrowDown } from "react-icons/io";
import { GrSearch } from "react-icons/gr";
import TurfBox from '../Components/TurfBox';
import { BsArrowRight } from "react-icons/bs";
import TurfCategory from '../Components/TurfCategory';


import Footer from '../Components/Footer';
import { useInView } from 'react-intersection-observer';
import { easeIn, easeInOut, motion } from 'framer-motion';

const Home = () => {
  // Array of turf boxes data
  const turfBoxes = ['Turf 1', 'Turf 2', 'Turf 3', 'Turf 4', 'Turf 5', 'Turf 6'];

  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 20% of the boxes are in view
  });

  const animationVariants = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 1, x: 0 },
  };

  
  return (
    <>

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
       
        <div className='flex flex-col h-full items-center justify-center  gap-16'>
          <h2 className='text-center text-6xl text-white font-bold uppercase'>Best Turf Booking Platform <br /> in your Area</h2>
          <h3 className='text-center text-lg text-white'>You can choose from variety of sports , such as cricket, Football , Badminton , tennis and more <br /> and book your preferred time slot and location</h3>
          <div className='h-24 w-[50vw] rounded-lg bg-white shadow-lg flex items-center justify-evenly'>
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
      <div className='w-full flex flex-col items-start bg-white px-32 py-16'>
        <div className='flex justify-between items-center w-full px-14 py-5 '>
          <h1>Expolre Best Turfs Near You</h1>
          <div className='flex justify-between items-center gap-2 :hover cursor-pointer'>
            <h5>See all</h5>
            < BsArrowRight className='text-center' />
          </div>
        </div>

        <div className='flex flex-wrap '>
          {/* <motion.div 
            className='w-1/3 flex justify-center py-4 '
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
          >
            <TurfBox title='Turf 1' />
          </motion.div> */}
          {turfBoxes.map((title, index) => (
          <motion.div
            key={index}
            ref={ref}
            className="w-1/3 flex justify-center py-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{
              duration: 0.4,
              delay: index * 0.05, // Stagger the boxes by 0.3 seconds
              ease: easeInOut
            }}
          >
            <TurfBox title={title} />
          </motion.div>
        ))}
         

        </div>
      </div>
      <div className='flex justify-center items-center gap-5 py-28'> 
        <TurfCategory/>
      </div>
      <Footer/>
      
    </>
  )
}

export default Home