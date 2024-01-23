import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

function Hero() {
  return (
    <div className="bg-[#D6DED3] border border-red-400 w-full px-4 md:mx-auto sm:flex sm:justify-between sm:px-0 sm:pl-14">
      {/* <div className="lg:flex border border-black"> */}
        <div className="sm:w-[400px]  border border-black pt-14">
          <div className="text-zinc-800 text-[40px] font-semibold leading-[1.2]">
            <p>Furnish your dream</p>
            <p>home with ease</p>
          </div>
          <p className="mt-4 lg:mt-6">
            Discover the perfect addition to your home with our wide range of
            stylish and high-quality furniture pieces.
          </p>
          <button className="p-2 mt-4 lg:mt-6 bg-[#9c7247] font-normal rounded-lg text-[#ffff] text-[13px] flex items-center justify-between">
            shop now{" "}
            <IoIosArrowRoundForward size={20} className="text-[#ffff] ml-1" />
          </button>
        </div>
        <div className="mt-2 lg:mt-0">
          <Image
            alt="search"
            height="20"
            src="images/hero-image.svg"
            className="object-cover sm:h-[65vh]"
            width="500"
          />
        </div>
      {/* </div> */}
    </div>
  );
}

export default Hero;
