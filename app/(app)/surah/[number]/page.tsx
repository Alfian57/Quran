import Image from "next/image";
import { Amiri } from "next/font/google";
import { getSurahDetail } from "./_actions/getSurahDetail";
import { Suspense } from "react";
import Item from "./item";
import ItemSkeleton from "./item-skeleton";
import HeaderSkeleton from "./header-skeleton";

const amiri = Amiri({
  subsets: ["latin"],
  weight: "700",
});

interface Props {
  params: Promise<{ number: string }>;
}

const Page = async (props: Props) => {
  const params = await props.params;
  const { number } = params;
  const surah = await getSurahDetail(number as unknown as number);

  return (
    <div className="px-6 pb-24">
      <div className="relative">
        <Image
          src={"/surah-detail.png"}
          alt="app"
          width={800}
          height={400}
          className="h-auto w-full rounded-[10px]"
        />

        <Suspense fallback={<HeaderSkeleton />}>
          <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center rounded-[10px] p-4 text-center text-white">
            <div className="flex flex-col items-center justify-center">
              <span className="text-[26px] font-medium">
                {surah[0].englishName}
              </span>
              <span className="font-medium">
                {surah[0].englishNameTranslation}
              </span>
            </div>
            <div className="my-4 w-full border border-white"></div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-sm font-medium">
                {surah[0].revelationType} | {surah[0].numberOfAyahs} VERSES
              </span>
              <span className={`${amiri.className} mt-3 text-3xl font-bold`}>
                {surah[0].name}
              </span>
            </div>
          </div>
        </Suspense>
      </div>

      <div className="mt-6">
        <Suspense fallback={<ItemSkeleton />}>
          {surah[0].ayahs.map((ayah, index) => (
            <Item
              key={ayah.numberInSurah}
              surahNumber={number as unknown as number}
              ayahNumber={ayah.numberInSurah}
              arabText={surah[1].ayahs[index].text}
              englishText={ayah.text}
              audioUrl={surah[1].ayahs[index].audio}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
