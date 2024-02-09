"use client";

import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
// import cartSlice, { removeFromCart } from "@/redux/cartSlice";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (id) => {
    cartItems.filter((item) => console.log(item.id !== id))

}

  return (
    <div className='min-h-[100vh] pt-[90px] text-center'>
        <h1 className='text-3xl font-[600]'>All Cart Items</h1>
        <h3 className='mt-4 text-[#6A6A6A] text-[20px]'>Total Items: {cartItems.length}</h3>
    <div className="pt-[60px] max-w-[1140px] m-auto w-full gap-2 pb-4 px-4 sm:px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {cartItems.map((item, index) => (
        <div key={index} className="">
          <div className="">
            <Image
              alt="search"
              height="20"
              src={item.path}
              className="w-full object-cover h-full"
              width="100"
            />
          </div>
          <div className="flex justify-between items-center mb-5 mt-3 mx-2">
          <p className='text-[15px] font-bold'><span className='font-normal'>Qty</span> {item.quantity}</p>
            <button 
              className="text-[13px] px-[8px] py-[2px] sm:py-1 sm:px-3 rounded-[5px] text-white p-1 bg-[#3B5D50] hover:opacity-80"
              onClick={() => handleRemoveFromCart(item.id)}
              >
              Remove Item
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Cart;
