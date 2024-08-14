"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
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
import { useUser } from "@/lib/UserContext";

const data = ["Buy", "Rent", "PG", "Plot", "Commercial"];

const Page = () => {
  const storedUser = sessionStorage.getItem("user");
  const getUser = storedUser ? JSON.parse(storedUser) : null;
  if (!getUser) return redirect("/signIn");
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
    setSearchQuery(query);
    console.log("Search query:", query);
  };

  const [location, setLocation] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [properties, setProperties] = useState<any[]>([]);

  const params = new URLSearchParams();
  const [url, setUrl] = useState("");
  const fetchProperties = () => {
    if (searchQuery) params.append("title", searchQuery);
    if (location) params.append("location", location);
    if (propertyType) params.append("propertyType", propertyType);
    if (minPrice !== null) params.append("minPrice", minPrice.toString());
    
    
  };

  useEffect(() => {
    fetchProperties();
    setUrl(`http://localhost:3000/search-property?${params.toString()}`);
  }, [searchQuery, location, propertyType, minPrice]);

  // const handleSearchResult = () => {
  //   fetchProperties();
  //   // redirect(`http://localhost:5000/properties?${params.toString()}`)
  // };

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
              <form>
                <SearchBar onSearch={handleSearch} />
                <SelectField
                  setLocation={setLocation}
                  setPropertyType={setPropertyType}
                  setMinPrice={setMinPrice}
                />
                <Link href={url}>
                  <Button
                    className="bg-blue-500 hover:bg-blue-600 w-full"
                  >
                    <CiSearch className="mr-2 h-4 w-4" /> Find Property
                  </Button>
                </Link>
              </form>
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

      <Testimonials />
    </section>
  );
};

export default Page;
