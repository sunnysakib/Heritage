"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { BrandLogo } from "./brand-logo";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { TfiAlignRight } from "react-icons/tfi";
import Link from "next/link";
import { useUser } from "@/lib/UserContext";
// xl:px-[112px] lg:px-[80px] px-[30px]
const Navbar = () => {
  const { user, logout }: any = useUser();
  const storedUser = sessionStorage.getItem("user");
  const getUser = storedUser ? JSON.parse(storedUser) : null;
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    logout();
  };

  return (
    <nav className="w-full bg-[rgb(236,245,255)]  ">
      <div className="md:flex justify-between items-center container  py-2 hidden">
        <div className="flex gap-2">
          <Link href="/buyer-page">
            <Button variant="ghost">Buy</Button>
          </Link>
          <Link href="/sell-property">
            <Button variant="ghost">Sell</Button>
          </Link>
          <Button variant="ghost">Services</Button>
        </div>
        <div>
          <BrandLogo />
        </div>
        <div className="flex gap-2">
          <Button variant="ghost">Manage Rentals</Button>
          {user || getUser !== null ? (
            <Button variant="ghost" onClick={() => handleLogout()}>
              Sign Out
            </Button>
          ) : (
            <Button variant="ghost">
              <Link href="/signIn">Sign In</Link>
            </Button>
          )}
        </div>
      </div>

      {/*  mobile view */}
      <div className="flex justify-between items-center xl:px-[112px] lg:px-[80px] px-[30px] py-2 md:hidden">
        <div>
          <BrandLogo />
        </div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <TfiAlignRight />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href="/buyer-page">Buy</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/sell-property">Sell</Link>
              </MenubarItem>
              <MenubarItem>Services</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Manage Rentals</MenubarItem>
              <MenubarItem>
                {user || getUser !== null ? (
                  <Button variant="ghost" onClick={() => handleLogout()}>
                    Sign Out
                  </Button>
                ) : (
                  <Button variant="ghost">
                    <Link href="/signIn">Sign In</Link>
                  </Button>
                )}
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </nav>
  );
};

export default Navbar;
