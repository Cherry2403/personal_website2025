"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Intro = () => {

  const [showSecondText, setSecondText] = useState(false);
  const [thirdText, setThirdText] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const fullText = "  What do I bring to the table today";


  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden"; 

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if(!imageLoaded) return;
    const secondTextTimeout = setTimeout(() => setSecondText(true), 1000);
  
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
    }, 1000);

  
  
    return () => {
      clearTimeout(secondTextTimeout);
      clearTimeout(thirdTextTimeout);
      document.body.style.overflow = "auto";
    };
  }, [imageLoaded]);

  return (
    <>
      {!imageLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#C16226] z-[9999]">
          <span className="text-white text-[30px] sm:text-[50px] font-bold animate-pulse">Hi, nice to meet you</span>
        </div>
      )}
      <div 
        id = "intro"className = "h-screen flex flex-col items-center text-white relative">
        <Image
          src="/intro/15.JPG"
          alt="Background"
          width={1920}
          height={1080}
          className="bg-cover absolute w-full h-full object-cover"
          onLoad={() => {
            console.log("Image loaded!");
            setImageLoaded(true);
          }}
          priority
        />

        
        <div className="absolute top-[10%] text-center text-white">
          <h1 className="text-5xl font-bold text-outline">Hi, my name is Diep (Stella)</h1>
          {/*{showSecondText && (
          <p className = "mt-5 top-[25%] text-center text-2xl font-light text-white">a software engineer</p>
        )}*/}
        </div>

        <h2 className="absolute right-[5vw] top-[70vh] sm:right-[10vw] sm:top-[50vh] text-stroke-black text-stroke-2 text-[30px] sm:text-[37px] md:text-[45px] max-w-[600px] 
          rotate-[-3.7deg] text-outline text-right break-words font-bold text-white opacity-85 z-[99]">{thirdText}
        </h2>

        <div className = "techstack_container absolute opacity-85 text-outline left-[20px] bottom-[20px] text-left md:text-[18px] text-[15px] text-white font-medium z-[100]">
          <div className = "title font-bold">Tech stack</div>
          <p>Framework: Next.js</p>
          <p>Language: JavaScript</p>
          <p>Hosting: Cloudflare | Nginx Proxy Manager | Proxmox | Docker</p>
        </div>

      </div>
    </>
    
  );
};

export default Intro