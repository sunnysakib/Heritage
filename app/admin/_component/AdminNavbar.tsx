import { BrandLogo } from "@/components/brand-logo";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TfiAlignRight } from "react-icons/tfi";

const AdminNavbar = () => {
  return (
    <nav className="w-full bg-[rgb(236,245,255)]">
      <div className="container flex justify-between items-center py-3">
        <div>
          <BrandLogo />
        </div>
        <div>
          <Sheet>
            <SheetTrigger><TfiAlignRight className="w-6 h-6" /></SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
