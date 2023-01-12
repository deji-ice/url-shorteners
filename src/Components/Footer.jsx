import React from 'react'
import facebook from '../Assets/icon-facebook.svg'
import twitter from '../Assets/icon-twitter.svg'
import pinterest from '../Assets/icon-pinterest.svg'
import instagram from '../Assets/icon-instagram.svg'

const Footer = () => {
  return (
    <div className='text-white'>
      <div className="bg-[#674E8A] px-4 py-16 flex flex-col justify-center items-center">
        <p className='text-3xl font-bold '>Boost your links today</p>
        <button className='bg-[#38C3DA] text-xl font-semibold rounded-full px-8 py-2 mt-8'>Get started</button>
      </div>

      <div className="bg-[#252329] px-24 py-12 flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-start">
        <p className='font-bold text-3xl'>Shortly</p>

      <div className='flex flex-col text-center  lg:flex-row lg:text-start lg:gap-[7rem]'>
        <div className="flex flex-col gap-2 mt-6 text-sm lg:mt-0 lg:ml-16">
          <p className='font-bold'>Features</p>
          <p className='text-gray-300'>Link shortening</p>
          <p className='text-gray-300'>Branded Links</p>
          <p className='text-gray-300'>Analytics</p>
        </div>

        <div className="flex flex-col gap-2 text-sm mt-6 lg:mt-0">
          <p className='font-bold'>Resources</p>
          <p className='text-gray-300'>Blog</p>
          <p className='text-gray-300'>Developers</p>
          <p className='text-gray-300'>Support</p>
        </div>

        <div className="flex flex-col gap-2 text-sm mt-6 lg:mt-0">
          <p className='font-bold'>Company</p>
          <p className='text-gray-300'>About</p>
          <p className='text-gray-300'>Our Team</p>
          <p className='text-gray-300'>Careers</p>
          <p className='text-gray-300'>Contact</p>
        </div>

        <div className="flex flex-row gap-4 mt-8 lg:mt-0">
          <img className='w-4 h-4' src={facebook} alt="" />
          <img className='w-4 h-4' src={twitter} alt="" />
          <img className='w-4 h-4' src={pinterest} alt="" />
          <img className='w-4 h-4' src={instagram} alt="" />
        </div>
      </div>

      </div>
    </div>
  )
}

export default Footer

