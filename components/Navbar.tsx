import React from "react";
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

const Navbar = () => {
  return (
    <nav className="w-full bg-[rgb(236,245,255)]  ">
      <div className="md:flex justify-between items-center xl:px-[112px] lg:px-[80px] px-[30px] py-2 hidden">
        <div className="flex gap-2">
          <Button variant="ghost">Buy</Button>
          <Button variant="ghost">Sell</Button>
          <Button variant="ghost">Services</Button>
        </div>
        <div>
          <BrandLogo />
        </div>
        <div className="flex gap-2">
          <Button variant="ghost">Manage Rentals</Button>
          <Button variant="ghost">Sign In</Button>
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
              <MenubarItem>Buy</MenubarItem>
              <MenubarItem>Sell</MenubarItem>
              <MenubarItem>Services</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Manage Rentals</MenubarItem>
              <MenubarItem>Sign In</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </nav>
  );
};

export default Navbar;
