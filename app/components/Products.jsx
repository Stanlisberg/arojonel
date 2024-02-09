"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowRoundForward } from "react-icons/io";
import { addToCart } from "@/redux/cartSlice";

const products = [
  {
    id: 1,
    path: "products/1.svg",
  },
  {
    id: 2,
    path: "products/2.svg",
  },
  {
    id: 3,
    path: "products/3.svg",
  },
  {
    id: 4,
    path: "products/4.svg",
  },
  {
    id: 5,
    path: "products/5.svg",
  },
  {
    id: 6,
    path: "products/6.svg",
  },
  {
    id: 7,
    path: "products/7.svg",
  },
  {
    id: 8,
    path: "products/8.svg",
  },
  {
    id: 9,
    path: "products/1.svg",
  },
  {
    id: 10,
    path: "products/2.svg",
  },
  {
    id: 11,
    path: "products/3.svg",
  },
  {
    id: 12,
    path: "products/4.svg",
  },
];
const Products = () => {
  const [show, setShow] = useState(8)
  const [active, setActive] = useState(true)
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="py-4 pt-0">
      <div className="max-w-[1140px] m-auto w-full py-5 px-4 :sm:px-5">
        <h1 className="text-zinc-800 text-[25px] font-semibold px-2">
          Our products
        </h1>
        <ul className="hidden lg:flex text-zinc-500 text-[15px] font-normal cursor-pointer pt-4">
          <li className="mr-3 pl-2 pr-4 py-[4px] bg-neutral-100 rounded-[10px] hover:text-black">
            All Products
          </li>
          <li className="px-4 mx-3 py-[4px] bg-neutral-100 rounded-[10px] hover:text-black ">
            Bed
          </li>
          <li className="px-4 mx-3 py-[4px] bg-neutral-100 rounded-[10px] hover:text-black">
            Sofa
          </li>
          <li className="px-4 mx-3 py-[4px] bg-neutral-100 rounded-[10px] hover:text-black">
            Coffee Table
          </li>
          <li className="px-4 mx-3 py-[4px] bg-neutral-100 rounded-[10px] hover:text-black">
            Consoles
          </li>
          <li className="px-4 mx-3 py-[4px] bg-neutral-100 rounded-[10px] hover:text-black">
            Tables
          </li>
          <li className="px-4 mx-3 py-[4px] bg-neutral-100 rounded-[10px] hover:text-black">
            Chairs
          </li>
        </ul>
      </div>
      <div className="max-w-[1140px] m-auto w-full gap-4 pb-4 px-4 sm:px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {/* {productLoading && <div className='text-3xl'>Loading</div>} */}
        {products.slice(0, show).map((product, index) => (
          <div key={index} className="">
            <div className="">
              <Image
                alt="search"
                height="20"
                src={product.path}
                className="w-full object-cover h-full"
                width="100"
              />
            </div>
            <div 
              className="flex justify-center items-center border text-[15px] border-black py-1 mx-2 my-5 cursor-pointer bg-[#3B5D50] hover:opacity-80 text-white rounded-[5px]"
              onClick={() => handleAddToCart(product)}
              >
                 Add Item
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        {active ? ( <button 
        className="p-2 mt-4 lg:mt-6 font-normal border border-black text-black text-[13px] hover:bg-[#D6DED3] flex items-center justify-between"
        onClick={() => {
          setShow((prev) => prev + 20)
          setActive(!active)
        }}
        >
          Show all{" "}
          <IoIosArrowRoundForward size={20} className="text-black ml-1" />
        </button>) 
        : (
          <button 
        className="p-2 mt-4 lg:mt-6 font-normal border border-black text-black text-[13px] hover:bg-[#D6DED3] flex items-center justify-between"
        onClick={() => {
          setShow(8)
          setActive(!active)
        }}
        >
          Show less{" "}
          <IoIosArrowRoundForward size={20} className="text-black ml-1" />
        </button>
        )}
      </div>
    </div>
  );
};

export default Products;
