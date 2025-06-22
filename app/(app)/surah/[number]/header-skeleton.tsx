import { Skeleton } from "@/components/ui/skeleton";

const HeaderSkeleton = async () => {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center rounded-[10px] p-4 text-center text-white">
      <div className="flex flex-col items-center justify-center">
        <Skeleton className="mb-2 h-8 w-32" />
        <Skeleton className="h-5 w-24" />
      </div>
      <div className="my-4 w-full border border-white"></div>
      <div className="flex flex-col items-center justify-center gap-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="mt-3 h-9 w-20" />
      </div>
    </div>
  );
};

export default HeaderSkeleton;
