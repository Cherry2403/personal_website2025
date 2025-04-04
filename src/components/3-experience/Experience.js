import React from 'react'
import './experience.css';


function Experience() {
  return (
    <div className ="experience-container">
      <div className = "experience-grid">
        {/* Work Experience */}
        <div className = "experience-section">
          <h2 className = "section-title">Work Experience</h2>

          <div className = "experience-card">
            <h3 className = "experience-title">BACK-END DEVELOPER, TECH MANAGER || Ella</h3>
            <p3 className = "experience-date">02/2024 - 08/2024</p3>
            <p>Ella is a startup building a high-fashion rental platform. Throughout its journey, I was there until the end, giving my best and gaining the most. I successfully developed the e-commerce website from scratch.</p>
            <p className = "tech-stack">Tech stack: <span>NestJS | MongoDB | NextJS | Vercel</span></p>
            <p className="personal-skills">Personal advanced skills: <span>NestJS | MongoDB | RESTful APIs | Software Architecture | Teamwork and Management</span></p>
          </div>

          <div className = "experience-card">
            <h3 className = "experience-title">GAME DEVELOPER INTERN || GTV Vietnam Technology Joint Stock Company</h3>
            <p3 className = "experience-date">05/2022 - 12/2022</p3>
            <p>GTV is an online game production company. I got my first chance to have my hand on small projects of a company</p>
            <p className="personal-skills">Personal advanced skills: <span>Unity | C# | UI/UX design | Teamwork</span></p>
          </div>

        </div>

        {/* Project Experience */}
        <div className = "experience-section">
          <h2 className = "section-title">Project Experience</h2>

          <div className = "experience-card">
            <h3 className = "experience-title">FOUNDER | INDIVIDUAL DESIGNER  & DEVELOPER || HUST MAP</h3>
            <p3 className = "experience-date">09/2024 - Recent</p3>

            <p>HUST MAP is a campus navigation app for a university with around 40 buildings, designed to provide a platform that previously didn’t exist for students.
            </p>
            <p className = "mt-3">Key Features:</p>
            <ul className="list-[circle] pl-5 list-inside">
              <li>Rooms, Buildings search tool</li>
              <li>2D interactive map</li>
              <li>Rooms Find, Discover</li>
            </ul>

            <p className = "tech-stack">Tech stack: <span>NestJS | MySQL, SQLite | Flutter (Dart) | Figma | QGIS</span></p>
            <p className="personal-skills">Personal advanced skills: <span>Full-stack development | Database management | System Architecture | Geospatial mapping | UI/UX design</span></p>
          </div>

          <div className = "experience-card">
            <h3 className = "experience-title">FOUNDER | INDIVIDUAL DESIGNER  & DEVELOPER ||Plepleple</h3>
            <p3 className = "experience-date">08/2021 - 12/2021</p3>

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