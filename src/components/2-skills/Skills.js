"use client"
import React, { useState } from 'react'

const Skills = () => {
 

  return (

    <div id="skills" className = "relative w-full">
      {/* Dish in Skills */}
      

      <div className = "w-full bg-[#7E4116] py-13">
        <div className='drop-shadow-lg flex relative top-15 flex overflow-hidden'>
          <span className = "text-[96px] font-semibold text-[#C9A163] mr-[57px]">SKILLS</span>
          <span className = "text-[96px] font-semibold text-[#4A3103] mr-[57px]">SKILLS</span>
          <span className = "text-[96px] font-semibold text-[#C9A163] mr-[57px]">SKILLS</span>
          <span className = "text-[96px] font-semibold text-[#4A3103] mr-[57px]">SKILLS</span>
          <span className = "text-[96px] font-semibold text-[#C9A163] mr-[57px]">SKILLS</span>
        </div>
      </div>

      <div className='relative w-full h-screen overflow-hidden'>
        <img
          src="/skills/5.jpeg"
          alt="Background"
          className="absolute w-full h-full object-cover"
        />
      </div>
      
    </div>

    
  )
}

export default Skills