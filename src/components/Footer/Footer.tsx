"use client";
import Image from "next/image";
import React from "react";


const Footer = () => {
  return (
    <div className=" mt-24  section">
     
      <div
        className="  flex  flex-wrap flex-1  lg:flex-nowrap  lg:justify-between justify-evenly
       lg:mx-0 mx-12 lg:gap-0 gap-5"
      >
        <div className=" flex gap-5 mt-[6px] flex-col lg:ml-0 -ml-10">
            <div className="flex justify-start items-center gap-2">

          <Image
            src={`/images/logo.png`}
            alt=""
            width={40}
            height={10}

          />
          <span className="font-extrabold text-xl">Urifry</span>
            </div>
          <div className="a flex items-center ">
          <Image
            src={`/images/email.png`}
            alt=""
            width={20}
            height={10}
          />            <span className="a ml-3  ">
              Help@Frybix.com
            </span>
          </div>
          <p className="a flex">
          <Image
            src={`/images/phone.png`}
            alt=""
            width={20}
            height={10}
          />            <span className=" ml-3 ">
              +1 234 456 678 89
            </span>
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" text-[32px] ">Links</h1>
          <p className="hover:text-[#FF5555]   hover:cursor-pointer">
           
            Home
          </p>
          <p className=" hover:text-[#FF5555] cursor-pointer ">
            About Us
          </p>
          <p className=" hover:text-[#FF5555] cursor-pointer ">
            Bookings
          </p>
          <p className=" hover:text-[#FF5555] cursor-pointer ">
            Blog
          </p>
        </div>
        <div className=" flex flex-col gap-4 lg:mt-0 mt-10">
          <h1 className=" text-[32px] ">Legal</h1>
          <p className=" hover:text-[#FF5555] cursor-pointer ">
            Terms of Use
          </p>
          <p className=" hover:text-[#FF5555] cursor-pointer ">
            Privacy Policy
          </p>
          <p className=" hover:text-[#FF5555] cursor-pointer ">
            Cookie Policy
          </p>
        </div>
        <div className=" flex flex-col gap-4 lg:ml-0 ml-10 lg:-mr-0 -mr-10 lg:mt-0 mt-10">
          <h1 className=" text-[32px] ">Product</h1>
          <p className=" hover:text-[#FF5555] cursor-pointer ">
            Take Tour
          </p>
          <p className=" hover:text-[#FF5555] cursor-pointer ">
            Live Chat
          </p>
          <p className=" hover:text-[#FF5555] cursor-pointer ">
            Reviews
          </p>
        </div>
        <div className=" flex flex-col lg:gap-4 gap-2 lg:mt-0 mt-10 lg:mx-0 mx-6">
          <h1 className=" text-[32px] ">
            Newsletter
          </h1>
          <p className=" hover:text-[#FF5555] cursor-pointer ">
            Stay Up To Date
          </p>

          <form className="a bg-white py-2 px-4 lg:w-[340px] w-[300px]  flex gap-3">
            <input
              className=" w-[140px] outline-none  "
              type="text"
              placeholder=" Your email"
            />
            <button className=" w-[160px] lg:h-[61px] h-[51px] rounded-md bg-black text-white  hover:bg-[#FF5555] ease-linear transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>
  
      <div>
        <hr className=" mt-28 " />
        <p className=" my-10 text-center  mb-16">
          Copyright 2022 uifry.com all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;