"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCountries } from "@/lib/getCountries";
import { SelectGroup } from "@radix-ui/react-select";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

const Page = () => {
  const { getAllCountries } = useCountries();
  const [locationValue, setLocationValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset 
  } = useForm();
  const { toast } = useToast()
  const [error, setError] = useState("");

const storedUser = sessionStorage.getItem("user");
const getUser = storedUser ? JSON.parse(storedUser) : null;
  if (!getUser ) return redirect("/signIn");
  
  const onSubmit = async (data: any) => {
    
    const newData = {
      userId: getUser.id,
      ownerName: getUser.name,
      ...data,
      location: locationValue,
      propertyType: typeValue,
      category: categoryValue,
    };
    const form = new FormData();
    form.append("userId", getUser.id);
    form.append("ownerName", getUser.name);
    form.append("title", newData.title);
    form.append("description", newData.description);
    form.append("propertyType", typeValue);
    form.append("category", categoryValue);
    form.append("bathroom", newData.bathroom);
    form.append("bedroom", newData.bedroom);
    form.append("location", locationValue);
    form.append("price", newData.price);
    form.append("photo", newData.photo[0]);
    try {
      const response = await axios.post(
        "https://heritage-backend.onrender.com/properties",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status == 201) {
        toast({
          title: "Your property has been listed",
        })
        setError("");
        reset();
      }
    } catch (error: any) {
      setError(error.response?.data?.message || "Something went wrong!");
    }
      
  };
  return (
    <div>
      <div className=" flex items-center justify-center bg-[url('/assets/images/sell1.jpg')] bg-cover bg-center h-[300px]">
        <h1 className="text-6xl font-bold text-white bg-blue-500 p-4 rounded-md">
          Post For Sell Property
        </h1>
      </div>
      <div className="container flex justify-center py-16">
        <Card className="w-full border-none shadow-none">
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>For Sale By Owner</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    required
                    id="title"
                    placeholder="Enter title"
                    {...register("title")}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Description</Label>
                  <Textarea required id="des" {...register("description")} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="type">Property Type</Label>
                  <Select
                    required
                    onValueChange={(value) => setTypeValue(value)}
                  >
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="Apartment">Apartment</SelectItem>
                      <SelectItem value="House">House</SelectItem>
                      <SelectItem value="Cotage">Cotage</SelectItem>
                      <SelectItem value="Old Town">Old Town</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="type">Category</Label>
                  <Select
                    required
                    onValueChange={(value) => setCategoryValue(value)}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="buy">Buy</SelectItem>
                      <SelectItem value="rent">Rent</SelectItem>
                      <SelectItem value="plot">Plot</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Bathroom</Label>
                  <Input
                    required
                    type="number"
                    id="bathroom"
                    {...register("bathroom")}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="bedroom">Bedroom</Label>
                  <Input
                    required
                    type="number"
                    id="bedroom"
                    {...register("bedroom")}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="location">Location</Label>
                  <Select
                    required
                    onValueChange={(value) => setLocationValue(value)}
                  >
                    <SelectTrigger className="">
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
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    required
                    type="number"
                    id="price"
                    {...register("price")}
                  />
                </div> 
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="photos">Photos</Label>
                  <Input
                    required
                    id="photo"
                    type="file"
                    {...register("photo")}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p></p>
              <Button type="submit">Create</Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Page;
