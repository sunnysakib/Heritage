import React from "react";
import { BrandLogo } from "./brand-logo";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <section className=" bg-blue-50">
      <div className="container grid md:grid-cols-4 lg:grid-cols-8 grid-cols-2 gap-10 py-16">
        <div className="col-span-3 flex flex-col gap-4">
          <BrandLogo />
          <p>
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-[#475467]">
          <p className="text-[#667085]">Overview</p>
          <Link href="/">Solutions</Link>
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Tutorials</Link>
        </div>
        <div className="flex flex-col gap-2 text-[#475467]">
          <p className="text-[#667085]">Company</p>
          <Link href="/">About Us</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Press</Link>
          <Link href="/">News</Link>
        </div>
        <div className="flex flex-col gap-2 text-[#475467]">
          <p className="text-[#667085]">Resourse</p>
          <Link href="/">Blogs</Link>
          <Link href="/">Newsletter</Link>
          <Link href="/">Events</Link>
          <Link href="/">Supports</Link>
        </div>
        <div className="flex flex-col gap-2 text-[#475467]">
          <p className="text-[#667085]">Social</p>
          <Link href="/">Twitter</Link>
          <Link href="/">Telegram</Link>
          <Link href="/">Facebook</Link>
          <Link href="/">Dribble</Link>
        </div>
        <div className="flex flex-col gap-2 text-[#475467]">
          <p className="text-[#667085]">Legal</p>
          <Link href="/">Term</Link>
          <Link href="/">Privacy</Link>
          <Link href="/">Cookies</Link>
          <Link href="/">Licences</Link>
        </div>
      </div>
      <div className="container flex justify-between border-t-2 border-blue-100 text-[#667085] py-10">
        <p>© 2024 Heritage- Nest . All rights reserved.</p>
        <div className="flex gap-3 text-blue-600 text-2xl">
          <Link href="/">
            {" "}
            <FaTwitter />
          </Link>
          <Link href="/">
            {" "}
            <FaSquareFacebook />
          </Link>
          <Link href="/">
            {" "}
            <FaLinkedin />
          </Link>
          <Link href="/">
            {" "}
            <FaInstagramSquare />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
