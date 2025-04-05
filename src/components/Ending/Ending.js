import React from 'react'
import './ending.css';

function Ending() {
  return (
    <div className='relative w-full min-h-screen bg-gradient-to-b from-[#BF621E] to-[#FF9A50] -mt-[30px]'>
      <div className = 'ending_container'>
        <div className = 'quote_container'>
          <div className = 'quote1'>
            <p className = "quote1.1">There’s no perfect moment, now is the moment</p>
            <p className = "quote1_2">Jump in, take the risk and figure it out as you go.</p>
          </div>

      
        </div>
        
        <div className = 'contact_container'>
          <div className = 'contact_col1'>
            <p><a href="https://www.linkedin.com/in/ngoc-diep-pham-cherry/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/Cherry2403" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            <p><a href="https://leetcode.com/u/Cherry_Pham/" target="_blank" rel="noopener noreferrer">Leetcode</a></p>

          </div>
          <div className = 'contact_col2'>
            <p><a href="tel:+31647767985">+31 647767985</a></p>
            <p><a href="mailto:dieppn05@gmail.com">dieppn05@gmail.com</a></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Ending