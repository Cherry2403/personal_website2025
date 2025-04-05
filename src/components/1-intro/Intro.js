"use client"
import React, { useEffect, useState } from 'react'

const Intro = () => {
  //firstText show normally
  // second pop out after a few sec
  // third one by one using useState
  
  // state used
  const [showSecondText, setSecondText] = useState(false);
  const [thirdText, setThirdText] = useState(""); // Fix the typo!
  const fullText = " What do I bring to the table today";


  useEffect(() => {
    const secondTextTimeout = setTimeout(() => setSecondText(true), 1000);
    document.body.style.overflow = "hidden";
  
    const thirdTextTimeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index < fullText.length - 1) {
          setThirdText((prev) => (prev || "") + fullText[index]);
          index++;
          
          if (index === fullText.length - 1) {
            document.body.style.overflow = "auto";
          }
          
        } else {
          clearInterval(interval);
        }
      }, 60);
    }, 2000);

  
  
    return () => {
      clearTimeout(secondTextTimeout);
      clearTimeout(thirdTextTimeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div 
      id = "intro"className = "h-screen flex flex-col items-center text-white relative">
      <img
        src="/introdraftpic.jpg"
        alt="Background"
        className="bg-cover absolute w-full h-full object-cover"
      />

      
      <div className="absolute top-[10%] text-center text-white">
        <h1 className="text-5xl font-bold">Hi, I am Diep</h1>
        <p className="text-2xl text-white font-light">you can call me <span className="font-bold text-5xl">Cherry</span></p>
      </div>

      
      {showSecondText && (
        <p className = "absolute top-[25%] text-center text-2xl font-light text-white">a software engineer</p>
      )}

      <h2 
        className="absolute right-25 top-[45%] text-6xl max-w-[700px] 
                  rotate-[-3.7deg] text-right break-words 
                  font-light text-white opacity-85 z-[999]"
      >
        {thirdText}
      </h2>

    </div>
  );
};

export default Intro