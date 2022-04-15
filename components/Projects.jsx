import React from 'react'

const Project = ({img, text, desc, link, reverse}) => (
    <div className={`w-full mb-12 max-h-[36rem] flex ${reverse ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-1 basis-[50%] bg-contain h-full w-full bg-cover`}>
            <img
                src={img}
                className="w-full h-full"
            />
        </div>
        <div className='flex bg-[#f2f5f6] px-12 flex-1 basis-[50%] py-10 text-left flex-col gap-y-6 flex-1 w-full h-full justify-start items-start'>
            <span className='text-[#474C55] text-xl  font-Poppins font-semi-bold '>{text}</span>
            <span className='text-gray-400 text-left tracking-wide text-base'>{desc}</span>
            <div className='flex flex-col items-center'>
                <button className='border-[1px] rounded-md text-[#474C55] bg-transparent px-8 py-3 border-[#474C55]'>view Product</button>
            </div>
        </div>
    </div>
)

function Projects() {
  return (
    <div className='max-w-[70%] mx-auto justify-start'>
        <span className='py-6  text-[#474C55] text-2xl font-Poppins leading-8 font-normal'>
            Products I&apos;ve built and <br /> business I&apos;ve collaborated with
        </span>
        <div className='my-12 flex flex-col'>
            <Project img='/imgs/haulk.jpeg' reverse text="Haulk Logistics" desc='1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.' />
            <Project img='/imgs/haulk.jpeg' text="Haulk Logistics" desc='1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.' />
            <Project img='/imgs/haulk.jpeg' reverse text="Haulk Logistics" desc='1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.' />
        </div>
    </div>
  )
}

export default Projects