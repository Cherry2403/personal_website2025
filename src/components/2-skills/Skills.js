"use client"
import React, { useState } from 'react'

const Skills = () => {
 

  return (

    <div id="skills" className = "relative w-full">

      <div className = "w-full bg-[#7E4116] py-13">
        <div className='drop-shadow-lg flex relative top-15 flex overflow-hidden text-[96px] font-semibold space-x-10'>
          <span className = "text-[#C9A163]">SKILLS</span>
          <span className = "text-[#4A3103]">SKILLS</span>
          <span className = "text-[#C9A163]">SKILLS</span>
          <span className = "text-[#4A3103]">SKILLS</span>
          <span className = "text-[#C9A163]">SKILLS</span>
        </div>
      </div>

      <div className='relative w-full h-screen overflow-hidden'>
        <img
          src="/skills/19.JPG"
          alt="Background"
          className="absolute w-full h-full object-cover"
        />
      </div>
      
    </div>

    
  )
}

export default Skills