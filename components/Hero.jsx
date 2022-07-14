import React from "react";
import { animateScroll as scroll } from "react-scroll";

function Hero() {
  return (
    <div className="md:max-w-[70%] max-w-[95%] h-[36rem]  mx-auto h-[36rem] py-8 items-center grid grid-cols-1 lg:grid-cols-2">
      <div className="flex md:justify-start justify-center md:items-start md:justify-start items-center flex-col space-y-4">
        <span className="font-Poppins  text-lg text-[#474C55]">
          Hi! I am <span className="text-blue-500 text-lg">Oleka Chioma</span>{" "}
          and
        </span>
        <h1 className="text-[#1a253d] font-bold text-center font-Poppins text-4xl">
          I&apos;ll Help You Build Your Dream
        </h1>
        <span className="text-gray-400 md:text-left text-center text-lg">
          Oleka Chioma is a computer engineer by profession, she is aimed at bring the best out of her students while offering both technical and moral skill  <br></br>

        </span>
        <span className="flex items-center space-x-4">
          <span
            className="text-white text-center my-2 border-b-2 font-semibold border-none rounded-md shadow-lg py-3  px-6 bg-blue-500 "
            onClick={() => scroll.scrollToBottom()}
          >
            Connect with me{" "}
          </span>
        </span>
      </div>
      <div className="lg:flex hidden items-center flex-col">
        <img src="/imgs/atoms.png" className="w-[80%] bg-transparent   p-8" />
      </div>
    </div>
  );
}

export default Hero;
