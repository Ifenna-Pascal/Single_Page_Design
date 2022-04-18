import React from "react";
import { animateScroll as scroll } from "react-scroll";

function Hero() {
  return (
    <div className="md:max-w-[70%] max-w-[95%]  mx-auto h-[36rem] py-8 items-center grid grid-cols-1 lg:grid-cols-2">
      <div className="flex md:justify-start justify-center md:items-start md:justify-start items-center flex-col space-y-4">
        <span className="font-Poppins  text-lg text-[#474C55]">
          Hi! I am <span className="text-[#fa6767] text-lg">Monanu_Ifenna</span>{" "}
          and
        </span>
        <h1 className="text-[#1A202C] font-bold text-center font-Poppins text-4xl">
          I&apos;ll Help You Build Your Dream
        </h1>
        <span className="text-gray-400 md:text-left text-center text-lg">
          I am a MERN stack software engineer passionate about building and
          implementing designs creating API&apos;s to power designs. My designs
          cuts across web2 and web3 technologies. My tech stack include{" "} <br></br>
          <span className="font-bold">React</span>{" "}
          <span className="font-bold">Mongoose </span> 
          <span className="font-bold">NextJS </span> 
          <span className="font-bold">Redux-toolkit </span> 
          <span className="font-bold">Solidity </span> 
          <span className="font-bold">Ethersjs</span>
        </span>
        <span className="flex items-center space-x-4">
          <span
            className="text-[#fa6767] border-b-2 pb-2 border-[#fa6767]"
            onClick={() => scroll.scrollToBottom()}
          >
            Connect with me{" "}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 text-[#fa6767] hover:pl-12 duration-300 w-7 pb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </div>
      <div className="lg:flex hidden items-center flex-col">
        <img src="/imgs/atoms.png" className="w-[80%] bg-transparent   p-8" />
      </div>
    </div>
  );
}

export default Hero;
