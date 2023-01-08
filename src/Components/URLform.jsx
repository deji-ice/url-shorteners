import React from "react";
import { Input, Button } from "@material-tailwind/react";

function URLform() {
  return (
    <div className="w-full items-center flex flex-col p-10 justify-center space-y-2 lg:items-center  lg:flex-row lg:space-y-4">
      <Input className="h-10 rounded-md lg:h-14 lg:w-[60rem] lg:text-xl" placeholder="Shorten link here..." />
      <button className="w-full h-10 bg-slate-600 rounded-md text-white lg:text-xl lg:w-[10rem] lg:h-14 hover:bg-indigo-400 duration-500">Shorten It!</button>
    </div>
  );
}

export default URLform;
