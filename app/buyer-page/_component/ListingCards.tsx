import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { IoArrowDownCircleOutline } from "react-icons/io5";
const data = [
  { id: 1, amount: "2K+", title: "New Flat Listed" },
  { id: 2, amount: "1K+", title: "New Flat Listed" },
  { id: 3, amount: "1.5K+", title: "New Flat Listed" },
  { id: 4, amount: "1K+", title: "New Flat Listed" },
];

const ListingCards = () => {
  return (
    <div className="container flex justify-between gap-10 mt-40 pb-16">
      {data.map((item, index) => (
        <Card
          key={index}
          className={`p-6 rounded shadow-lg w-full ${
            index % 2 === 0 ? "bg-blue-50" : "bg-orange-50"
          }`}
        >
          <div>
            <h1 className={`text-[40px] font-bold ${
            index % 2 === 0 ? "text-blue-500" : "text-orange-500"
          }`}>{item.amount}</h1>
            <p>{item.title}</p>
          </div>
          <div className={`pt-8 flex items-center justify-between ${
            index % 2 === 0 ? "text-blue-500" : "text-orange-500"
          }`}>
            <Link href="/" className="underline">View All</Link>
            <IoArrowDownCircleOutline className="text-3xl" />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ListingCards;
