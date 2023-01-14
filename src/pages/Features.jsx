import React from "react";
import URLform from "../Components/URLform";
import { Clock, Edit, Aperture } from "react-feather";
import { LinkResults } from "../Components/LinkResults";

const Features = () => {
  return (
    <div className="bg-indigo-50 mt-20 font-[poppins]">
      <div className="flex flex-col items-center">
        <URLform />
      </div>
      <div className="flex flex-col items-center p-10 text-center lg:pt-[10rem]  ">
        <p className="text-2xl font-bold  lg:text-5xl">Advanced Statistics</p>
        <p className="mt-5 text-slate-400 p-auto lg:text-xl lg:w-[50rem]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col items-center m-10 space-y-20 lg:flex-row lg:space-x-10 lg:justify-center">
        <div className="bg-white w-auto h-auto items-center p-5 text-center rounded-md lg:w-[30rem] ">
          <div className="flex flex-col items-center justify-center mt-[-1rem] mb-6">
            <Aperture className="bg-indigo-500 rounded-full text-white p-2 w-12 h-12 mt-[-1.5rem] " />
          </div>
          <div className="pb-3">
            <p className="text-xl  font-bold pb-3">Brand Recognition</p>
            <p className="text-slate-500 font-normal">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content
            </p>
          </div>
        </div>
        <div className=" bg-white w-auto h-auto items-center p-5 text-center rounded-md lg:w-[30rem] lg:mt-[4rem]">
          <div className="flex flex-col items-center justify-center mt-[-3.5rem] mb-6">
            <div className="bg-blue-700 h-20 w-2 lg:hidden"></div>
            <Clock className="bg-indigo-500 rounded-full text-white p-2 w-12 h-12 mt-[-1.5rem] lg:mt-[-1rem] " />
          </div>
          <div className="pb-3 lg:pb-[10rem]">
            <p className="font-bold text-xl pb-3">Detailed Records</p>
            <p className="text-slate-500 font-normal">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className=" bg-white w-auto h-auto items-center p-5 text-center rounded-md lg:w-[30rem]">
          <div className="flex flex-col items-center justify-center mt-[-6rem] lg:mt-[-1rem] mb-6">
            <div className="bg-blue-700 h-20 w-2 lg:hidden "></div>
            <Edit className="bg-indigo-500 rounded-full text-white p-2 w-12 h-12 mt-[-1.5rem] " />
          </div>
          <div className="pb-3">
            <p className="font-bold text-xl pb-3">Fully Customized</p>
            <p className="text-slate-500">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
