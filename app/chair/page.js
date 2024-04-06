"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowRoundForward } from "react-icons/io";
import { addToCart } from "@/redux/cartSlice";
import { fetchChairs } from "@/redux/chairSlice";
import { NavbarSub } from "@/custom";

const page = () => {
  const [show, setShow] = useState(8);
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();
  const { chairData } = useSelector((state) => state.chairs);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    dispatch(fetchChairs());
  }, []);

  return (
    <div className="py-10 pt-20 border border-black">
      <div className="max-w-[1140px] m-auto w-full py-5 px-4 :sm:px-5">
        <ul className="lg:flex text-zinc-500 text-[15px] font-normal cursor-pointer pt-4">
          <NavbarSub />
        </ul>
      </div>
      <div className="max-w-[1140px] m-auto w-full gap-4 pb-4 px-4 sm:px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {chairData?.slice(0, show).map((chair, index) => (
          <div key={index} className="">
            <Link href={`chair/${chair.id}`}>
              <div className="">
                <Image
                  alt="search"
                  height="20"
                  src={chair.path}
                  className="w-full object-cover h-full cursor-pointer"
                  width="100"
                  onClick={() => console.log(chair.id)}
                />
              </div>
            </Link>
            <div
              className="flex justify-center items-center border text-[15px] border-black py-1 mx-2 my-5 cursor-pointer bg-[#3B5D50] hover:opacity-80 text-white rounded-[5px]"
              onClick={() => handleAddToCart(chair)}
            >
              Add Item
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        {active ? (
          <button
            className="p-2 mt-4 lg:mt-6 font-normal border border-black text-black text-[13px] hover:bg-[#D6DED3] flex items-center justify-between"
            onClick={() => {
              setShow((prev) => prev + 20);
              setActive(!active);
            }}
          >
            Show all{" "}
            <IoIosArrowRoundForward size={20} className="text-black ml-1" />
          </button>
        ) : (
          <button
            className="p-2 mt-4 lg:mt-6 font-normal border border-black text-black text-[13px] hover:bg-[#D6DED3] flex items-center justify-between"
            onClick={() => {
              setShow(8);
              setActive(!active);
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

export default page;
