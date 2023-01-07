import React from "react";
import { Input, Button } from "@material-tailwind/react";

function URLform() {
  return (
    <div className="w-[21rem] items-center flex flex-col place-content-between p-5 space-y-3">
      <Input className="h-10 rounded-md" placeholder="Shorten link here..." />
      <button className="w-[18.5rem] h-10 bg-slate-600 rounded-md text-white">Shorten It!</button>
    </div>
  );
}

export default URLform;
