import { getAllSurah } from "./_actions/getAllSurah";
import { Suspense } from "react";
import SurahItemSkeleton from "./surah-item-skeleton";
import SurahItem from "./surah-item";

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
      <Suspense fallback={<SurahItemSkeleton />}>
        {surahList.map((surah, index) => (
          <SurahItem
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
