"use client";

import Image from "next/image";
import { Amiri } from "next/font/google";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { Copy, Info } from "lucide-react";

const amiri = Amiri({
  subsets: ["latin"],
  weight: "700",
});

interface ItemProps {
  ayah: {
    number: number;
    text: string;
    numberInSurah: number;
    juz: number;
    page: number;
    ruku: number;
    hizbQuarter: number;
  };
  translation?: string;
}

const Item = ({ ayah, translation }: ItemProps) => {
  const pathname = usePathname();

  const handleCopyToClipboard = () => {
    const url = `${window.location.origin}${pathname}#ayah-${ayah.number}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url);
      toast("Link copied to clipboard!", {
        position: "top-center",
        icon: <Info />,
      });
    } else {
      toast("Clipboard not supported in this environment", {
        position: "top-center",
        icon: <Info />,
      });
    }
  };

  const handleCopyAyahText = () => {
    const textToCopy = translation
      ? `${ayah.text}\n\n${translation}\n\n(QS. Juz ${ayah.juz}, Ayah ${ayah.numberInSurah})`
      : `${ayah.text}\n\n(QS. Juz ${ayah.juz}, Ayah ${ayah.numberInSurah})`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy);
      toast("Ayah text copied to clipboard!", {
        position: "top-center",
        icon: <Info />,
      });
    } else {
      toast("Clipboard not supported in this environment", {
        position: "top-center",
        icon: <Info />,
      });
    }
  };

  return (
    <div className="mb-10" id={`ayah-${ayah.number}`}>
      {/* Header with ayah info */}
      <div className="flex h-12 w-full items-center justify-between rounded-[10px] bg-gray-200 px-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary flex h-[27px] w-[27px] items-center justify-center rounded-full text-sm font-medium text-white">
            {ayah.numberInSurah}
          </div>
          <div className="text-xs text-gray-600">
            <span>Juz {ayah.juz}</span>
            <span className="mx-1">•</span>
            <span>Page {ayah.page}</span>
            <span className="mx-1">•</span>
            <span>Ruku {ayah.ruku}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyAyahText}
            className="cursor-pointer transition-opacity hover:opacity-70"
            title="Copy ayah text"
          >
            <Copy width={20} height={20} color="#672cbc" />
          </button>
          <button
            onClick={handleCopyToClipboard}
            className="cursor-pointer transition-opacity hover:opacity-70"
            title="Share ayah link"
          >
            <Image src={"/share-icon.png"} alt="share" width={24} height={24} />
          </button>
        </div>
      </div>

      {/* Ayah content */}
      <div className="mt-4 flex flex-col gap-4">
        {/* Arabic text */}
        <div className="rounded-lg bg-gray-50 p-4">
          <span
            className={`${amiri.className} text-purple block text-end text-xl leading-relaxed font-bold`}
          >
            {ayah.text}
          </span>
        </div>

        {/* Translation if available */}
        {translation && (
          <div className="rounded-lg bg-blue-50 p-4">
            <span className="block text-sm leading-relaxed text-gray-700">
              {translation}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;
