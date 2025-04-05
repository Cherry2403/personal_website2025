"use client"
import React, { useEffect, useState } from 'react';
import Intro from '../1-intro/Intro';
import Skills from '../2-skills/Skills';
import './isparent.css';

const ISParent = () => {
  //const [yOffset, setYOffset] = useState(0);
  const [dishTop, setDishTop] = useState("40%"); // Initial position
  const [dishScale, setDishScale] = useState(0.5); // Initial scale
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      //setYOffset(scrollY);

      const introTop = document.getElementById("intro").offsetTop;
      const skillsElement = document.getElementById("skills");
      const skillsTop = skillsElement.offsetTop;
      const skillsHeight = skillsElement.offsetHeight;
      //const skillsCenter = skillsTop + (skillsHeight);
      

      const totalTravel = skillsTop - introTop; // Distance to travel

      // Normalize scroll to 0 → 1 range
      const progress = Math.min(1, scrollY / totalTravel);
  
      setDishTop(`${40 + progress * 145}%`); // Moves from 40% to 70%
      setDishScale(0.5 + progress * 1.75); // Grows from 0.5x to 2x

      if (progress === 1) {
        setShowContent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Intro />
      <Skills />
      <div 
        className="dish relative" 
        style={{
          position: "absolute",
          top: dishTop,
          left: "50%",
          transform: `translate(-50%, 0%) scale(${dishScale})`,
          transition: "top 0.1s linear",
          zIndex: 97,
          
        }}
      >
        <img src="/dish.png" alt="Dish" />
        {showContent && (
          <div className="dish_content_container">

            <p> <span className="experience_title">Backend development:</span> <br/> NestJS (NodeJS, TypeScript) | Software Architecture(UML) | RESTful APIs </p>
            <p> <span className="experience_title">Frontend development:</span> <br/> Dart | JavaScript | HTML | CSS | NextJS (React, TypeScript) </p>
            <p> <span className="experience_title">Database:</span> <br/> MongoDB | MySQL | SQLite </p>
            <p> <span className="experience_title">Others:</span> <br/> C | C++ | Python | UI/UX design | C# | Scala | Java | Git</p>
            <p> <span className="experience_title">Soft skills:</span> <br/> Project management(Agile) | Communication | Adaptability | Open-minded </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default ISParent;
