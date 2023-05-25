import React from 'react'
import "./_video.scss"

import {AiFillEye} from 'react-icons/ai'

const Video=()=> {
  return (
    <div className='video'>
      <div className='video__top'>
        <img src="https://i.ytimg.com/vi/s2skans2dP4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUOcaO5GQwV8N0gGtT-Wtd6vE_BQ" alt=""/>
        <span>05:43</span>
      </div>
      <div className='video__title'>
        Learn React in 30 DAYS!!
      </div>
      <div className='video__details'>
        <span>
         <AiFillEye/> 2.1m Views • 
        </span>
        <span> 5 days ago</span>
      </div>
      <div className='video__channel'>
        <img src="https://yt3.ggpht.com/ytc/AGIKgqMc9groeAn4S4GzDo9NXd93oXu3UXVu5D9MsGbiUw=s68-c-k-c0x00ffffff-no-rj" alt="" />
        <p>Deep Bug Divers</p>
        
      </div>
    </div>
    
    
  )
}

export default Video