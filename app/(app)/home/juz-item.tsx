import Image from "next/image";
import Link from "next/link";

type Props = {
  juzNumber: number;
};

const JuzItem = ({ juzNumber }: Props) => {
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
            {juzNumber}
          </span>
        </div>
        <div>
          <Link href={`/juz/${juzNumber}`}>
            <span className="text-primary font-medium">{`Juz-${juzNumber}`}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JuzItem;
