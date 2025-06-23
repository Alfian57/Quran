import Image from "next/image";
import Link from "next/link";

const page = async () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <div className="mb-8 flex flex-col gap-3">
        <h1 className="text-primary text-[28px] font-bold">Quran App</h1>
        <h3 className="text-secondary px-24 text-lg">
          Learn Quran and Recite once everyday
        </h3>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Image
          src={"/splash-screen.png"}
          alt="splash-screen"
          width={314}
          height={450}
        />
        <Link href={"/home"}>
          <button className="relative bottom-8 flex items-center gap-3 rounded-[30px] bg-[#F9B091] px-12 py-3 text-lg font-semibold text-white shadow-md hover:bg-[#F9B091]/90 active:bg-[#F9B091]/80">
            <Image
              src={"/google-icon.png"}
              alt="google-icon"
              width={24}
              height={24}
            />
            Login with Google
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
