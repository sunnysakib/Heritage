"use client";
import React, { useEffect, useState } from "react";
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
import { Input } from "@/components/ui/input";

interface SelectFieldProps {
  setLocation: (location: string) => void;
  setPropertyType: (propertyType: string) => void;
  setMinPrice: (minPrice: number | null) => void;
}
const SelectField: React.FC<SelectFieldProps> = ({
  setLocation,
  setPropertyType,
  setMinPrice,
}) => {
  const { getAllCountries } = useCountries();
  const [locationValue, setLocationValue] = useState("");
  const [properties, setProperties] = useState<any[]>([]);
  useEffect(() => {
    const result = fetch("https://heritage-backend.onrender.com/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div className="py-8 flex md:flex-row flex-col justify-between gap-8">
      <div className="w-full">
        <div className="flex gap-2 items-center pb-2">
          <FaLocationDot className="text-lg text-orange-600" />
          <p className="font-semibold">Your Location</p>
        </div>
        <div>
          <Select required onValueChange={(value) => {setLocationValue(value); setLocation(value)}}>
            <SelectTrigger className="w-full bg-blue-50">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Countries</SelectLabel>
                {getAllCountries().map((item: any) => (
                  <SelectItem key={item.label} value={item.label}>
                    {item.label}
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
          <Select onValueChange={(value) => setPropertyType(value)}>
            <SelectTrigger className="w-full bg-blue-50">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Property Type</SelectLabel>
                <SelectItem value="Apartment">Apartment</SelectItem>
                <SelectItem value="House">House</SelectItem>
                <SelectItem value="Cotage">Cotage</SelectItem>
                <SelectItem value="Old Town">Old Town</SelectItem>
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

          <Input className="bg-blue-50" type="number"   onChange={(e) => setMinPrice(Number(e.target.value))} />
        </div>
      </div>
    </div>
  );
};

export default SelectField;
