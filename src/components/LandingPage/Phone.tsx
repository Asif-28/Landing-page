import Image from "next/image";
import React from "react";

const Phone = () => {
  return (
    <div className="">
      <div className="hidden lg:block md:relative">
        <Image
          className="absolute top-0 z-40 "
          src={`/images/phonel1.png`}
          height={1000}
          width={500}
          alt="phone-1"
        />
        <Image
          className="absolute left-24 top-14 z-30"
          src={`/images/phonel2.png`}
          height={800}
          width={500}
          alt="phone-2"
        />
        <Image
          className="absolute left-48 top-28 z-20"
          src={`/images/phonel1.png`}
          height={800}
          width={500}
          alt="phone-3"
        />
        <Image
          className="relative top-10 left-36 z-10 "
          src={`/images/Ring.png`}
          alt="ring"
          height={800}
          width={600}
        />
        <Image
          className="absolute -bottom-32 right-1 z-0 backdrop:blur-md"
          src="/images/Gradient1.png"
          alt="Gradient"
          width={800}
          height={300}
        />
      </div>
    </div>
  );
};

export default Phone;
