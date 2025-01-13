import Image from "next/image";
import React from "react";

const OurService = () => {
  return (
    <section className=" max-w-[1440px] lg:h-screen lg:max-h-[760px] mx-auto flex flex-col  md:flex-row items-center justify-center gap-12 bg-white p-10 rounded-lg">
      <div className="basis-1/2 flex justify-end">
        <Image
          src="/car-4.jpg"
          alt=""
          width={500}
          height={548}
          className="rounded-3xl"
        />
      </div>
      <div className="basis-1/2">
        <h2 className="text-4xl font-bold mb-4">Car services simplified.</h2>
        <p className="text-gray-600 mb-6 max-w-96">
          Rent, choose, and repair with ease. Our convenient locations, diverse
          car types, and reliable repair points ensure a seamless car
          experience.
        </p>
        <div className="flex gap-8">
          <div className="text-center">
            <div className="text-red-600 text-4xl font-bold">49+</div>
            <p className="text-gray-600">Car Types</p>
          </div>
          <div className="text-center">
            <div className="text-red-600 text-4xl font-bold">132</div>
            <p className="text-gray-600">Rental Outlets</p>
          </div>
          <div className="text-center">
            <div className="text-red-600 text-4xl font-bold">34</div>
            <p className="text-gray-600">Repair Points</p>
          </div>
        </div>
        <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
          See All Cars
        </button>
      </div>
    </section>
  );
};

export default OurService;
