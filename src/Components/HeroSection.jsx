import React from 'react'
import working from '../Assets/illustration-working.svg'

const HeroSection = () => {
  return (
    <div className='lg:pl-10 overflow-hidden '>
        <div className="flex flex-col-reverse justify-center items-center lg:flex-row lg:items-center lg:justify-between gap-32">
            <div className='flex flex-col justify-center items-center gap-4 p-4 lg:justify-start lg:items-start '>
                <h2 className='font-bold text-7xl text-center lg:text-start'>More than just shorter links</h2>
                <p className='text-2xl text-center lg:text-start'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className='bg-cyan-500 py-2 px-4 rounded-full text-white text-xl font-semibold w-48 hover:bg-cyan-200 '>Get started</button>
            </div>
            <img src={working} alt="" className='w-[600px] h-auto lg:relative lg:left-16 ' />
        </div>
    </div>
  )
}

export default HeroSection