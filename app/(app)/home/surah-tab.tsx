import { getAllSurah } from "./_actions/getAllSurah";
import { Suspense } from "react";
import ItemSkeleton from "./item-skeleton";
import Item from "./item";

interface SurahTabProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const SurahTab = async ({ searchParams }: SurahTabProps) => {
  const resolvedSearchParams = await searchParams;
  const surahList = await getAllSurah(
    resolvedSearchParams.search as string | undefined,
  );

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

export default SurahTab;
