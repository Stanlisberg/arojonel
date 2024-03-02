import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <div className="w-full h-[100vh]">
        <Image
          src="/about/leather.jpg"
          alt="image"
          height="0"
          width="200"
          className="w-[100%] h-full object-cover"
        />
        <div className="max-w-[1140px] m-auto">
          <div className="absolute top-[31%] max-w-[600px]  h-full flex flex-col text-neutral-900 p-4">
            <h1 className="font-bold text-[35px] ">
              Welcome To Our Furniture Haven
            </h1>
            <h2 className="text-4xl py-4 italic">Where Style Meets Comforts</h2>
            <p className="text-white opacity-90">
              Expore our curated collection of exquisite furniture pieces,
              thoughtfully designed to enhance your living spaces, offices and
              homes. From timeless classics to componentsntemporary marvels, we
              offer a diverse range of high-quality furnishings crafted to
              elevaate your living and work spaces.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex max-w-[1140px] m-auto w-full lg:pt-20 py-10 px-4 sm:px-5">
        <div className="w-[100%] lg:w-[50%] py-5 lg:py-16 text-[13px]">
          <h1 className="text-2xl font-[600]">Why Choose Us..</h1>
          <p className="mt-4 text-[#6A6A6A]">
            {" "}
            We offer a perfect blend of aesthetis and functionality as you
            browse through our selection making every space a reflection of your
            unique taste.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div>
              <Image
                src="about/truck.svg"
                alt="image"
                height="0"
                width="200"
                className="w-[20px]"
              />
              <h1 className="font-[600] text-[16px] my-2">
                Customer Satisfaction
              </h1>
              <p className='text-[#6A6A6A]'>
                Join a community of satisfied customers who have transformed
                their homes with our top-notch furniture and service.
              </p>
            </div>
            <div>
              <Image
                src="about/shop.svg"
                alt="image"
                height="0"
                width="200"
                className="w-[17px]"
              />
              <h1 className="font-[600] text-[16px] my-2">Easy to Setup</h1>
              <p className='text-[#6A6A6A]'>
                Each piece in our collection is crafted with precision and
                attention to detail, ensuring durability and longevity
              </p>
            </div>
            <div>
              <Image
                src="about/support.svg"
                alt="image"
                height="0"
                width="200"
                className="w-[20px]"
              />
              <h1 className="font-[600] text-[16px] my-2">24/7 Support</h1>
              <p className='text-[#6A6A6A]'>
                Our dedicated team is committed to providing personalized
                service, from expert advice to seamless delivery
              </p>
            </div>
            <div>
              <Image
                src="about/return.svg"
                alt="image"
                height="0"
                width="200"
                className="w-[17px]"
              />
              <h1 className="font-[600] text-[16px] my-2">
                Aesthetical Masterpiece.
              </h1>
              <p className='text-[#6A6A6A]'>
                Embrace the latest trends with our modern and innovative
                furniture designs that elevate your living spaces.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-[50%]">
          <div className="relative">
            <Image
              src="about/right-dot.svg"
              alt="image"
              height="0"
              width="200"
              className="md:w-40 w-full h-[20vh]"
            />
            <Image
              src="/about/right-image2.jpg"
              alt="image"
              height="0"
              width="500"
              className="absolute w-[68%] top-[45%] left-[12%] h-[25rem] "
            />
          </div>
        </div>

        {/*------------mobile view--------------*/}
        <div className="lg:hidden max-w-[500px] sm:max-w-[900px] mx-auto mt-10">
          <Image
            src="/about/right-image2.jpg"
            alt="image"
            height="0"
            width="500"
            className="w-full h-[45vh] object-fit rounded-[10px]"
          />
        </div>
      </div>
      <div className="lg:flex max-w-[1140px] m-auto w-full pb-10 lg:py-[120px] px-4 sm:px-5">
        <div className="hidden lg:block w-[50%]">
          <div className="relative">
            <div className="flex justify-end">
              <Image
                src="about/left-dot.svg"
                alt="image"
                height="0"
                width="200"
                className="justify-center md:w-40 w-full h-[20vh] "
              />
            </div>
            <Image
              src="/about/left-image.jpg"
              alt="image"
              height="0"
              width="500"
              className="absolute w-[48%] top-[45%] left-[13%] h-[23rem]"
              // className="absolute w-[48%] top-[45%] left-[13%] h-[23rem]"
            />
            <Image
              src="about/stool.svg"
              alt="image"
              height="0"
              width="500"
              className="absolute w-[11.7rem] top-[11.3rem] left-[54%] h-[23rem]"
              // className="absolute w-[11.7rem] top-[12rem] left-[54%] h-[23rem]"
            />
            <Image
              src="/about/tv.jpg"
              alt="image"
              height="0"
              width="500"
              className="absolute w-[25%] top-[45%] left-[63%] h-[9rem] "
              // className="absolute w-[25%] top-[45%] left-[63%] h-[9rem] "
            />
          </div>
        </div>
        <div className="lg:w-[50%] w-full py-5 lg:py-16 text-[13px]">
          <h1 className="text-2xl font-[600] text-start lg:text-end">
            Modern Designs..
          </h1>
          <p className="mt-4 lg:ml-4 text-[#6A6A6A]">
            {" "}
            Immerse yourself in the beauty of modern design. Our collection
            showcases furniture pieces that embrace clean lines, innovative
            materials, and minimalist aesthetics. Elevate your living spaces
            with functional and stylish pieces that embody the essence of
            contemporary living.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6 lg:ml-4">
            <div className="flex items-start">
              <Image
                src="about/small-dot.svg"
                alt="image"
                height="0"
                width="200"
                className="w-[20px] mt-1"
              />
              <p className="ml-2 text-[#6A6A6A]">
                Incorporation of technology seamlessly into furniture design for
                a modern lifestyle.
              </p>
            </div>
            <div className="flex items-start">
              <Image
                src="about/small-dot.svg"
                alt="image"
                height="0"
                width="200"
                className="w-[20px] mt-1"
              />
              <p className="ml-2 text-[#6A6A6A]">
                Design that creates an open and airy feel, avoiding overcrowded
                or heavy elements.
              </p>
            </div>
            <div className="flex items-start">
              <Image
                src="about/small-dot.svg"
                alt="image"
                height="0"
                width="200"
                className="w-[20px] mt-1"
              />
              <p className="ml-2 text-[#6A6A6A]">
                Furniture that adapts to various settings and complements
                diverse interior styles.
              </p>
            </div>
            <div className="flex items-start">
              <Image
                src="about/small-dot.svg"
                alt="image"
                height="0"
                width="200"
                className="w-[20px] mt-1"
              />
              <p className='text-[#6A6A6A] ml-2'>
                Striking a balance between contemporary trends and timeless
                design principles for enduring style.
              </p>
            </div>
          </div>
        </div>
        {/*------------mobile view--------------*/}
        <div className="lg:hidden sm:max-w-[900px] max-w-[500px] mx-auto mt-10">
          <Image
            src="/about/left-image.jpg"
            alt="image"
            height="0"
            width="500"
            className=" w-full h-[45vh] object-fit rounded-[10px]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
