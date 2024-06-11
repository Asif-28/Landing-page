"use client";
import Image from "next/image";
import { useState } from "react";

export const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="header">
      <div className="flex justify-between py-8 px-3 sm:px-0 md:px-6 lg:px-0">
        <nav className=" cursor-pointer flex">
          <ul className="md:flex md:items-center gap-10 text-[1.1rem] hidden ">
            <li className="flex justify-center items-center gap-3">
              <Image
                src={"/images/logo.png"}
                width={40}
                height={40}
                alt="logo"
              />
              <span className="font-bold text-[#000000] text-[2rem]">
                uifry
              </span>
            </li>
            {["Home", "About Us", "Pricing", "Features"].map((item) => (
              <li
                key={item}
                className={`${
                  activeItem === item
                    ? "text-[#FF5555] font-extrabold"
                    : "text-[#000] font-semibold"
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          {/* mobile */}

          <ul className="md:hidden">
            <li className="flex justify-center items-center gap-1">
              <Image
                src={"/images/logo.png"}
                width={40}
                height={40}
                alt="logo"
              />
              <span className="font-bold text-[#000000] text-[2rem]">
                uifry
              </span>
            </li>
          </ul>
        </nav>
        <button className="text-base text-white rounded-md bg-[#000000] px-8 py-3 sm:px-12 sm:py-4 hover:bg-[#FF5555]">
          Download
        </button>
      </div>
    </div>
  );
};
