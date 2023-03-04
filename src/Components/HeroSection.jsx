import React from "react";
import working from "../Assets/tinyas link management platform.png";
import { HashLink as Link } from 'react-router-hash-link';

const HeroSection = () => {
  return (

    <div className="lg:pl-10 p-1">
      <div className="lg:pl-10 flex flex-col-reverse justify-center items-center lg:flex-row lg:items-center lg:ml-[-7rem] lg:mr-[5rem] lg:justify-between ">
        <div className="flex flex-col justify-center items-center mt-0 lg:gap-4 gap-0 p-auto  lg:mt-1 lg:ml-20  lg:justify-start lg:items-start ">
          <h2 className="font-bold text-5xl  lg:p-5 p-5 tracking-tight lg:text-6xl lg:ml-16 lg:leading-snug m-auto mt-0 lg:mt-8 text-slate-900 text-center lg:text-start">
          Link less <br/> Share more 
          </h2>
          <p className="text-md lg:m-4 p-5 m-0 lg:p-0 text-slate-400 lg:text-lg lg:ml-[5rem] lg:pr-1 lg:mt-[-2rem] text-center lg:text-start">
          Introducing Shortlynks - the fast and easy way to shorten long URLs into compact links that are shareable and trackable!

          </p>
          <Link to="#features" smooth>
            <button className="bg-cyan-500 m-4 py-2 px-4 lg:mt-0 mt-4 rounded-full text-white text-xl lg:w-[13rem]  lg:h-[3rem] lg:ml-[5rem] lg:text-xl font-semibold w-48 hover:bg-cyan-200 ">
              Get started
            </button>
          </Link>
        </div>
        <img
          src={working}
          alt="working-img"
          className="lg:w-[70rem] w-[90rem] lg:mt-10 h-[17rem] lg:h-auto lg:relative lg:left-[5rem]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
