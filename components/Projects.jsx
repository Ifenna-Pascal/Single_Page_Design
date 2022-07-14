import React from 'react';
import Link from 'next/link';

const Project = ({img, text, desc, link, reverse}) => (
    <div className={`w-full mb-12 md:max-h-[36rem] flex-col flex ${reverse ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className={`flex-1 basis-[50%] bg-contain h-fit bg-cover`}>
            <img
                src={img}
                className="w-full h-full"
            />
        </div>
        <div className='flex bg-[#f2f5f6] px-6 flex-1 basis-[50%] py-4 text-left flex-col gap-y-4 flex-1 w-full justify-center items-start md:items-center'>
            <span className='text-[#474C55] text-2xl w-full text-center  font-Poppins font-semi-bold '>{text}</span>
            {/* <span className='text-gray-400 text-left pb-3 tracking-wide text-base'>{desc}</span> */}
            {/* <div className='flex flex-col items-center'>
                <Link href={{pathname: link}}>
                <a target='_blank' className='border-[1px] rounded-md text-[#474C55] bg-transparent px-8 py-3 border-[#474C55]'>view Product</a>
                </Link>
            </div> */}
        </div>
    </div>
)

function Projects() {
  return (
    <div className='md:max-w-[70%] max-w-[90%] mx-auto justify-center md:justify-start' id='portfolio'>
        <span className='text-center border-b-0 hover:border- hover:border-[#fa6767] duration-300 flex items-center md:text-left text-[#474C55] text-2xl font-Poppins leading-8 font-normal'>
            Top Notch Qualities
        </span>
        <div className='flex my-3 flex-col'>
            <Project img='/imgs/blockchain.jpg' reverse text="Integrity" desc='Believes in integrity support and promottes honesty' link='https://pure-waters-25432.herokuapp.com/' />
            <Project img='/imgs/staking.jpg' text="Honesty" desc='Worked with a team as a frontend developer in build a staking Dapp, Users can staking an amount of Token Technologies used Tailwind CSS, Next.js Web3.js '  link='https://vft-staking-next.vercel.app/'/>
            <Project img='/imgs/profile.jpg' reverse text="Deligence" desc='Built a landing page using Next.js, Tailwind CSS' link='https://nftpages.herokuapp.com/' />
            <Project img='/imgs/banking.jpg'  text="Patience" desc='Built a Banking API System, users can be able to perform Deposit, Withdraw and Transfer funds using our this platform Technologies used NodeJS, Mongoose' link='https://github.com/Ifenna-Pascal/BANKING_API_SERVICE.git' />
            {/* <Project img='/imgs/church.jpg' reverse text="Church Website" desc='Worked with a team in Building the UI design of a church website, technlogies used React, TypeScript and Styled Components' link='https://launchdemo.netlify.app/' /> */}
        </div>
    </div>
  )
}

export default Projects