"use client";

import React, { useEffect, useState } from 'react'
import './experience.css';


function Experience() {
  const [uniqueVisitors, setUniqueVisitors] = useState(0);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const response = await fetch("/api/analytics");
        if (response.ok) {
          const data = await response.json();
          console.log("API response data:", data);
          setUniqueVisitors(data.uniqueVisitors); 
          console.log("Unique Visitors (Last 24 Hours):", uniqueVisitors);
        } else {
          console.error("Failed to fetch analytics data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching analytics data:", error);
      }
    };

    fetchAnalyticsData();
  },[]

  );
  return (
    <div className ="experience-container">
      <div className = "experience-grid">
        {/* Work Experience */}
        <div className = "experience-section">
          <h2 className = "section-title">Work Experience</h2>

          <div className = "experience-card">
            <h3 className = "experience-title">SOFTWARE ENGINEER INTERN ||<a href="https://www.vanlanschotkempen.com/en-nl" target="_blank" rel="noopener noreferrer" className="hover:underline"> Van Lanschot Kempen</a>
            </h3>
            <div className = "experience-date">02/2026 - 07/2026</div>
            <p>Van Lanschot Kempen is the <span className='underline'>oldest independent financial institution in the Netherlands</span>, operating as a specialized wealth manager since 1737. I worked as a full-stack developer in the Digital Innovation & Analytics (DIA) department.</p>
            <ul className="list-[circle] pl-5 list-inside mt-3">
              <li><span className="font-semibold">Horizon team</span>: built features on an internal application bankers use to work with clients, alongside senior developers. Handled a data migration and extended an already-scaled system, back-end and front-end.</li>
              <li className="mt-2"><span className="font-semibold">Copilot Usage Web</span>: an internal AI-cost analytics dashboard used across 9 departments by about 150 tech employees daily. I built the cost analytics side of the application, and designed and built its deployment infrastructure from scratch: CI/CD pipelines for frontend and backend, container security scanning, and a fully network-isolated Azure deployment.</li>
            </ul>
            <p className = "tech-stack">Tech stack: <span>Angular 20 | .NET 9 | C# | SQL Server | Azure DevOps | Azure Container Apps | Bicep | Docker</span></p>
            <p className="personal-skills">Personal advanced skills: <span>Full-stack development | CI/CD & DevSecOps | Azure cloud infrastructure | Data modeling & migration | Scalable system design | Teamwork</span></p>
          </div>

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
        
        <div className = "experience-section">
          <h2 className = "section-title">Project Experience</h2>

          <div>
            <div className="flex flex-row text-[12px] md:text-[15px] ">

              <button
                onClick={() => window.open("https://hackstreetgirl-hack4her2026.vercel.app/", "_blank")}
                className="font-bold z-4 view-web-button bg-white rounded-tl-[10px] rounded-tr-[60px] pl-[5px] pr-[15px] md:py-[5px] md:pl-[10px] md:pr-[30px] hover:bg-[#f0f0f0] transition-all duration-300 transform hover:scale-102 shadow-lg"
              >
                View website
              </button>

              <div className="bg-yellow-400 z-3 ml-[-20px] text-black font-bold rounded-tl-[10px] rounded-tr-[60px] flex items-center justify-center pl-[20px] pr-[20px] sm:pl-[30px] md:pr-[30px] shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                1st Place
              </div>
            </div>

            <div className = "experience-card-custom bg-[#FDFFF5]/58 p-6 rounded-b-lg rounded-tr-lg shadow-lg text-black text-[18px] border border-[#A36A3D] font-light backdrop-blur-md">
              <h3 className = "experience-title">WINNER, bol.com CHALLENGE ||
                <a href="https://hack4her.org/" target="_blank" rel="noopener noreferrer" className="hover:underline"> Hack4Her 2026</a>
              </h3>
              <div className = "experience-date">07/2026</div>

              <p>A 2-day hackathon build with a team of 4 developers, where I was the <span className="font-semibold">main developer and product designer</span>. The bol challenge: put the environmental cost next to the price tag, so shoppers see the full picture in one glance.</p>

              <p className = "mt-3">Key Features:</p>
              <ul className="list-[circle] pl-5 list-inside">
                <li>Rebuilt bol.com storefront with sustainability smartly integrated in the shopping flow</li>
                <li>Sustainability score, CO₂ footprint & repairability per product</li>
                <li>Side-by-side eco-impact comparison</li>
                <li>&quot;Future-friendly pick&quot; surfacing + sort by sustainability</li>
              </ul>

              <p className = "tech-stack">Tech stack: <span>Next.js | Tailwind CSS | Vercel</span></p>
              <p className="personal-skills">Personal advanced skills: <span>Rapid prototyping | Critical Product Design | Business Analysis </span></p>
            </div>
          </div>

          <div>
            <div className="flex flex-row text-[12px] md:text-[15px] ">

              <button
                onClick={() => window.open("https://hustmap.com/", "_blank")}
                className="font-bold z-4 view-web-button bg-white rounded-tl-[10px] rounded-tr-[60px] pl-[5px] pr-[15px] md:py-[5px] md:pl-[10px] md:pr-[30px] hover:bg-[#f0f0f0] transition-all duration-300 transform hover:scale-102 shadow-lg"
              >
                View website
              </button>

              <div className="bg-yellow-400 z-3 ml-[-20px] text-black font-bold rounded-tl-[10px] rounded-tr-[60px]  flex items-center justify-center pl-[20px] pr-[20px] sm:pl-[30px] md:pr-[30px] shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                {uniqueVisitors} Visitors (last 24 hours)*
              </div>
            </div>
            
            <div className = "experience-card-custom bg-[#FDFFF5]/58 p-6 rounded-b-lg rounded-tr-lg shadow-lg text-black text-[18px] border border-[#A36A3D] font-light backdrop-blur-md">
              <h3 className = "experience-title">FOUNDER & DESIGNER & DEVELOPER ||
                <a href="https://hustmap.com/" target="_blank" rel="noopener noreferrer" className="hover:underline"> HUSTMAP.com</a>
              </h3>
              <div className = "experience-date">09/2024 - Recent</div>

              <p>HUSTMAP.com is a map for university students, it attract 500-1500 users on daily basis. It navigate, process 60+ buildings and 1000+ rooms </p>
              <p className = "mt-3">Key Features:</p>
              <ul className="list-[circle] pl-5 list-inside">
                <li>Rooms, Buildings search</li>
                <li>2D interactive map</li>
                <li>Live location track</li>
              </ul>

              <p className = "tech-stack">Tech stack: <span>NestJS | MySQL | Next.js | Figma | QGIS | Google Analytics | Cloudflare</span></p>
              <p className="personal-skills">Personal advanced skills: <span>Full-stack development | Database & cache management | System Architecture | Geospatial mapping | UI/UX design</span></p>
              <div className='text-[13px] sm:text-[15px] mt-[20px] font-medium'>* LIVE TRACK BY Cloudflare</div> 
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