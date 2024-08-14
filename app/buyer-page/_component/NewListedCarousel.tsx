"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BiSolidCheckbox } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const NewListedCarousel = () => {
  const [properties, setProperties] = useState<any[]>([]);
  useEffect(() => {
    const result = fetch("https://heritage-backend.onrender.com/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div className="container w-full pb-10">
      <div className="flex justify-between items-center pb-4">
        <h1 className="md:text-[32px] text-[24px] font-semibold">New Liste Properties</h1>
        <Link className="underline font-medium text-blue-500" href="/">
          See all porperty
        </Link>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {properties.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Link href={`property-details/${item.id}`} className="shadow-md">
                <Card className="px-0 rounded-none bg-[#F9FAFB]">
                  <div className="p-0 cursor-pointer hover:bg-gray-100 flex flex-col items-center justify-center">
                    <div>
                      <Image
                        src={`https://heritage-backend.onrender.com/images/${item.photo}`}
                        className="w-[500px] h-[200px]"
                        alt="property buy"
                        width={485}
                        height={200}
                      />
                    </div>
                    <div className="flex justify-between w-full px-4 py-4 border-b">
                      <Badge className="bg-[#C5E2FF] hover:bg-[#C5E2FF] text-black rounded-sm">
                        {item.propertyType}
                      </Badge>
                      <p className="flex items-center gap-1"><BiSolidCheckbox className="text-orange-500"/>Ready to Move</p>
                    </div>
                    <div className="w-full flex flex-col px-4 gap-y-1 py-4">
                        <h1 className="text-[20px] font-semibold">{item.title}</h1>
                        <p className="flex gap-1 items-center text-[#6B7280]"><FaLocationDot className="text-lg text-orange-600" /> {item.location}</p>
                        <p className="text-[24px] font-semibold pt-4">$ {item.price}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default NewListedCarousel;
