import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';

export default function Highlights() {
useGSAP(()=>{
  gsap.to("#title",{opacity:1,y:0})
  gsap.to(".link",{opacity:1,y:0,duration:1,stagger:.25})
},[])


  return (
   <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
    <div className='screen-max-width'>
    <div className='mb-12 md:flex w-full items-end justify-between'>
      <h1 id='title' className='section-heading'> Get the highlights.</h1>
      <div className='flex flex-wrap items-end gap-5'>
        <p className='link'>
          watch the film
          <img src={watchImg} className='ml-2' alt="" />
        </p>
        <p className='link'>
          watch the event
          <img src={rightImg} className='ml-2' alt="" />
        </p>
      </div>
    </div>
    <VideoCarousel />
    </div>

   </section>
  )
}


