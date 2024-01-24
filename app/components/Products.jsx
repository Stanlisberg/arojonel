import React from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const getProducts = async () => {
  const res = await fetch("http://localhost:3002/product", {
    next: { revalidate: 0 },
  });
  return res.json();
};

async function Products() {
  const products = await getProducts();
  console.log(products);
  return (
    <div className='border border-green-700 py-4 pt-0'>
      <div className="max-w-[1140px] m-auto w-full py-5 px-4 :sm:px-5 border border-black">
        <h1 className="text-zinc-800 text-[25px] font-semibold px-2">
          Our products
        </h1>
        <ul className="hidden sm:flex text-zinc-500 text-[15px] font-normal cursor-pointer pt-4">
          <li className="pl-2 pr-4 py-[4px] hover:bg-neutral-100 hover:rounded-[10px] hover:text-black">
            All Products
          </li>
          <li className="px-4 py-[4px] hover:bg-neutral-100 hover:rounded-[10px] hover:text-black ">
            Bed
          </li>
          <li className="px-4 py-[4px] hover:bg-neutral-100 hover:rounded-[10px] hover:text-black">
            Sofa
          </li>
          <li className="px-4 py-[4px] hover:bg-neutral-100 hover:rounded-[10px] hover:text-black">
            Coffee Table
          </li>
          <li className="px-4 py-[4px] hover:bg-neutral-100 hover:rounded-[10px] hover:text-black">
            Consoles
          </li>
          <li className="px-4 py-[4px] hover:bg-neutral-100 hover:rounded-[10px] hover:text-black">
            Tables
          </li>
          <li className="px-4 py-[4px] hover:bg-neutral-100 hover:rounded-[10px] hover:text-black">
            Chairs
          </li>
        </ul>
      </div>
      <div className="max-w-[1140px] m-auto w-full gap-2 pb-4 px-4 sm:px-5 border border-black grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {products.map((product, index) => (
          <div key={index} className="">
            <div className="">
              <Image
                alt="search"
                height="20"
                src={product.path}
                className="w-full object-cover h-[80%] rounded-[10px]"
                width="100"
              />
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center'>
      <button className="p-2 mt-4 lg:mt-6 font-normal border border-black text-black text-[13px] hover:bg-[#D6DED3] flex items-center justify-between">
        Shop all{" "}
        <IoIosArrowRoundForward size={20} className="text-black ml-1" />
      </button>
      </div>
    </div>
  );
}

export default Products;
