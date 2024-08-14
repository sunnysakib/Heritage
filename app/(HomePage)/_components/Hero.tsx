import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('/assets/images/hero.png')] bg-cover bg-center h-[500px]">
      <div className="flex flex-col gap-y-4 items-center justify-center h-full">
        <h1 className="lg:w-[696px] text-wrap  text-center text-6xl font-bold text-white">
          Your Portal to India&apos;s Exquisite Real Estate
        </h1>
        <p className="lg:w-[696px] text-wrap text-center text-[16px]  text-white">
          Seamlessly connecting you to the heartbeat of India&apos;s prime
          properties.
        </p>
        <CustomButton iconsBg="text-white" bg="bg-blue-500 hover:bg-blue-600" label="Find Property" />
      </div>
    </div>
  );
};

export default Hero;
