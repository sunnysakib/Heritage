import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselNext1,
  CarouselPrevious,
  CarouselPrevious1,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Card, CardContent } from "@/components/ui/card";
import Ratings from "./Ratings";
const Testimonials = () => {
  return (
    <section className="container pb-16">
      <h1 className="text-[32px] text-center font-semibold py-8">
        Testimonials
      </h1>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="flex flex-col gap-6">
                      {/* <Ratings/> */}
                      <p className="text-center text-[#818181] text-sm">
                        "The level of security provided by CypherPlay is
                        unmatched. I feel confident using my card for both
                        everyday purchases and travel. It's the peace of mind I
                        was looking for."
                      </p>
                      <div className="flex flex-col items-center justify-center">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className="text-xl text-center font-semibold">
                          Sunny Sakib
                        </p>
                        <p className="text-center text-[#6B7280]">
                          Marketing manager, XYZ
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious1 />
        <CarouselNext1 /> */}
      </Carousel>
    </section>
  );
};

export default Testimonials;
