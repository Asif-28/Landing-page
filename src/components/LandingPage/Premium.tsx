"use client";

import Image from "next/image";

const Premium = () => {
  return (
    <div className="section"> <div className="flex flex-col lg:flex-row items-center flex-wrap my-5">
    <div className="lg:w-1/2 flex flex-col items-center space-y-4 max-md:w-full z-10">
      <Image
        src="/images/phone_premium.svg"
        alt="hero"
        width={550}
        height={550}
        className=""
        id="second_section_a"
      />
    </div>

    <div className="lg:w-1/2 text-left z-10 max-lg:p-5" id="second_section_a">
      <p className="flex font-regular text-md mb-4 text-red-500">Features</p>
      <h1 className="text-4xl font-bold flex flex-wrap mb-8">
        UiFry Premium
      </h1>
      <div className="flex flex-wrap gap-2 mb-4 ">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={`/images/Star-05.png`}
            width={25}
            height={20}
            alt=""
            className="flex justify-center items-center"
          />
          <h3 className="text-lg font-semibold mb-4 pt-3">
            Budgeting Intervals
          </h3>
        </div>
        <div></div>
        <p className="max-lg:w-full">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus <br /> tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={`/images/cube-02.png`}
            width={25}
            height={20}
            alt=""
            className="flex justify-center items-center"
          />
          <h3 className="text-lg font-semibold mb-4 pt-3">
            Budgeting Intervals
          </h3>
        </div>
        <p className="max-lg:w-full">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus <br /> tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={`/images/cube-04.png`}
            width={25}
            height={20}
            alt=""
            className="flex justify-center items-center"
          />
          <h3 className="text-lg font-semibold mb-4 pt-3">
            Budgeting Intervals
          </h3>
        </div>
        <p className="max-lg:w-full">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus <br /> tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
    </div>

    <Image
      src="/images/gradientmix.svg"
      alt="hero"
      width={600}
      height={600}
      className="absolute "
      id="second_section_a"
    />
    <Image
      src="/images/gradientmix.svg"
      alt="hero"
      width={400}
      height={400}
      className="absolute  -right-52 max-lg:hidden"
      id="second_section_a"
    />
    <Image
      src="/images/star-1.png"
      alt="hero"
      width={40}
      height={40}
      className="absolute lg:left-16 max-lg:hidden"
      id="second_section_a"
    />
  </div></div>
   
  );
};
export default Premium;
