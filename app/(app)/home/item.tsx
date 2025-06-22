import { Amiri } from "next/font/google";
import Image from "next/image";
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

const Item = async ({
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

export default Item;
