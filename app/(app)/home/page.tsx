import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import SurahTab from "./surah-tab";
import JuzTab from "./juz-tab";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <div className="px-6 pb-24">
      <h3 className="text-secondary text-lg font-medium">Assalamualaikum</h3>
      <h2 className="text-primary mb-6 text-2xl font-semibold">
        Alfian Gading
      </h2>

      <div className="relative">
        <Image
          src={"/home.png"}
          alt="home"
          width={800}
          height={400}
          className="h-auto w-full rounded-[10px]"
        />
        <div className="absolute top-4 bottom-4 left-4 flex flex-col justify-between gap-3 px-4 py-2">
          <div className="flex items-center gap-3">
            <Image
              src={"/home-last-read-icon.png"}
              alt="home-last-read-icon"
              width={20}
              height={20}
            />
            <span className="text-sm font-medium text-white">Last Read</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold text-white">Al-Faatiha</span>
            <span className="text-sm text-white">Ayah No:1</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="surah" className="mt-5 w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="surah">Surah</TabsTrigger>
          <TabsTrigger value="juz">Juz</TabsTrigger>
        </TabsList>
        <TabsContent value="surah">
          <SurahTab searchParams={searchParams} />
        </TabsContent>
        <TabsContent value="juz">
          <JuzTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
