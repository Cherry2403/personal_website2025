"use client"
import React, { useEffect, useState } from 'react'

const Intro = () => {

  const [showSecondText, setSecondText] = useState(false);
  const [thirdText, setThirdText] = useState("");
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
        src="/intro/15.JPG"
        alt="Background"
        className="bg-cover absolute w-full h-full object-cover"
      />

      
      <div className="absolute top-[10%] text-center text-white">
        <h1 className="text-5xl font-bold">Hi, I am Diep</h1>
        <p className="text-2xl text-white font-light">you can call me <span className="font-bold text-5xl">Cherry</span></p>
        {showSecondText && (
        <p className = "mt-5 top-[25%] text-center text-2xl font-light text-white">a software engineer</p>
      )}
      </div>

      <h2 className="absolute right-25 top-[45%] text-[30px] sm:text-[37px] md:text-[45px] max-w-[600px] 
        rotate-[-3.7deg] text-right break-words font-bold text-white opacity-85 z-[99] mt-20">{thirdText}
      </h2>

      <div className = "techstack_container absolute opacity-85 left-[20px] bottom-[20px] text-left md:text-[18px] text-[15px] text-white font-medium z-[100]">
        <div className = "title font-bold">Tech stack</div>
        <p>Framework: Next.js</p>
        <p>Language: JavaScript</p>
        <p>Hosting: Cloudflare | Nginx Proxy Manager | Proxmox | Docker</p>
      </div>

    </div>
  );
};

export default Intro