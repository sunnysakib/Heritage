"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import SearchBar from "./_component/SearchBar";
import SelectField from "./_component/SelectField";
import CustomButton from "@/components/CustomButton";
import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import ListingCards from "./_component/ListingCards";
import PopularPopertyCarousel from "./_component/PopularPopertyCarousel";
import { Separator } from "@/components/ui/separator";
import NewListedCarousel from "./_component/NewListedCarousel";
import Testimonials from "./_component/Testimonials";
import { Skeleton } from "@/components/ui/skeleton";

const data = ["Buy", "Rent", "PG", "Plot", "Commercial"];

const Page = () => {
  return (
    <section className="">
      <div>
        <div className="bg-[url('/assets/images/image4.jpeg')] bg-cover bg-center h-[310px]">
          <Suspense fallback={<SkeletonLoading />}>
            <SearchField />
          </Suspense>
        </div>
      </div>

      <ListingCards />

      <PopularPopertyCarousel />

      <div className="container pb-8">
        <Separator />
      </div>

      <NewListedCarousel />

      <Testimonials />
    </section>
  );
};

function SearchField() {
  const [location, setLocation] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [url, setUrl] = useState("");
  const params = new URLSearchParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    const getUser = storedUser ? JSON.parse(storedUser) : null;
    if (!getUser) return redirect("/signIn");
  }, []);

  useEffect(() => {
    fetchProperties();
    setUrl(`http://localhost:3000/search-property?${params.toString()}`);
  }, [searchQuery, location, propertyType, minPrice]);

  const fetchProperties = () => {
    if (searchQuery) params.append("title", searchQuery);
    if (location) params.append("location", location);
    if (propertyType) params.append("propertyType", propertyType);
    if (minPrice !== null) params.append("minPrice", minPrice.toString());
  };
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const search = searchParams.get("filter");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Search query:", query);
  };
  return (
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
        <form>
          <SearchBar onSearch={handleSearch} />
          <SelectField
            setLocation={setLocation}
            setPropertyType={setPropertyType}
            setMinPrice={setMinPrice}
          />
          <Link href={url}>
            <Button className="bg-blue-500 hover:bg-blue-600 w-full">
              <CiSearch className="mr-2 h-4 w-4" /> Find Property
            </Button>
          </Link>
        </form>
      </Card>
    </div>
  );
}

function SkeletonLoading() {
  return (
    <section className="">
      <div>
        <div className=" h-[310px]">
          <div className=" flex justify-center pt-20 mx-4">
            <Skeleton className="p-6 w-[985px]" />
          </div>
        </div>
      </div>

      <div className="container flex md:flex-row flex-col justify-between gap-10 md:mt-40 mt-[360px]  pb-16">
        <Skeleton className="p-6 rounded shadow-lg w-full" />
        <Skeleton className="p-6 rounded shadow-lg w-full" />
        <Skeleton className="p-6 rounded shadow-lg w-full" />
        <Skeleton className="p-6 rounded shadow-lg w-full" />
      </div>
    </section>
  );
}

export default Page;
