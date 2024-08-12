"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCountries } from "@/lib/getCountries";
import { TbHomeSearch } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
const SelectField = () => {
  const { getAllCountries } = useCountries();
  const [locationValue, setLocationValue] = useState("");

  return (
    <div className="py-8 flex justify-between gap-8">
      <div className="w-full">
        <div className="flex gap-2 items-center pb-2">
          <FaLocationDot className="text-lg text-orange-600" />
          <p className="font-semibold">Your Location</p>
        </div>
        <div>
          <Select  required onValueChange={(value) => setLocationValue(value)}>
            <SelectTrigger className="w-full bg-blue-50">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Countries</SelectLabel>
                {getAllCountries().map((item: any) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label} / {item.region}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full">
        <div className="flex gap-2 items-center pb-2">
          <TbHomeSearch className="text-xl text-orange-600" />
          <p className="font-semibold">Property Type</p>
        </div>
        <div>
          <Select required onValueChange={(value) => setLocationValue(value)}>
            <SelectTrigger className="w-full bg-blue-50">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Countries</SelectLabel>
                {getAllCountries().map((item: any) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label} / {item.region}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full">
        <div className="flex gap-2 items-center pb-2">
          <RiMoneyDollarCircleFill className="text-xl text-orange-600" />
          <p className="font-semibold">Budget</p>
        </div>
        <div>
          <Select required onValueChange={(value) => setLocationValue(value)}>
            <SelectTrigger className="w-full bg-blue-50">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Countries</SelectLabel>
                {getAllCountries().map((item: any) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label} / {item.region}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SelectField;
