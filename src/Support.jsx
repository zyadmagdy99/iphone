import React from 'react'
import img from '../public/assets/images/images.jpeg'
import img2 from '../public/assets/images/download.jpg'
import img3 from '../public/assets/images/user1.jpg'
import img4 from '../public/assets/images/user2.jpg'
import img5 from '../public/assets/images/user3.jpg'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaBox } from "react-icons/fa";


import { GoTriangleRight } from "react-icons/go";
import { Link } from 'react-router-dom'

export default function Support() {
  return (
    <section className='p-3 md:px-20 flex flex-col justify-center'>
      <nav className='flex md:px-28 justify-between items-center'>
        <div className='flex gap-2 items-center'>  
            <div className='w-8'><img className='w-full' src={img} alt="" /></div>
            <Link to={"/"} className='font-semibold'>SUPPORTDESK</Link>
        </div>
        
        <div className='flex items-center gap-1'>
            <div className='flex items-center gap-1'>
                <div className='size-5 rounded-full bg-orange-500'></div>
                <p className='text-xs'>RESPOND</p>
            </div>
            <p> - </p>
            <div className='flex items-center gap-1'>
                <div className='size-5 rounded-full bg-white'></div>
                <p className='text-xs'>LEARN</p>
            </div>
        </div>
      </nav>
      <hr  className='mt-2'/>
      <div className='mt-3 flex md:text-3xl justify-between'>
        <div>
            <h1>EFFICIENT</h1>
            <p className='text-[#a09e9e] md:text-xl text-sm'>SUPPORT MANAGEMENT</p>
        </div>
        <div className='FLEX items-center'>
            <h1>..MANAGE 2X</h1>
            <p className='text-[#a09e9e] text-sm md:text-xl'>MORE TICKETS</p>
        </div>
      </div>
      <div className='flex gap-3 flex-wrap lg:pt-10 text-[40px] justify-center m-auto md:text-[60px] lg:text-[80px]  md:justify-center items-center my-10 text-center'>
        STREAMLINE <span className='w-[100px] h-[50px] lg:h-[80px] lg:w-[150px] bg-[#ffffff31] rounded-3xl flex justify-end items-center px-1'><div className='size-12 lg:size-[75px] '><img className='w-full rounded-full' src={img2} alt="" /></div></span><span className='text-[30px] lg:text-[80px] '>YOUR</span>  <div className='flex size-12 lg:size-28 lg:me-12'><img className='w-full rounded-full' src={img3} alt="" /><img className='w-full rounded-full translate-x-[-10px]' src={img5} alt="" /><img className='w-full rounded-full translate-x-[-20px]' src={img4} alt="" /></div> <span className='text-[30px] ms-10 lg:ms-20 lg:text-[80px]'>CUSTOMER</span>  <span></span> SUPPORT <span className='stroked-text'>24/7</span>
      </div>
      
      <footer className='flex absolute md:flex-row  bottom-3 flex-col w-full justify-center gap-5'>
        
        <div className='flex gap-2 items-center'>
        <GoTriangleRight />
        Faster Resolutions
        </div>
        <p className='hidden md:block'>|</p>
        <div className='flex items-center  gap-2'>
        <AiOutlineLoading3Quarters />
        Improved Perfomance
        </div>
        <p className='hidden md:block'>|</p>
        <div className='flex items-center  gap-2'>
        <FaBox />
        Enhanced Analytics
        </div>
      </footer>
    </section>
  )
}
