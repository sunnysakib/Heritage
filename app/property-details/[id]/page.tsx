"use client";
import { HomeMap } from "@/components/PropertyMap";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
const page = ({ params }: { params: { id: string } }) => {
  const [property, setProperty] = useState<any[]>([]);
  const [maxBid, setMaxBid] = useState<any[]>([]);
  console.log(maxBid);
  const storedUser = sessionStorage.getItem("user");
  const getUser = storedUser ? JSON.parse(storedUser) : null;
  if (!getUser) return redirect("/signIn");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    const result = fetch(
      `https://heritage-backend.onrender.com/properties/details/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => setProperty(data));

    const bit = fetch(
      `https://heritage-backend.onrender.com/bid/max/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => setMaxBid(data.data));


  }, []);
  const [error, setError] = useState("");
  const onSubmit = async (data: any) => {
    const newData = {
      userId: getUser.id,
      ...data,
      name: getUser.name,
      email: getUser.email,
      propertyId: property[0]?.id,
      propertyName: property[0]?.title,
    };

    try {
      const response = await fetch("https://heritage-backend.onrender.com/bid/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      const result = await response.json();

      if (result.message === "created") {
        toast({
          title: "Your Bid has been placed",
        });
        setError("");
        reset();
      } else {
        setError(result.message);
      }
    } catch (error) {
      console.error("Error checking user:", error);
    }
  };
  return (
    <div className="container">
      <div className=" mx-auto mt-10 mb-12">
        <h1 className="font-medium text-2xl mb-5">
          {property[0]?.title} / {property[0]?.location}
        </h1>
        <div className="relative h-[550px]">
          <Image
            alt="Image of Home"
            src={`https://heritage-backend.onrender.com/images/${property[0]?.photo}`}
            fill
            className="rounded-lg h-full object-cover w-full"
          />
        </div>

        <div className="flex lg:flex-row flex-col gap-y-10 justify-between gap-x-16 mt-8">
          <div className="lg:w-[65%]">
            <h3 className="text-xl font-medium pb-2">
              {property[0]?.location}
            </h3>
            <div className="flex gap-x-2 text-muted-foreground">
              <p className="flex items-center gap-2">
                <IoBedOutline className="text-[20px] text-blue-500" />{" "}
                {property[0]?.bedroom} Bedrooms
              </p>{" "}
              *{"  "}
              <p className="flex items-center gap-2">
                <MdOutlineBathtub className="text-[20px] text-blue-500" />{" "}
                {property[0]?.bathroom} Bathrooms
              </p>
            </div>

            <div className="flex items-center mt-6">
              <div className="flex flex-col">
                <h3 className="font-medium">
                  Hosted by {property[0]?.ownerName}
                </h3>
                <p className="text-sm text-muted-foreground">Host since 2024</p>
              </div>
            </div>

            <Separator className="my-7" />

            <div className="flex gap-16">
              <p className="flex items-center gap-2">
                <TbCategory className="text-4xl" /> Propert type{" "}
                {property[0]?.propertyType}
              </p>
              <p className="flex items-center gap-2">
                <TbCategory className="text-4xl" /> Category{" "}
                {property[0]?.category}
              </p>
            </div>

            <Separator className="my-7" />

            <p className="text-muted-foreground">{property[0]?.description}</p>

            <Separator className="my-7" />

            <HomeMap locationValue={property[0]?.value as string} />
          </div>

          <div className="lg:w-[35%]">
            <Card className="w-full h-fit bg-blue-50">
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardHeader>
                  <p className=" text-md text-gray-600">Property Value</p>
                  <CardTitle className="text-xl font-bold">
                    ${property[0]?.price}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="title">Bid amount</Label>
                      <Input
                        className="bg-white"
                        required
                        type="number"
                        id="title"
                        {...register("bidAmount")}
                      />
                      <div className="flex flex-col space-y-1.5 pt-8">
                        <Slider
                          className="bg-blue-500"
                          value={[Number(property[0]?.bid)]}
                          max={property[0]?.price}
                          step={1}
                        />
                      </div>
                      {property[0]?.bid == 0 ? (
                        <p>Not bidded yet</p>
                      ) : (
                        <p>Already bidded ${property[0]?.bid}</p>
                      )}
                      <div className="flex flex-col space-y-1.5 pt-8">
                        <Button type="submit" className="bg-blue-500">
                          Bid Property
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </form>
            </Card>
            <div className="felx flex-col gap-y-2">
              <h1 className="font-medium text-xl my-3">
                Current heighest Bidder Info
              </h1>
            <p>Bidder Name {maxBid[0]?.name}</p>
            <p>Bid {maxBid[0]?.bidAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
