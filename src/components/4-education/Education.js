import React from 'react'
import './education.css';

function Education() {
  return (
    <div className='education_grid'>

      <div className = ' edu_section'>
        <div className="dark_bg"> 
          <div className = 'edu_title'>EDUCATION</div>
        </div>
        <div className="light_bg"> 
          <img src = "/edu.gif" alt = "Education GIF" className='education_gif'/>
          </div>
          
      </div>

      <div className = 'courses_section'>
        <div className="dark_bg"> 
          <div className = 'course_title'>Significant Coursework</div>
        </div>

        <div className="light_bg"> 
          <ul className = "courses_list">
            <li>Data Structures and Algorithms</li>
            <li>Computer Organization</li>
            <li>Web Technology</li>
            <li>Pervasive Computing</li>
            <li>Computer Networks</li>
            <li>Statistical Methods</li>
            <li>Operating Systems</li>
            <li>OOFP</li>
            <li>Software Design</li>
            <li>Requirement Engineering</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Education