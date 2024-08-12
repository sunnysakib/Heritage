import Image from "next/image";
import Hero from "./_components/Hero";
import PropertyBuy from "./_components/PropertyBuy";
import OurServices from "./_components/OurServices";

export default function Home() {
  return (
    <main >
      <Hero/>
      <PropertyBuy/>
      <OurServices/>
    </main>
  );
}
