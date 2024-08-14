import { Suspense } from "react";
import PropertyCard from "./_components/PropertyCard";

const Page = () => {
  return (
    <section className="container py-16">
      <Suspense>
        <PropertyCard />
      </Suspense>
    </section>
  );
};

export default Page;
