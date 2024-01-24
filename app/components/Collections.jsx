'use client'
import React from "react";
import Image from "next/image"; 
import {useState} from 'react';

function Collections() {

  return (
    <div className='max-w-[1140px] m-auto w-full py-10 px-4 sm:px-5 border border-black'>
      <h1 className='text-zinc-800 text-[25px] font-semibold'>Our Collections</h1>
      <div className='grid sm:grid-cols-4 gap-4 pt-5'>
        <div className='col-span-2 sm:col-span-2'>
          <Image
            alt="search"
            height="20"
            src="/images/col-bed.jpg"
            className="w-full object-cover h-full rounded-[10px]"
            width="500"
          />
        </div>
        <div className='sm:col-span-1'>
          <Image
            alt="search"
            height="20"
            src="/images/col-yellow-chair.jpg"
            className="w-full h-full object-cover rounded-[10px]"
            width="500"
          />
        </div>
        <div className='sm:col-span-1'>
          <Image
            alt="search"
            height="20"
            src="/images/col-chair.jpg"
            className="w-full h-full object-cover rounded-[10px]"
            width="500"
          />
        </div>
        <div className='sm:col-span-1'>
          <Image
            alt="search"
            height="0"
            src="/images/col-leaf.jpg"
            className="w-full h-full object-cover rounded-[10px]"
            width="500"
          />
        </div>
        <div className='sm:col-span-2'>
          <Image
            alt="search"
            height="0"
            src="/images/yellow.jpg"
            className="w-full h-full object-cover rounded-[10px]"
            width="500"
          />
        </div>
        <div className='col-span-2 sm:col-span-1'>
          <Image
            alt="search"
            height="20"
            src='/images/col-penthouse.jpg'
            className='object-cover w-full h-full rounded-[10px]'
            width="500"
          />
        </div>
      </div>
    </div>
  );
}

export default Collections;
