import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

function Hero() {
  return (
    <div className="bg-[#D6DED3] px-8 sm:pl-14 border border-red-400">
      <div className="sm:w-[500px] border border-black pt-5 sm:pt-0">
        <div className="text-zinc-800 text-[40px] font-semibold leading-[1.2]">
        <p>
            Furnish your dream
        </p>
        <p>home with ease</p>
        </div>
        <p className='mt-8'>
          Discover the perfect addition to your home with our wide range of
          stylish and high-quality furniture pieces.
        </p>
        <button className='p-2 mt-8 bg-[#9c7247] font-normal rounded-lg text-[#ffff] text-[13px] flex items-center justify-between'>
          shop now <IoIosArrowRoundForward size={20} className='text-[#ffff] ml-1'/>
        </button>
      </div>
      <div>
        <Image
          alt="search"
          height="20"
          src="images/hero-image.svg"
          className=""
          width="530"
        />
      </div>
    </div>
  );
}

export default Hero;
