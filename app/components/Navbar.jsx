import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="max-w-[1140px] m-auto w-full flex justify-between items-center px-4 sm:px-5 py-3">
      <div className='flex justify-between items-center'>
        <div className="text-[25px] sm:text-[26px] text-zinc-950 font-bold font-mono">
          Arojonel
        </div>
        <ul className="hidden lg:flex text-[15px] ml-20 cursor-pointer">
          <li className="px-6 py-[4px] hover:bg-[#D6DED3] hover:rounded-[10px] mx-[1px] text-[#2A2A2A]">
            Home
          </li>
          <li className="px-6 py-[4px] hover:bg-[#D6DED3] hover:rounded-[10px] mx-[1px] text-[#2A2A2A]">
            About
          </li>
          <li className="px-6 py-[4px] hover:bg-[#D6DED3] hover:rounded-[10px] mx-[1px] text-[#2A2A2A]">
            Help
          </li>
          <li className="px-6 py-[4px] hover:bg-[#D6DED3] hover:rounded-[10px] mx-[1px] text-[#2A2A2A]">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-[200px] hidden sm:flex relative border border-black mr-[40px] rounded-[15px] py-[2px] text-zinc-950 text-opacity-25 text-[13px]">
          <Image
            alt="search"
            height="20"
            src="assets/search.svg"
            className="absolute left-[10px] top-[10px]"
            width="12"
          />
          <input
            type="text"
            className="h-7 w-[150px] ml-[30px] text-[11px] outline-none pl-2 rounded-[10px] placeholder:text-[13px] placeholder:text-slate-400 text-slate-500 font-medium block sm:text-[12px]"
            placeholder="Search our store..."
          />
        </div>
        <div className="mr-5 cursor-pointer p-1 hover:bg-neutral-100 hover:rounded-[5px]">
          <Image
            alt="search"
            height="20"
            src="assets/user.svg"
            className=""
            width="20"
          />
        </div>
        <div className="relative mr-5 p-1 cursor-pointer hover:bg-neutral-100 hover:rounded-[5px] ">
          <Image
            alt="search"
            height="20"
            src="assets/shopping-cart.svg"
            className=""
            width="20"
          />
          <div className="top-[3px] right-[3px] absolute text-[5px] border-green-900 border text-white bg-green-900 rounded-[50%]">
            2
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
