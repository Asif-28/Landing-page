import Image from "next/image";
import React from "react";
import Phone from "./Phone";

export const Hero: React.FC = () => {
  return (
    <div className="md:flex md:flex-row flex-col px-3 md:px-5 lg:px-0  ">
      <div className="relative lg:w-[50%] mt-10 md:mt-32">
        <div className="absolute -top-28 md:-top-40  md:right-20 -z-10 ">
          <Image
            className=" hidden md:block -rotate-180 backdrop:blur-sm"
            src="/images/Gradient1.png"
            alt="Gradient"
            width={500}
            height={600}
          />
               <Image
            className=" md:hidden "
            src="/images/Gradient1.png"
            alt="Gradient"
            width={350}
            height={600}
          />
        </div>

        <div className=" z-50 ">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold">
            Make The Best Financial Decisions
          </h1>
          <p className="text-[#0006] py-6 font-semibold">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex items-center gap-8 pt-8 cursor-pointer ">
            <div className="w-auto">
              <button className="text-base text-white rounded-md bg-[#000000] px-12 py-4 hover:bg-[#FF5555] ">
                Get Started
              </button>
            </div>
            <div className="flex justify-center items-center gap-2 ">
              <Image
                src={`/images/Play.png`}
                alt="play"
                height={30}
                width={30}
              />
              <span>Watch Video</span>
            </div>
          </div>
          <div className="py-16">
            <Image
            className="hidden md:block"
              src={`/images/hero1.png`}
              height={500}
              width={500}
              alt="banner"
            />
              <Image
              className="md:hidden"
              src={`/images/hero1.png`}
              height={400}
              width={300}
              alt="banner"
            />
          </div>
        </div>
      </div>
      <div>
        <Phone />
      </div>
    </div>
  );
};
