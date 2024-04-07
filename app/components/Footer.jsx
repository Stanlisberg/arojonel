import React from "react";
import Image from "next/image";

//-----initial hero bg-color
// bg-[#D6DED3]

function Footer() {
  return (
    <div className="bg-gray-300 py-8">
      <div className="text-[12px] grid grid-col-1 grid-cols-12 max-w-[1140px] m-auto w-full py-5 px-4 :sm:px-5">
        <div className="col-span-12 sm:col-span-10 lg:col-span-4 pr-2">
          <h1 className='text-[20px] font-[600]'>Arojonel</h1>
          <p className='mt-4'>
            Arojonel furniture designs, produces and sells furniture items for
            homes and businesses. We offer a wide range of products such as
            chairs, tables, sofas, beds, storage solutions and home decor items.
          </p>
          <ul className="flex mt-4 cursor-pointer">
            <li className="pr-2">
              <Image
                alt="search"
                height="20"
                src="icons/facebook.svg"
                className="w-[20px] object-cover h-full"
                width="20"
              />
            </li>
            <li className="px-2">
              <Image
                alt="search"
                height="20"
                src="icons/instagram.svg"
                className="w-[20px] object-cover h-full"
                width="20"
              />
            </li>
            <li className="px-2">
              <Image
                alt="search"
                height="20"
                src="icons/twitter.svg"
                className="w-[20px] object-cover h-full"
                width="20"
              />
            </li>
            <li className="px-2">
              <Image
                alt="search"
                height="20"
                src="icons/whatsapp.svg"
                className="w-[20px] object-cover h-full"
                width="20"
              />
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2 md:col-span-3 col-span-12 scroll mt-4 lg:mt-0">
          <h1 className='text-[20px] font-[600]' >Links</h1>
          <ul className='mt-4'>
            <li className='pb-1'>My Account</li>
            <li className='py-1'>Help</li>
            <li className='py-1'>Check out</li>
            <li className='py-1'>Terms & Condition</li>
            <li className='py-1'>Refund Policy</li>
          </ul>
        </div>
        <div className="lg:col-span-2 md:col-span-3 col-span-12 mt-4 lg:mt-0">
          <h1 className='text-[20px] font-[600]'>Our Collections</h1>
          <ul className='mt-4'>
            <li className='pb-1'>Beds</li>
            <li className='py-1'>Sofa</li>
            <li className='py-1'>Coffee Table</li>
            <li className='py-1'>Consoles</li>
            <li className='py-1'>Table</li>
          </ul>
        </div>
        <div className="lg:col-span-4 md:col-span-6 col-span-12 mt-4 lg:mt-0">
          <h1 className='text-[20px] font-[600]'>Subscribe to our Newsletter</h1>
          <p className='mt-4'>
            Subscribe now and be the first to know about our special promotions,
            discounts and offers.
          </p>
          <div className='flex mt-6'>
            <input
              type="name"
              placeholder="Enter your email address"
              className="bg-gray-300 rounded-[5px] border border-black h-7 w-[190px] text-[13px] placeholder:text-[13px] outline-none pl-4 text-zinc-500 font-normal"
            />
            <button className="ml-[4px] p-1 px-2 font-normal rounded-[5px] text-black text-[13px] bg-white hover:bg-[black] hover:text-white flex items-center justify-between">
              <Image
                alt="search"
                height="20"
                src="icons/subscribe.svg"
                className="w-[20px] object-cover h-full"
                width="20"
                color=''
              />
              <p className="px -2">Subscribe </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
