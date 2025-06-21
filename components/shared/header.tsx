import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6">
      <div className="flex items-center gap-4">
        <Image src={"/menu-icon.png"} alt="menu-icon" width={24} height={24} />
        <h1 className="text-primary text-xl font-bold">Quran App</h1>
      </div>
      <Image
        src={"/search-icon.png"}
        alt="search-icon"
        width={24}
        height={24}
      />
    </header>
  );
};

export default Header;
