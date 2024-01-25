import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

function Hero() {
  return (
    <div className="bg-[#D6DED3] w-full sm:flex sm:items-center sm:justify-center sm:pl-[60px] sm:px-0">
      <div className="lg:w-full lg:flex lg:justify-between lg:items-center">
        <div className="sm:w-[500px] pt-10 sm:pl-5 px-4">
          <div className="text-zinc-800 text-[35px] font-semibold leading-[1.2]">
            <p>Furnish your dream</p>
            <p>home with ease</p>
          </div>
          <p className="mt-4 lg:mt-6">
            Discover a curated selection of high-quality furniture pieces
            designed to enhance your living spaces. From timeless classics to
            modern designs, find the perfect additions for your home. 
          </p>
          <button className="p-2 mt-4 lg:mt-6 bg-[#9c7247] font-normal rounded-lg text-[#ffff] text-[13px] flex items-center justify-between">
            Shop now{" "}
            <IoIosArrowRoundForward size={20} className="text-[#ffff] ml-1" />
          </button>
        </div>
        <div className="mt-5 lg:mt-0">
          <Image
            alt="search"
            height="20"
            src="images/hero-image.svg"
            className="object-cover sm:h-[80vh]"
            width="700"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
