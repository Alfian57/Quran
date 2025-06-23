import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const ItemSkeleton = async () => {
  return (
    <div className="mb-10">
      <div className="flex h-12 w-full items-center justify-between rounded-[10px] bg-gray-200 px-4">
        <Skeleton className="h-[27px] w-[27px]" />
        <div className="flex flex-1 items-center justify-end gap-3">
          <Image
            src={"/play-icon.png"}
            alt="play"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src={"/share-icon.png"}
            alt="play"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src={"/bookmark-icon.png"}
            alt="play"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
};

export default ItemSkeleton;
