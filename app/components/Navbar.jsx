import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="bg-[#3B5D50] w-full">
      <div className="max-w-[1140px] m-auto flex justify-between items-center px-4 sm:px-5 py-3">
        <div className="flex justify-between items-center">
          <div className="text-[25px] sm:text-[26px] text-white font-bold font-mono">
            Arojonel
          </div>
          <ul className="hidden lg:flex text-[15px] ml-20 cursor-pointer m-auto">
            <Link href="/">
              <li className="px-3 active hover:text-white  text-white mx-2">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="px-3 opacity-60 hover:opacity-100 link hover:text-white  text-white mx-2">
                About
              </li>
            </Link>
            <Link href="/help">
              <li className="px-3 opacity-60 hover:opacity-100  link hover:text-white  text-white mx-2">
                Help
              </li>
            </Link>
            <Link href="/contact">
              <li className="px-3 opacity-60 hover:opacity-100 link hover:text-white  text-white mx-2">
                Contact
              </li>
            </Link>
            {/* <li className="px-6 py-[4px] hover:bg-[#D6DED3] hover:text-black hover:rounded-[10px] mx-[1px] text-white">
            Contact
          </li> */}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[200px] hidden sm:flex relative border border-white mr-[40px] rounded-[15px] py-[2px] text-zinc-950 text-opacity-25 text-[13px]">
            <FiSearch 
            size={17} 
            color='white'
            className="absolute left-[10px] top-[8px]" />
            {/* <Image
              alt="search"
              height="20"
              src="assets/search.svg"
              className="absolute left-[10px] top-[10px]"
              width="12"
            /> */}
            <input
              type="text"
              className="h-7 w-[150px] ml-[30px] bg-[#3B5D50] text-[11px] outline-none pl-2 rounded-[10px] placeholder:text-[13px] placeholder:text-[white] text-white opacity-70 font-medium block sm:text-[12px]"
              placeholder="Search our store..."
            />
          </div>
          <div className="mr-5 cursor-pointer p-1 hover:bg-neutral-400 hover:rounded-[5px]">
           <AiOutlineUser size={20} color={'white'}/>
            {/* <Image
              alt="search"
              height="20"
              src=assets/user.svg"
              className=""
              width="20"
            /> */}
          </div>
          <div className="relative mr-5 p-1 cursor-pointer hover:bg-neutral-400 hover:rounded-[5px] ">
            < AiOutlineShoppingCart size={20} color={'white'} />
            {/* <Image
              alt="search"
              height="20"
              src="assets/shopping-cart.svg"
              className=""
              width="20"
            /> */}
            <div className="top-[3px] right-[3px] absolute text-[5px] border-green-900 border text-white bg-green-900 rounded-[50%]">
              2
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
