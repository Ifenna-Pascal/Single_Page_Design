import React from "react";

function Hero() {
  return (
    <div className="max-w-[70%]  mx-auto h-[36rem] py-8 items-center grid grid-cols-2">
      <div className="flex justify-start flex-col space-y-4">
        <span className="font-Poppins  text-lg text-[#474C55]">
          Hi! I am <span className="text-[#fa6767] text-lg">Monanu Ifenna</span> and
        </span>
        <h1 className="text-[#1A202C] font-bold font-Poppins text-4xl">
          I&apos;ll Help You Build Your Dream
        </h1>
        <span className="text-gray-400 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          laborum quam ipsum temporibus doloremque obcaecati eaque esse
          perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laudantium, at? quisquam. Placeat?
        </span>
        <span className="flex items-center space-x-4">
          <span className="text-[#fa6767] border-b-2 pb-2 border-[#fa6767]">Connect with me{" "}</span>
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
    </div>
  );
}

export default Hero;
