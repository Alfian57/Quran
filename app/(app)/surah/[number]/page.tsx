import Image from "next/image";
import { Amiri } from "next/font/google";
import { getSurahDetail } from "./_actions/getSurahDetail";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import AudioPlayer from "./audio-player";

const amiri = Amiri({
  subsets: ["latin"],
  weight: "700",
});

interface Props {
  params: { number: string };
}

interface ItemProps {
  surahNumber: number;
  ayahNumber: number;
  arabText: string;
  englishText: string;
  audioUrl: string | undefined;
}

const Page = async ({ params }: Props) => {
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

const Item = ({
  surahNumber,
  ayahNumber,
  arabText,
  englishText,
  audioUrl,
}: ItemProps) => {
  return (
    <div className="mb-10">
      <div className="flex h-12 w-full items-center justify-between rounded-[10px] bg-gray-200 px-4">
        <div className="bg-primary flex h-[27px] w-[27px] items-center justify-center rounded-full text-sm font-medium text-white">
          {ayahNumber}
        </div>
        <div className="flex flex-1 items-center justify-end gap-3">
          <AudioPlayer audioUrl={audioUrl} />
          <Image
            src={"/share-icon.png"}
            alt="play"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <span
          className={`${amiri.className} text-purple text-end text-lg font-bold`}
        >
          {surahNumber !== 1 && ayahNumber === 1
            ? arabText
                .replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيم", "")
                .trim()
            : arabText}
        </span>
        <span className="text-purple">{englishText}</span>
      </div>
    </div>
  );
};

const ItemSkeleton = () => {
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

const HeaderSkeleton = () => {
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

export default Page;
<div>test</div>;
