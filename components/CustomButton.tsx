"use client";
import React from "react";
import { Button } from "./ui/button";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
const CustomButton = ({ iconsBg, bg, label }: any) => {
  return (
    <Link href="/buyer-page">
      <Button className={bg}>
        <CiSearch className={`${iconsBg} mr-2 h-4 w-4`} /> {label}
      </Button>
    </Link>
  );
};

export default CustomButton;
