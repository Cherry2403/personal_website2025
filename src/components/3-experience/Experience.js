"use client";

import React, { useEffect } from 'react'
import './experience.css';


function Experience() {
  const [uniqueVisitors, setUniqueVisitors] = useState(0);

  useEffect(() => {
    
  },[]

  );
  return (
    <div className ="experience-container">
      <div className = "experience-grid">
        {/* Work Experience */}
        <div className = "experience-section">
          <h2 className = "section-title">Work Experience</h2>

          <div className = "experience-card">
            <h3 className = "experience-title">BACK-END DEVELOPER & TECH MANAGER ||<a href="https://www.linkedin.com/company/ellaeverydayandluxury/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:underline"> Ella</a>
            </h3>
            <div className = "experience-date">02/2024 - 08/2024</div>
            <p>Ella was a <span className='underline'>high-fashion rental platform startup</span>. Me and the dev team developed an e-commerce website from scratch.</p>
            <p className = "tech-stack">Tech stack: <span>NestJS | MongoDB | Next.js</span></p>
            <p className="personal-skills">Personal advanced skills: <span>NestJS | MongoDB | RESTful APIs | Software Architecture | Teamwork and Management</span></p>
          </div>

          <div className = "experience-card">
            <h3 className = "experience-title">GAME DEVELOPER INTERN ||<a href="https://gtv.com.vn/" target="_blank" rel="noopener noreferrer" className="hover:underline"> GTV Vietnam Technology Joint Stock Company</a></h3>
            <div className = "experience-date">05/2022 - 12/2022</div>
            <p>GTV is a <span className='underline'>top leading online game production</span> company in Vietnam. I got my hand on small projects during the internship</p>
            <p className="personal-skills">Personal advanced skills: <span>Unity | C# | UI/UX design | Teamwork</span></p>
          </div>

        </div>

        {/* Project Experience */}
        
        <div className = "experience-section">
          <h2 className = "section-title">Project Experience</h2>

          <div>
            <button 
              onClick={() => window.open("https://hustmap.com/", "_blank")}
              className = "view-web-button bg-white rounded-tl-[10px] rounded-tr-[60px] p-[10px] px-[25px] pr-[30px] hover:bg-[#f0f0f0] transition-all duration-300 transform hover:scale-105 shadow-lg">
              View website
            </button>
            <div className = "experience-card ">
              <h3 className = "experience-title">FOUNDER & DESIGNER & DEVELOPER ||
                <a href="https://hustmap.com/" target="_blank" rel="noopener noreferrer" className="hover:underline"> HUSTMAP.com</a>
              </h3>
              <div className = "experience-date">09/2024 - Recent</div>

              <p>HUSTMAP.com attract 700+ user on its first day. It navigate, process 60+ buildings and 1000+ rooms </p>
              <p className = "mt-3">Key Features:</p>
              <ul className="list-[circle] pl-5 list-inside">
                <li>Rooms, Buildings search</li>
                <li>2D interactive map</li>
                <li>Live location track</li>
              </ul>

              <p className = "tech-stack">Tech stack: <span>NestJS | MySQL | Next.js | Figma | QGIS | Google Analytics | Cloudflare</span></p>
              <p className="personal-skills">Personal advanced skills: <span>Full-stack development | Database & cache management | System Architecture | Geospatial mapping | UI/UX design</span></p>
            </div>
          </div>
          
          <div className = "experience-card">
            <h3 className = "experience-title">FOUNDER & DESIGNER & DEVELOPER ||<a href="https://simmer.io/@DiepPeez/plepleple" target="_blank" rel="noopener noreferrer" className="hover:underline"> Plepleple</a></h3>
            <div className = "experience-date">08/2021 - 12/2021</div>

            <p>Plepleple is the first video game I created independently using Unity after learn game coding from YouTube videos. Plepleple’s inspiration came from simple, successful games like Flappy Bird and Mario.
            </p>
            <p className = "mt-3">Key Features:</p>
            <ul className="list-[circle] pl-5 list-inside">
              <li>Jump | Shooting</li>
              <li>Different levels and theme</li>
            </ul>

            <p className="tech-stack">Tech stack: <span>Unity | C#</span></p>
            <p className="personal-skills">Personal advanced skills: <span>Game Design | Level Design | Animation</span></p>
          </div>
          
          

        </div>

      </div>
       
    </div>

  )
}

export default Experience