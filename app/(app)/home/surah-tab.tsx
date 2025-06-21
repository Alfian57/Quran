import Image from "next/image";
import { getAllSurah } from "./_actions/getAllSurah";
import { Skeleton } from "@/components/ui/skeleton";
import { Amiri } from "next/font/google";
import { Suspense } from "react";
import Link from "next/link";

const amiri = Amiri({
  subsets: ["latin"],
  weight: "700",
});

type ItemProps = {
  number: number;
  englishName: string;
  name: string;
  revelationType: string;
  numberOfAyahs: number;
};

const SurahTab = async () => {
  const surahList = await getAllSurah();

  return (
    <div>
      <Suspense fallback={<ItemSkeleton />}>
        {surahList.map((surah, index) => (
          <Item
            key={index}
            number={surah.number}
            englishName={surah.englishName}
            name={surah.name}
            revelationType={surah.revelationType}
            numberOfAyahs={surah.numberOfAyahs}
          />
        ))}
      </Suspense>
    </div>
  );
};

const Item = ({
  number,
  englishName,
  name,
  revelationType,
  numberOfAyahs,
}: ItemProps) => {
  return (
    <div className="border-secondary flex items-center justify-between border-b py-5">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Image
            src={"/number-border.png"}
            alt="quran"
            width={36}
            height={36}
          />
          <span className="absolute inset-0 flex items-center justify-center">
            {number}
          </span>
        </div>
        <div>
          <Link href={`/surah/${number}`}>
            <span className="text-primary font-medium">{englishName}</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-secondary text-xs font-medium">
              {revelationType}
            </span>
            <span className="text-secondary text-xs font-medium">
              {numberOfAyahs} VERSES
            </span>
          </div>
        </div>
      </div>
      <span className={`${amiri.className} text-primary text-xl font-bold`}>
        {name}
      </span>
    </div>
  );
};

const ItemSkeleton = () => {
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

export default SurahTab;
