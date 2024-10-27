import React from 'react';
import img from '../public/assets/images/bg.jpg';
import Navbar from './components/Navbar';

export default function Store() {
  return (
    <section
    className="h-screen w-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${img})` }}
    >
        <div className='bg-black absolute w-full'>

    <Navbar />
        </div>
      <div className='bg-[#00000083] h-screen w-screen flex flex-col justify-center gap-8 items-center text-center p-4'>
            <h1 className='text-4xl'>Get 10% off your first order</h1>
            <h2>join oyr newsletter to recieve the lattest updates and promotions</h2>
            <input  className='w-[80%] max-w-[25rem] h-[2rem] bg-white rounded-lg outline-none px-3' placeholder='Enter your Email...'/>
      </div>
    </section>
  );
}
