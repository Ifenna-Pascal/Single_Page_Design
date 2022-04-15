import React from "react";

function Stacks() {
  return (
    <div className="max-w-[90%] mx-auto bg-[#2D3748]">
      <div className="max-w-[65%] mx-auto flex flex-col gap-y-8 items-start justify-start">
        <span className="text-white leading-8 text-4xl font-bold font-Poppins">
          Digital Produts <br /> for Sale
        </span>
        <span className="flex items-center space-x-4">
          <span className="text-[#fa6767] border-b-2 pb-2 border-[#fa6767]">
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
    </div>
  );
}

export default Stacks;
