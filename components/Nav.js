import React from "react";

function Nav() {
  return (
    <div className="max-w-[70%] mx-auto flex justify-between items-center py-8">
      <div className="flex-1">
        <span className="font-Poppins text-2xl italic text-[#474C55] font-semi-bold">
          &#60;ife<span className="text-[#fb9e9e] w-8 h-8 italic font-bold">.</span>eth&#62;
        </span>
      </div>
      <ul className="flex space-x-12 tracking-wide items-center list-none justify-between text-[#474C55] text-lg">
        <li className="hover:cursor-pointer hover:text-[#fa6767]">Portfolio</li>
        <li className="hover:cursor-pointer hover:text-[#fa6767]">Collaborations</li>
        <li className="hover:cursor-pointer hover:text-[#fa6767]">Contact</li>
      </ul>
    </div>
  );
}

export default Nav;
