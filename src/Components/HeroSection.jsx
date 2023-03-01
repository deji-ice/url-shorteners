import React from 'react'
import working from '../Assets/illustration-working.svg'

const HeroSection = () => {
  return (
    <div className='lg:pl-10 overflow-hidden font-[poppins] p-5 '>
        <div className="flex justify-center items-center lg:flex-row lg:items-center lg:ml-[-7rem] lg:mr-[5rem] lg:justify-between ">
            <div className='flex flex-col justify-center items-center mt-3 gap-4 p-auto  lg:mt-1 lg:ml-20  lg:justify-start lg:items-start '>
                <h2 className='font-bold text-3xl lg:text-6xl lg:ml-14 lg:p-5 lg:leading-snug m-auto mt-1  text-slate-900 text-center lg:text-start'>More than just shorter links</h2>
                <p className='text-md m-4 text-gray-500 lg:text-lg lg:ml-[5rem] lg:pr-10 lg:mt-[-2rem] text-center lg:text-start'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className='bg-cyan-500 m-4 py-2 px-4 rounded-full text-white text-xl lg:w-[13rem]  lg:h-[3rem] lg:ml-[5rem] lg:text-xl font-semibold w-48 hover:bg-cyan-200 '>Get started</button>
            </div>
            <img src={working} alt="working-img" className='w-[60rem] h-auto lg:relative lg:left-[13rem]  ' />
        </div>
    </div>
  )
}

export default HeroSection