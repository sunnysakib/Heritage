"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { usePathname, useSearchParams } from "next/navigation";
const PropertyCard = () => {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<any[]>([]);

  let title = searchParams?.get("title");
  if (title != null) {
    title = title.replace(/ /g, "+");
  }
  let loaction = searchParams?.get("loaction");
  if (loaction != null) {
    loaction = loaction.replace(/ /g, "+");
  }

  const price = searchParams?.get("minPrice");
  const propertyType = searchParams?.get("propertyType");
  let url = new URL("https://heritage-backend.onrender.com/properties/filter");

  const params = new URLSearchParams();

  if (title) params.append("title", title);
  if (loaction !== null) params.append("location", loaction);
  if (propertyType) params.append("propertyType", propertyType);
  if (price !== null) params.append("minPrice", price.toString());

  url.search = params.toString();
  useEffect(() => {
    fetch(`${url.href}`)
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="">
      <div className="flex gap-4 pb-4">
        <Link href="/">
          <Button className="text-white bg-blue-400 hover:bg-blue-400 ">
            Properties({properties.length})
          </Button>
        </Link>
        <Link href="/">
          <Button className="text-black bg-blue-50 hover:bg-blue-100 ">
            New Projects(20)
          </Button>
        </Link>
      </div>
      <Separator />
      <h1 className="font-semibold text-[20px] py-6">400 results rental</h1>
      <div>
        {properties.length !== 0 ? (
          <>
            {properties?.map((item, index) => (
              <div key={index} className="">
                <Card className="p-4 bg-[#F9FAFB] w-[60%]">
                  <div className="flex gap-4">
                    <div className="w-[20%]">
                      <Image
                        src={`https://heritage-backend.onrender.com/images/${item.photo}`}
                        className="w-[152px] h-[184px] rounded-sm"
                        alt="hosue.png"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="w-[80%] flex flex-col gap-4">
                      <div className="flex w-full">
                        <div className="w-[80%] flex flex-col gap-2">
                          <h1 className="text-[18px] font-semibold">
                            {item.title}
                          </h1>
                          <p className="flex gap-1 items-center text-[#6B7280]">
                            <FaLocationDot className="text-lg text-orange-600" />{" "}
                            {item.location}
                          </p>
                        </div>
                        <div className="w-[20%] flex flex-col gap-2">
                          <h1 className="text-[24px] font-bold">
                            ${item.price}
                          </h1>
                          <Link href={`/property-details/${item.id}`}>
                            <Button variant="outline">Bid Poperty</Button>
                          </Link>
                        </div>
                      </div>
                      <div className="flex justify-between gap-1 items-center">
                        <p className=" text-nowrap">Poperty details</p>
                        <div className="w-full">
                          <Separator />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-2">
                          <PiMapPinSimpleAreaBold className="bg-orange-500 p-3 rounded-sm text-5xl text-white" />
                          <div>
                            <p className="text-md font-medium">Total Area</p>
                            <p className="text-xs text-gray-500">852 sqft</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <PiMapPinSimpleAreaBold className="bg-orange-500 p-3 rounded-sm text-5xl text-white" />
                          <div>
                            <p className="text-md font-medium">Total Area</p>
                            <p className="text-xs text-gray-500">852 sqft</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <BsBoundingBoxCircles className="bg-orange-500 p-3 rounded-sm text-5xl text-white" />
                          <div>
                            <p className="text-md font-medium">Total Area</p>
                            <p className="text-xs text-gray-500">852 sqft</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </>
        ) : (
          <h1 className="mb-28">No properties found</h1>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
