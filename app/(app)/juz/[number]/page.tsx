import Image from "next/image";
import { getJuzDetail } from "./_actions/getJuzDetail";
import { Suspense } from "react";
import HeaderSkeleton from "./header-skeleton";
import ItemSkeleton from "./item-skeleton";
import Item from "./item";
import { Amiri } from "next/font/google";

const amiri = Amiri({
  subsets: ["latin"],
  weight: "700",
});

type Props = {
  params: Promise<{ number: string }>;
};

const JuzPage = async (props: Props) => {
  const params = await props.params;
  const { number } = params;
  const juz = await getJuzDetail(number as unknown as number);

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
              <span className="text-[26px] font-medium">JUZ {number}</span>
              <span className="font-medium">{juz.length} Ayah</span>
            </div>
            <div className="my-4 w-full border border-white"></div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className={`${amiri.className} mt-3 text-3xl font-bold`}>
                بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </span>
            </div>
          </div>
        </Suspense>
      </div>

      <div className="mt-6">
        <Suspense fallback={<ItemSkeleton />}>
          {juz.map((ayah) => (
            <Item
              key={ayah.number}
              ayah={ayah}
              // translation={ayah.translation} // Uncomment jika API menyediakan terjemahan
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default JuzPage;
