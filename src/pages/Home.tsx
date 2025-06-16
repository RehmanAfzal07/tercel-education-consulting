"use client";


import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";

const Home: React.FC = () => {
useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  const flags = [
    { src: "https://flagcdn.com/w80/gb.png", alt: "UK" },
    { src: "https://flagcdn.com/w80/us.png", alt: "USA" },
    { src: "https://flagcdn.com/w80/ca.png", alt: "Canada" },
    { src: "https://flagcdn.com/w80/au.png", alt: "Australia" },
    { src: "https://flagcdn.com/w80/eu.png", alt: "Eurpeion Union" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 text-center overflow-hidden bg-white">

   
       
      <h1
       data-aos="fade-up"
        className=" text-3xl sm:text-5xl md:text-5xl lg:text-7xl text-red-600 font-bold mb-4 z-10 leading-tight mt-10"
      >
   <span className="block text-slate-700 bg-[url('/images/background-image.svg')] bg-no-repeat bg-center bg-cover mt-10">
    Your Gateway to
  </span>
  DREAM Education

      </h1>
  

      {/* Paragraph */}
      <p data-aos="fade-up"
      className="text-base sm:text-lg font-light text-slate-600 max-w-md sm:max-w-xl mb-6 z-10">
     Fast, personalized guidance for students seeking admission to top universities in the UK, USA, Canada, Ireland, Australia, Europe </p>

      {/* CTA Section */}
<div className="relative z-10 flex flex-col items-center space-y-6">

  {/* Button */}
  <button
    data-aos="zoom-in"
    className="bg-slate-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-md sm:text-lg font-semibold hover:translate-y-1 transition-transform"
  >
    Start Your Journey
    <span className="ml-2 hover:text-xl hover:translate-x-1 inline-block transition-transform"> → </span>
  </button>

  {/* Upper Curve */}
  <svg
    viewBox="0 0 500 60"
    className="w-full -mt-10 -mb-3 "
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,0 Q250,110 500,0"
      fill="none"
      stroke="#d1d5db" 
      strokeWidth="1"
    />
  </svg>

  {/* Flags Section */}
  <div className="w-full px-4 sm:px-6 mt-2">
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
      <span className="md:text-3xl sm:text-2xl">☆</span>
      {flags.map((flag, index) => (
        <div
          key={flag.alt}
          className={`relative ${
            index === 0 || index === flags.length - 1
              ? "w-16 h-10 sm:w-20 sm:h-12"
              : "w-14 h-9 sm:w-16 sm:h-10"
          }`}
        >
          <Image
            src={flag.src}
            alt={flag.alt}
            fill
            sizes="(max-width: 768px) 64px, 80px"
            className="object-cover shadow-md rounded"
          />
        </div>
      ))}
      <span className="md:text-3xl sm:text-2xl">☆</span>
    </div>
  </div>

  {/* Lower Curve */}
  <svg
    viewBox="0 0 500 60"
    className="w-full -mt-5.5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0,50 Q250,-50 500,50"
      fill="none"
      stroke="#d1d5db"
      strokeWidth="1"
    />
  </svg>

  <div className="text-center -mt-10 ">
    <h4 className="bg-red-500 text-white p-1 font-bold">RUSSELL GROUP UNIVERSITIES</h4>
  </div>

</div>


      {/* Scroll Indicator */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="56"
        viewBox="0 0 40 64"
        fill="none"
        className=" z-10"
      >
        <rect
          x="1"
          y="1"
          width="38"
          height="62"
          rx="19"
          stroke="#ccc"
          strokeWidth="2"
        />
        <circle cx="20" cy="16" r="4" fill="#ccc">
          <animate
            attributeName="cy"
            values="16;22;16"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
       
    </div>
  );
};

export default Home;
