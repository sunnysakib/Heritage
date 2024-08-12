import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import React from "react";
import { IoRemoveOutline } from "react-icons/io5";
const PropertyBuy = () => {
  const data = [
    {
      head: "Property Buying",
      title: "Efficient and Transparent Home Buying Solutions",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    },
  ];
  return (
    <section className="container pt-20">
      <div className="pt-16 flex lg:flex-row flex-col justify-between gap-10">
        <div>
          <Image
            src={"/assets/images/image1.png"}
            alt="property buy"
            width={592}
            height={504}
          />
        </div>
        <div className="w-[600px] flex flex-col gap-6">
          <p className="text-orange-500 font-medium flex items-center">
            <IoRemoveOutline className="font-bold text-6xlF" /> Property Buying
          </p>
          <h1 className="text-[40px] leading-[45px] text-[#111827] font-bold">
            Efficient and Transparent Home Buying Solutions
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. 
          </p>

          <CustomButton
            iconsBg="text-blue-500"
            bg="bg-blue-50 text-blue-500 hover:bg-blue-100"
            label="Find Property"
          />
        </div>
      </div>
      <div className="pt-20 flex lg:flex-row flex-col justify-between gap-10">
        <div className="w-[600px] flex flex-col gap-6">
          <p className="text-orange-500 font-medium flex items-center">
            <IoRemoveOutline className="font-bold text-6xlF" /> Property Buying
          </p>
          <h1 className="text-[40px] leading-[45px] text-[#111827] font-bold">
            Efficient and Transparent Home Buying Solutions
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. 
          </p>

          <CustomButton
            iconsBg="text-blue-500"
            bg="bg-blue-50 text-blue-500 hover:bg-blue-100"
            label="Find Property"
          />
        </div>
        <div>
          <Image
            src={"/assets/images/image2.png"}
            alt="property buy"
            width={592}
            height={504}
          />
        </div>
      </div>
      <div className="pt-20 flex lg:flex-row flex-col justify-between gap-10">
        <div>
          <Image
            src={"/assets/images/image3.png"}
            alt="property buy"
            width={592}
            height={504}
          />
        </div>
        <div className="w-[600px] flex flex-col gap-6">
          <p className="text-orange-500 font-medium flex items-center">
            <IoRemoveOutline className="font-bold text-6xlF" /> Property Buying
          </p>
          <h1 className="text-[40px] leading-[45px] text-[#111827] font-bold">
            Efficient and Transparent Home Buying Solutions
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. 
          </p>

          <CustomButton
            iconsBg="text-blue-500"
            bg="bg-blue-50 text-blue-500 hover:bg-blue-100"
            label="Find Property"
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyBuy;
