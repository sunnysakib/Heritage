import { Skeleton } from "@/components/ui/skeleton";

export default function buyLoading() {
  return (
    <section className="container py-16">
      
      <div className="flex gap-4 pb-4">
        <Skeleton className=" w-[50px] rounded-lg" />
        <Skeleton className=" w-[50px] rounded-lg" />
      </div>
      <div>
      </div>
      <Skeleton className="h-72 w-[60%] rounded-lg" />
      <Skeleton className="h-72 w-[60%] rounded-lg" />
      <Skeleton className="h-72 w-[60%] rounded-lg" />
      <Skeleton className="h-72 w-[60%] rounded-lg" />
    </section>
  );
}
