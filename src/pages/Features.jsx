import React from "react";
import URLform from "../Components/URLform";
import { Clock, Edit, Aperture } from "react-feather";
import { LinkResults } from "../Components/LinkResults";
import downArrow from "../Assets/PngItem_2647791.png"

const Features = () => {
  return (
    <>
    <img src={downArrow} className="animate-bounce w-16 h-24 flex lg:hidden ml-[9rem] mt-10"/>
    <div className="bg-indigo-50 lg:mt-0 mt-5" id="features">
      <div className="flex flex-col items-center">
        <URLform />
      </div>
      <div
        className="flex flex-col items-center  text-center lg:pt-[10rem] lg:mb-[7rem] pt-[5rem] m-10 lg:m-0"
        id="about"
      >
        <p className="text-2xl font-bold  lg:text-5xl lg:mb-[1rem] ">
          Advanced Statistics
        </p>
        <p className="mt-5  text-slate-400 p-auto text-md lg:text-xl lg:w-[50rem]">
          A web app that shortens URLs, has
          generated over 100,000 shortened links since its launch in 2022.
          The app's user base has grown by an average of 25% per year, and the
          average length of a shortened link is 12 characters.
        </p>
      </div>
      <div className="flex flex-col items-center m-10 space-y-20 lg:space-y-5 lg:flex-row lg:space-x-10 lg:justify-center">
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
        <div className=" bg-white w-auto h-auto items-center p-5 text-center rounded-md lg:w-[30rem] ">
          <div className="flex flex-col items-center justify-center mt-[-6rem] lg:mt-[-1rem] mb-6">
            <div className="bg-blue-700 h-20 w-2 lg:hidden"></div>
            <Clock className="bg-indigo-500 rounded-full text-white p-2 w-12 h-12 mt-[-1.5rem]  " />
          </div>
          <div className="pb-3 ">
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
    </>
  );
};

export default Features;
