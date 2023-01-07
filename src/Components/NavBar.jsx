import React, { useState } from "react";
import { Menu } from 'react-feather';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let Links = [
    { name: "Features", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Resources", link: "/" },
  ];
  return (
    <>
      <nav className="flex flex-row lg:mt-4 lg:mr-48 lg:ml-24 mr-6 ml-6 text-gray-400 justify-between ">
        <div className="lg:flex  items-center justify-between py-5">
          <span className="font-bold lg:mt-0 mt-6 text-3xl text-slate-900 cursor-pointer flex items-center font-[poppins]">
            Shortly
          </span> 
          <div onClick={()=>setIsOpen(!isOpen)} className="text-3xl absolute right-8 top-10 cursor-pointer lg:hidden ">
            {isOpen ? (
              <span className="text-gray font-medium" >x</span>
            ) : (
              <Menu /> 
              
            )}
          </div>

          <ul
            className={`lg:flex lg:justify-between lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z[-1] left-0 w-full 
            lg:w-auto lg:pl-18 pl-9 transition-all duration-500 ease-in ${isOpen ? "top-20 ":"top-[-400px] "} 
            ` }
          >
            {Links.map((link) => (
              <li key={link.name} className="lg:ml-8 text-base font-medium lg:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-400 hover:text-black duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="lg:absolute right-8 top-10">
            <button className=" bg-gray-500 rounded-full text-white h-9 py-2 px-3 font-[poppins] lg: lg:font-semibold hover:bg-blue-500 duration-300">
              Log In
            </button>
            <button className="bg-sky-500 text-white py-2 px-3 ml-14 rounded-full font-[poppins] text-sm h-9  lg:font-semibold lg:ml-8 hover:bg-indigo-400 duration-500">
              Sign Up
            </button>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
