import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

function Hero() {
  return (
    <div className="bg-[#3B5D50] w-full sm:flex sm:px-0 mt-[61px] ">
      <div className="lg:flex lg:justify-between lg:items-center mx-auto lg:max-w-[1140px] ">
        <div className="sm:w-[500px] pt-10 sm:pl-5 px-4">
          <div className="text-white text-[35px] font-semibold leading-[1.2]">
            <p>Furnish your dream</p>
            <p>home with ease</p>
          </div>
          <p className="mt-4 lg:mt-6 text-white opacity-50">
            Discover a curated selection of high-quality furniture pieces
            designed to enhance your living spaces. From timeless classics to
            modern designs, find the perfect additions for your home. 
          </p>
          <div className='flex'>
          <button className="w-20 p-2 mt-4 lg:mt-6 bg-[#F9BF29] font-normal rounded-lg text-[black] text-[13px] text-center">
            Shop now{" "}
            {/* <IoIosArrowRoundForward size={20} className="text-[black] ml-1" /> */}
          </button>
          <button className="w-20 text-center  ml-4 p-2 mt-4 lg:mt-6 font-normal border border-white rounded-lg text-[white] text-[13px] ">
            Explore {" "}
          </button>
          </div>
        </div>
        <div className="mt-5 lg:mt-0">
          <Image
            alt="search"
            height="20"
            src="images/couch.svg"
            className="object-cover sm:h-[80vh]"
            width="700"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
