import React, { useEffect, useRef, useState } from 'react'
import {hightlightsSlides} from "../constants"
import { pauseImg, playImg, replayImg } from '../utils'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);

export default function VideoCarousel() {
  const videoRef = useRef([]) 
  const videoSpanRef = useRef([]) 
  const videoDivRef = useRef([]) 
  const [video, setvideo] = useState({
    isEnd:false,
    startPlay:false,
    videoId:0,
    isLastVideo:false,
    isPlaying:false
  })



  const [loadedData, setloadedData] = useState([])
  const {isEnd, startPlay,videoId,isLastVideo,isPlaying} = video

  useGSAP(()=>{
    gsap.to('#slider',{
      transform:`translateX(${-100*videoId}%)`,
      duration:2,
      ease:"power2.inOut"
    })
    gsap.to("#video",{
      scrollTrigger:{
        trigger:'#video',
        toggleActions:'restart none none none'
      },
      onComplete:()=>{
        setvideo((pre)=>({
          ...pre,
          startPlay:true,
          isPlaying:true
        }))
      }
    })
  },[isEnd,videoId])

  const handleLoadeddata = (i,e)=>setloadedData((pre)=>[...pre,e])
  useEffect(() => {
    if(loadedData.length >3){
      if(!isPlaying){
        videoRef.current[videoId].pause()
      }else{
        startPlay && videoRef.current[videoId].play()
      }
    }
  }, [startPlay,videoId,isPlaying,loadedData])
  
  useEffect(() => {
   let  currentProgress =0;
   let span =videoSpanRef.current;

   if(span[videoId]){
    let anim = gsap.to(span[videoId],{
      onUpdate:()=>{
        const progress = Math.ceil(anim.progress()*100);
        if(progress!=currentProgress){
          currentProgress=progress;
          gsap.to(videoDivRef.current[videoId],{
            width:window.innerWidth<760? "10vw" :window.innerWidth<1200?"10vw":"4vw"
          })

          gsap.to(span[videoId],{
            width:`${currentProgress}%`,
            backgroundColor:"white",
          })
        }
      },
      onComplete:()=>{
        if(isPlaying){
          gsap.to(videoDivRef.current[videoId],{
            width:'12px'
          })
          gsap.to(span[videoId],{
            backgroundColor:'#afafaf'
          })
        }
      }
    })
    if(videoId ===0){
      anim.restart()
    }
    const animUpdate = () => {
      const videoElement = videoRef.current[videoId];
      const videoDuration = hightlightsSlides[videoId]?.videoDuration;
    
      if (videoElement && videoDuration) {
        const currentTime = videoElement.currentTime;
        const progress = currentTime / videoDuration;
    
        // Update the GSAP animation's progress
        anim.progress(progress);
      }
    };
    if(isPlaying){
     gsap.ticker.add(animUpdate)
    }else{
     gsap.ticker.remove(animUpdate)
    }
    }
  }, [videoId,startPlay])
  const handleProcess =(type,i)=>{
    switch(type){
      case "video-end":
        setvideo((prevVideo)=>({...prevVideo,isEnd:true,videoId:i+1}))
        break;
        case "video-last":
          setvideo((pre)=>({...pre,isLastVideo:true}))
        break;
        case "video-reset":
          setvideo((pre)=>({...pre,isLastVideo:false,videoId:0}))
        break;
        case "play":
          setvideo((pre)=>({...pre,isPlaying:!pre.isPlaying}))
          break;
        case "pause":
          setvideo((pre)=>({...pre,isPlaying:!pre.isPlaying}))
          break;
          default:
            return video;
    }
  }
  return (
    <>
     <div className='flex items-center'>
        {hightlightsSlides.map((list,i)=>(
            <div key={list.id} className='sm:pr-20 pr-10' id='slider'> 
            <div className='video-carousel_container'>
                <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                <video id='video' playsInline={true} preload='auto' muted ref={(el)=>(videoRef.current[i]=el)} 
                onPlay={()=>{setvideo((prevVideo)=>({...prevVideo,isPlaying:true}))}} 
                onLoadedMetadata={(e)=>handleLoadeddata(i,e)}
                onEnded={()=>
                  i!==3?handleProcess('video-end',i):handleProcess('video-last')
                }>
                <source src={list.video} type="video/mp4"/>
                </video>
                </div>
                <div className='absolute top-12 left-[5%] z-10'>
                  {list.textLists.map((text)=>(
                    <p key={text} className='md:text-2xl text-xl font-medium'>{text}</p>
                  ))}
                </div>
                </div>
                </div>
        ))}
        </div> 
        <div className='relarive flex-center mt-10'>
          <div className='flex-center rounded-full py-5 px-7 bg-gray-300 backdrop-blur'>
          {videoRef.current.map((_,i)=>(
            <span key={i} ref={(el)=>(videoDivRef.current[i]=el)} className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'>
              <span className='absolute h-full w-full rounded-full' ref={(el)=>(videoSpanRef.current[i]=el)}></span>
            </span>
          ))}
          </div>
            <button className='control-btn'>
              <img src={isLastVideo? replayImg:
                !isPlaying? playImg:pauseImg} onClick={isLastVideo?()=>handleProcess("video-reset"):
                   !isPlaying?()=>handleProcess("play"):
                   ()=>handleProcess("pause")} />
            </button>
        </div>
    </>
  )
}
