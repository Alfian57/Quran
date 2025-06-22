import { Skeleton } from "@/components/ui/skeleton";

const ItemSkeleton = async () => {
  return (
    <div className="border-secondary flex items-center justify-between border-b py-5">
      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-10"></Skeleton>

        <div>
          <span className="text-primary font-medium">
            <Skeleton className="h-5 w-32"></Skeleton>
          </span>
          <div className="flex items-center gap-3">
            <span className="text-secondary text-xs font-medium">
              <Skeleton className="h-3 w-16"></Skeleton>
            </span>
            <span className="text-secondary flex items-center gap-1 text-xs font-medium">
              <Skeleton className="h-3 w-3"></Skeleton> VERSES
            </span>
          </div>
        </div>
      </div>
      <span className="text-primary text-xl font-bold">
        <Skeleton className="h-8 w-32"></Skeleton>
      </span>
    </div>
  );
};

export default ItemSkeleton;
