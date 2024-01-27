import React from "react";
import Image from "next/image";

function About() {
  return (
    <div>
      <div className="w-full h-[90vh]">
        <Image
        //   src="images/about-hero.svg"
          src='/about/room.jpg'
          alt="image"
          height='0'
          width='200'
          className="w-[100%] h-full"
        />
        <div className="max-w-[1140px] m-auto border border-black">
          <div className="absolute top-[30%] left-0 sm:left-[30%] w-full  max-w-[600px] h-full flex flex-col text-slate-900 p-4">
            <h1 className="font-bold text-5xl ">Welcome To Our Online Furniture Haven</h1>
            <h2 className="text-4xl py-4 italic">Where Style Meets Comforts</h2>
            <p className='text-slate-100'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum amet voluptates maxime rem, perspiciatis nihil dolor
              voluptas id nostrum impedit, quam fugiat exercitationem natus qui
              possimus vero culpa facere quod.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
