"use client"
import React, { useEffect, useState } from 'react';
import Intro from '../1-intro/Intro';
import Skills from '../2-skills/Skills';
import './isparent.css';

const ISParent = () => {

  const [dishFinal, setDishFinal] = useState(145);
  const [baseDishTop, setBaseDishTop] = useState(47);
  const [dishTop, setDishTop] = useState("43vh%"); // Initial position
  const [dishScale, setDishScale] = useState(0.5); // Initial scale
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    const initialTop = width < 768 ? 50 : 43;
    const dishFinalSize = width < 768 ? 100 : 145;
    setDishFinal(dishFinalSize);
    setBaseDishTop(initialTop);
    setDishTop(`${initialTop}vh`);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const introTop = document.getElementById("intro").offsetTop;
      const skillsElement = document.getElementById("skills");
      const skillsTop = skillsElement.offsetTop;
      

      const totalTravel = skillsTop - introTop;
      const progress = Math.min(1, scrollY / totalTravel);
      
      const initialTop = window.innerWidth < 768 ? 50 : 43;
      const finalTop = 190;
      const currentTop = initialTop + (finalTop - initialTop) * progress;

      setDishTop(`${currentTop}vh`);
      setDishScale(0.5 + progress * 1.75);
      
      if (progress === 1) {
        setShowContent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" bg-[#7E4116] relative overflow-x-hidden sm:overflow-visible">
      <Intro/>
      <Skills/>
      <div 
        className="dish relative z-103" 
        style={{
          position: "absolute",
          top: dishTop,
          left: "50%",
          maxWidth: "100vw",
          transform: `translate(-50%, 0%) scale(${dishScale})`,
          transition: "top 0.1s linear",
          zIndex: 97,
          
        }}
      >
        <img src="/dish.png" alt="Dish" />
        {showContent && (
          <div className="dish_content_container">
            <p> <span className="experience_title">Backend development:</span> <br/> NestJS (NodeJS, TypeScript) | Software Architecture(UML) | RESTful APIs </p>
            <p> <span className="experience_title">Frontend development:</span> <br/> JavaScript | HTML | CSS | Next.js (React, TypeScript) </p>
            <p> <span className="experience_title">Deployment & Hosting & Optimize:</span> <br/> Docker | Cloudflare | Google Analytics | CI/CD pipelines | Cache management(Redis)</p>
            <p> <span className="experience_title">Others:</span> <br/> C | C++ | Python | UI/UX design | C# | Scala | Java | Git | Project management(Agile)</p>
            <p> <span className="experience_title">Database:</span> <br/> MongoDB | MySQL | SQLite </p>
            {/* <p> <span className="experience_title">Soft skills:</span> <br/> Project management(Agile) | Communication | Adaptability | Open-minded </p> */}
          </div>
        )}

      </div>
    </div>
  );
};

export default ISParent;
