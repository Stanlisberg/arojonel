"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
// import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [navIcon, setNavIcon] = useState(true);
  const pathname = usePathname();
  // console.log(pathname);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Store", href: "/store" },
  ];
  return (
    <nav className="bg-[#3B5D50] w-full fixed top-0 z-10 ">
      <div className="max-w-[1140px] m-auto flex justify-between items-center px-4 sm:px-5 py-3 ">
        <div className="flex justify-between items-center">
          <div className="text-[25px] sm:text-[26px] text-white font-bold font-mono">
            Arojonel
          </div>
          <div className="hidden lg:flex text-[15px] ml-20 cursor-pointer m-auto">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  href={link.href}
                  key={index}
                  className={
                    isActive
                      ? "border-b border-[#F9BF29] text-white opacity-100 px-3 mx-2"
                      : "opacity-60 px-3 text-white hover:text-white hover:border-b hover:border-[#F9BF29] hover:opacity-100  mx-2"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-[200px] hidden sm:flex relative border border-white mr-[40px] rounded-[15px] py-[2px] text-zinc-950 text-opacity-25 text-[13px]">
            <FiSearch
              size={17}
              color="white"
              className="absolute left-[10px] top-[8px]"
            />
            <input
              type="text"
              className="h-7 w-[150px] ml-[30px] bg-[#3B5D50] text-[11px] outline-none pl-2 rounded-[10px] placeholder:text-[13px] placeholder:text-[white] text-white opacity-70 font-medium block sm:text-[12px]"
              placeholder="Search our store..."
            />
          </div>
          {/* <div className="mr-5 cursor-pointer p-1 hover:bg-neutral-400 hover:rounded-[5px]">
           <AiOutlineUser size={20} color={'white'}/>
          </div> */}
          <div className="relative pt-2 sm:pt-0 mr-1 sm:mr-5 p-1 cursor-pointer hover:bg-neutral-400 hover:rounded-[5px] ">
            <AiOutlineShoppingCart size={20} color={"white"} />
            <div className="top-[3px] right-[3px] absolute text-[5px] border-green-900 border text-white bg-green-900 rounded-[50%]">
              2
            </div>
          </div>
          <div className="pt-1 md:hidden ml-3 block cursor-pointer z-10">
            {navIcon === true ? (
              <GiHamburgerMenu
                size="27"
                color="#fff"
                onClick={() => setNavIcon(!navIcon)}
              />
            ) : (
              <FaTimes
                size="27"
                color="#fff"
                onClick={() => setNavIcon(!navIcon)}
              />
            )}
          </div>
          <div
            className={
              navIcon === false
                ? " fixed overflow-y-hidden md:hidden flex flex-col ease-in duration-700 top-[61px] left-0 w-full h-full px-4 py-7 bg-[#fff] z-10 "
                : "  fixed top-40 h-full left-[-100%] ease-in duration-700"
            }
          >
            <ul className="w-full p-4">
              <Link href="/">
                <li
                  className="border-b border-[black] py-6 cursor-pointer text-[black]"
                  onClick={() => setNavIcon(!navIcon)}
                >
                  Home
                </li>
              </Link>

              <Link href="/about">
                <li
                  className="border-b border-[black] py-6 cursor-pointer text-[black]"
                  onClick={() => setNavIcon(!navIcon)}
                >
                  About
                </li>
              </Link>

              <Link href="/contact">
                <li
                  className="border-b border-[black] py-6 cursor-pointer text-[black]"
                  onClick={() => setNavIcon(!navIcon)}
                >
                  Contact
                </li>
              </Link>

              <Link href="/store">
                <li
                  className="border-b border-[black] py-6 cursor-pointer text-[black]"
                  onClick={() => setNavIcon(!navIcon)}
                >
                  Store
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
