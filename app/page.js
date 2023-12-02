import React from "react";
import ServiceCard from "@/components/ServiceCard";
const page = () => {
  return (
    <div className="px-24">
      <div className="h-[90vh]">
        <div className="flex justify-center gap-[180px]  mt-[0px]  items-center">
          <div className="flex flex-col ">
            <p className="text-[50px] font-bold w-[600px] ">
              All web3 game news at your fingertips. 
            </p>
            
            <p className="text-[16px] mt-5 mb-10 font-light  w-[600px] tracking-wide">
              A <span className="text-purple-600 font-semibold">NewsHub</span>{" "}
              to gain knowledge about the games developed in decentralized
              environment all over the world.
            </p>
            <div className="text-lg font-semibold flex gap-10">
              <p>
                <span className="w-[10px] h-[10px] inline-block border-2 border-solid rounded-full mr-3 bg-purple-500 border-purple-500"></span>
                Web3
              </p>
              <p>
                <span className="w-[10px] h-[10px] inline-block border-2 border-solid rounded-full mr-3 bg-purple-500 border-purple-500"></span>
                Gaming
              </p>
              <p>
                <span className="w-[10px] h-[10px] inline-block border-2 border-solid rounded-full mr-3 bg-purple-500 border-purple-500"></span>
                News
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative w-fit">
            <img
              src="/stick1.png"
              alt=""
              className="object-contain h-[400px] w-[400px] joystick"
            />

            <div class="circles ">
              <div class="circle1"></div>
              <div class="circle2"></div>
              <div class="circle3"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  mt-[0px] mb-32">
        <p className="text-[40px] font-bold mb-5"> Services</p>
        <div className="grid px-5">
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default page;
