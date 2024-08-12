"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import SearchBar from "./_component/SearchBar";
import SelectField from "./_component/SelectField";
import CustomButton from "@/components/CustomButton";
import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import ListingCards from "./_component/ListingCards";
import PopularPopertyCarousel from "./_component/PopularPopertyCarousel";
import { Separator } from "@/components/ui/separator";
import NewListedCarousel from "./_component/NewListedCarousel";

const data = ["Buy", "Rent", "PG", "Plot", "Commercial"];

const page = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const search = searchParams.get("filter");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Implement your search logic here
  };

  return (
    <section className="">
      <div>
        <div className="bg-[url('/assets/images/image4.jpeg')] bg-cover bg-center h-[310px]">
          <div className=" flex justify-center pt-20 mx-4">
            <Card className="p-6 w-[985px] z-20">
              <div className="flex gap-4 pb-8">
                {data.map((item, index) => (
                  <Link
                    key={index}
                    href={pathname + "?" + createQueryString("filter", item)}
                    className={cn(
                      search === item
                        ? "border-b-2 border-blue-600 pb-2 text-blue-600 flex-shrink-0"
                        : "opacity-70 flex-shrink-0"
                    )}
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <SearchBar onSearch={handleSearch} />
              <SelectField />
              <Button className="bg-blue-500 hover:bg-blue-600 w-full">
                <CiSearch className="mr-2 h-4 w-4" /> Find Property
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <ListingCards />

      <PopularPopertyCarousel />

      <div className="container pb-8">
        <Separator />
      </div>

      <NewListedCarousel />
    </section>
  );
};

export default page;
