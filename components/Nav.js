import React, { useEffect, useState } from "react";
import { Link as LinkS } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll';

function Nav() {
  const [show, setShow] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 330) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <div
      className={`${
        scrollNav ? "bg-gray-300 pb-4" : "bg-transparent"
      } z-50 opacity-70  sticky top-0`}
    >
      <div
        className={`md:max-w-[70%]  max-w-[80%] mx-auto flex justify-between items-center py-6`}
      >
        <div className="flex-1 hover:cursor-pointer" onClick={()=> scroll.scrollToTop()}>
          <span className="font-Poppins text-2xl italic text-[#474C55] font-semi-bold">
            &#60;ife
            <span className="text-[#fb9e9e] w-8 h-8 italic font-bold">.</span>
            eth&#62;
          </span>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setShow(!show)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 text-gray-900 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokewidth="2"
            >
              <path
                strokelinecap="round"
                strokelinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <ul className="md:flex hidden space-x-12 py-2 tracking-wide items-center list-none justify-between text-[#474C55] text-lg">
          <LinkS
            activeClass="text-[#fa6767]"
            to="portfolio"
            smooth={true}
            duration={500}
            offset={-84}
            spy={true}
            exact="true"
          >
            {" "}
            <li className="hover:cursor-pointer hover:text-[#fa6767]">
              Portfolio
            </li>
          </LinkS>
          <LinkS
            activeClass="text-[#fa6767]"
            to="work"
            smooth={true}
            duration={500}
            offset={-84}
            spy={true}
            exact="true"
          >
            {" "}
            <li className="hover:cursor-pointer hover:text-[#fa6767]">
              Collaborations
            </li>
          </LinkS>
          <LinkS
            activeClass="text-[#fa6767]"
            to="contact"
            smooth={true}
            duration={500}
            offset={-84}
            spy={true}
            exact="true"
          >
            <li className="hover:cursor-pointer hover:text-[#fa6767]">
              Contact
            </li>
          </LinkS>
        </ul>
      </div>
      {show && (
        <ul className="md:hidden flex space-y-2 flex-col max-w-[80%] mx-auto tracking-wide items-start list-none justify-start text-[#474C55] text-lg">
          <LinkS
            activeClass="text-[#fa6767]"
            to="portfolio"
            smooth={true}
            duration={500}
            offset={-84}
            spy={true}
            exact="true"
          >
            {" "}
            <li
              onClick={() => setShow(false)}
              className="hover:cursor-pointer hover:text-[#fa6767]"
            >
              Portfolio
            </li>{" "}
          </LinkS>
          <LinkS
            activeClass="text-[#fa6767]"
            to="work"
            smooth={true}
            duration={500}
            offset={-84}
            spy={true}
            exact="true"
          >
            {" "}
            <li
              onClick={() => setShow(false)}
              className="hover:cursor-pointer hover:text-[#fa6767]"
            >
              Collaborations
            </li>{" "}
          </LinkS>
          <LinkS
            activeClass="text-[#fa6767]"
            to="contact"
            smooth={true}
            duration={500}
            offset={-84}
            spy={true}
            exact="true"
          >
            <li
              onClick={() => setShow(false)}
              className="hover:cursor-pointer hover:text-[#fa6767]"
            >
              Contact
            </li>{" "}
          </LinkS>
        </ul>
      )}
    </div>
  );
}

export default Nav;
