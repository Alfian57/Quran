import { getAllSurah } from "./_actions/getAllSurah";
import { Suspense } from "react";
import ItemSkeleton from "./item-skeleton";
import Item from "./item";

interface SurahTabProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const SurahTab = async ({ searchParams }: SurahTabProps) => {
  const surahList = await getAllSurah();
  const resolvedSearchParams = await searchParams;

  return (
    <div>
      <Suspense fallback={<ItemSkeleton />}>
        {surahList
          .filter((surah) => {
            const searchQuery = resolvedSearchParams.search;
            if (!searchQuery || typeof searchQuery !== "string") return true;
            return surah.englishName
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          })
          .map((surah, index) => (
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

export default SurahTab;
