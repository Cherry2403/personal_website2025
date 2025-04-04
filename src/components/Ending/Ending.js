import React from 'react'
import './ending.css';

function Ending() {
  return (
    <div className='relative w-full min-h-screen bg-gradient-to-b from-[#BF621E] to-[#FF9A50] -mt-[30px]'>
      <div className = 'ending_container'>
        <div className = 'quote_container'>
          <div className = 'quote1'>
            <p className = "quote1.1">quote1.1</p>
            <p className = "quote1.2">quote1.2</p>
          </div>

        <p className = "quote2">quote2</p>
        </div>
        
        <div className = 'contact_container'>
          <div className = 'contact_col1'>
            <p>LinkedIn</p>
            <p>GitHub</p>
            <p>Leetcode</p>

          </div>
          <div className = 'contact_col2'>
            <p>+31 647.767.985</p>
            <p>dieppn05@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Ending