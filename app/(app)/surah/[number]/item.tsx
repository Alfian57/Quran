"use client";

import Image from "next/image";
import AudioPlayer from "./audio-player";
import { Amiri } from "next/font/google";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { Info } from "lucide-react";

const amiri = Amiri({
  subsets: ["latin"],
  weight: "700",
});

interface ItemProps {
  surahNumber: number;
  ayahNumber: number;
  arabText: string;
  englishText: string;
  audioUrl: string | undefined;
}

const Item = ({
  surahNumber,
  ayahNumber,
  arabText,
  englishText,
  audioUrl,
}: ItemProps) => {
  const pathname = usePathname();

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}${pathname}#ayah-${ayahNumber}`,
    );
    toast("Link copied to clipboard!", {
      position: "top-center",
      icon: <Info />,
    });
  };

  return (
    <div className="mb-10" id={`ayah-${ayahNumber}`}>
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
            onClick={handleCopyToClipboard}
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <div className="flex justify-end rounded-lg bg-gray-50 p-4">
          <span
            className={`${amiri.className} text-purple w-full text-end text-lg font-bold`}
          >
            {surahNumber != 1 && ayahNumber === 1
              ? arabText
                  .replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيم", "")
                  .trim()
              : arabText}
          </span>
        </div>
        <span className="text-purple">{englishText}</span>
      </div>
    </div>
  );
};

export default Item;
