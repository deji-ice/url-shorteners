import React from "react";

const NavBar = () => {
  return (
    <div className="flex flex-row m-14 place-content-between font-bold text-gray-400">
      <div className="flex flex-row space-x-10 items-center">
        <div className="text-4xl text-slate-700">Shortly</div>
        <button>Feature</button>
        <button>Pricing</button>
        <button>Resources</button>
      </div>
      <div className="flex flex-row space-x-10 ">
        <button className="">Log In</button>
        <button className="bg-sky-500 text-white rounded-full w-24 h-10">Sign Up</button>
      </div>
    </div>
  );
};

export default NavBar;
