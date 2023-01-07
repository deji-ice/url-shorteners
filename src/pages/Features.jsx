import React from "react";
import URLform from "../Components/URLform";
import { Clock, Edit, Aperture } from "react-feather";

const Features = () => {
  return (
    <div className="bg-indigo-50 mt-20 font-[poppins]">
      <div className="w-[auto] h-[8rem] bg-indigo-600 items-center text-center m-10 rounded-md relative bottom-14">
        <URLform />
      </div>
      <div className="flex flex-col items-center p-10 text-center">
        <p className="text-3xl font-bold ">Advanced Statistics</p>
        <p className="mt-5 text-slate-400">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col items-center m-10 space-y-20">
        <div className="bg-white w-auto h-[13rem] items-center p-5 text-center rounded-md ">
          <span>
            <Aperture className=" flex bg-indigo-500 rounded-full text-white p-2 w-10 h-10 relative bottom-11 left-[7rem]" />
          </span>
          <p className="text-xl  font-bold">Brand Recognition</p>
          <p className="text-slate-500 font-normal">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content
          </p>
        </div>
        <div className=" bg-white w-auto h-[13rem] items-center p-5 text-center rounded-md">
          <span>
            <Clock className="bg-indigo-500 rounded-full text-white p-2 w-10 h-10 relative bottom-11 left-[7rem]" />
          </span>
          <p className="font-bold text-xl">Detailed Records</p>
          <p className="text-slate-500 font-normal">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className=" bg-white w-auto h-[13rem] items-center p-5 text-center rounded-md">
          <div className="relative bottom-24 left-[8rem] items-center">
            <div className="bg-blue-700 h-20 w-2 "></div>
            <Edit className="bg-indigo-500 rounded-full text-white p-2 w-10 h-10 " />
          </div>
          <p className="font-bold text-xl">Fully Customized</p>
          <p className="text-slate-500">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
