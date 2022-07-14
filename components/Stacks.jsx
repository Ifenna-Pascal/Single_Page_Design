import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Stack = ({image, text, sm}) => (
    <div className="relative md:mb-0 mb-12">
       <div className="w-[20rem] bg-blend-overlay bg-gray-800 h-[20rem]">
       <img src={image} className="w-full h-full rounded-md bg-cover" />
       </div>
        <span className="w-[90%] mx-5 absolute -bottom-6 flex items-center flex-col bg-white py-3">
            <span className="text-gray-700 text-base font-semibold font-Poppins">{text}</span>
            <span className="text-gray-400 text-sm font-Poppins">{sm}</span>
        </span>
    </div>
)
function Stacks() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="max-w-full mx-auto bg-[#2D3748]" id="work">
      <div className="md:max-w-[70%] max-w-full py-16 mx-auto flex flex-col gap-y-4 items-center justify-center md:items-start md:justify-start">
        <span className="text-white leading-10 text-2xl md:text-left text-center md:text-3xl tracking-wider font-bold font-Poppins">
          Technologies & Stacks <br /> I work with
        </span>
        {/* <span className="flex items-center space-x-4">
          <span className="text-white border-b-2 pb-2 border-white">
            View all Stacks{" "}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 text-white hover:pl-12 duration-300 w-7 pb-2"
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
        </span> */}
        <div className="flex lg:flex-row flex-col items-center gap-x-8 justify-between my-6">
           {/* <Slider {...settings}> */}
           <Stack image="/imgs/frontend.jpg" text='Software Engineering' sm='C & C#' />
            <Stack image="/imgs/backend.jpg" text='Simulation & Control' sm='MATLAB' />
            {/* <Stack image="/imgs/blockchain.jpg" text='Blockchain Develpment' sm='Solidity-Web3.js' /> */}
           {/* </Slider> */}
            {/* <Stack image="/imgs/frontend.jpg" text='Blockchain Develpment' sm='Solidity-Web3.js' /> */}
        </div>
      </div>
    </div>
  );
}

export default Stacks;
