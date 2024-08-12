import React from "react";
import {
  Card,
 
} from "@/components/ui/card";
import { TbSmartHome } from "react-icons/tb";

const OurServices = () => {
  const data = [
    {
      id: 1,
      title: "Advanced Property Search",
      des: "Effortlessly find your dream property with advanced search filters.",
    },
    {
      id: 2,
      title: "Virtual Tours and Multimedia",
      des: "Explore properties through immersive virtual tours and HD photos.",
    },
    {
      id: 3,
      title: "Secure Online Transactions",
      des: "Ensure secure transactions and e-sign documents seamlessly online.",
    },
  ];
  return (
    <section className="container pt-20">
      <h1 className="text-center text-[40px] font-bold">Our Services</h1>

      <div className="flex justify-between gap-8 py-16">
        {data.map((item) => (
          <Card key={item.id} className="p-8 rounded bg-blue-50">
            <div className="flex gap-6">
                <div><TbSmartHome className="text-5xl text-white bg-orange-500 p-2 rounded" /></div>
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">{item.title}</h1>
                <p className="text-[16px] text-[#818181]">{item.des}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
