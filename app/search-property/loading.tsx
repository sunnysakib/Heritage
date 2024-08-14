import { Skeleton } from "@/components/ui/skeleton";

export default function SearchLoading() {
  return (
    <section className="container py-16">
      
      <div className="flex gap-4 pb-4">
        <Skeleton className=" w-[50px] rounded-lg" />
        <Skeleton className=" w-[50px] rounded-lg" />
      </div>
      <div>
        <h1 className="font-semibold text-[20px] py-6">400 results rental</h1>
      </div>
      <Skeleton className="h-72 w-[60%] rounded-lg" />
      <Skeleton className="h-72 w-[60%] rounded-lg" />
      <Skeleton className="h-72 w-[60%] rounded-lg" />
      <Skeleton className="h-72 w-[60%] rounded-lg" />
    </section>
  );
}
