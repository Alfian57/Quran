"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isShowSearch, setIsShowSearch] = useState(
    searchParams.get("isShowSearch") === "true" || false,
  );
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    if (pathname !== "/home" && debouncedSearch) {
      console.log("Redirecting to home with search:", debouncedSearch);
      router.push(`/home?search=${debouncedSearch}&isShowSearch=true`);
      return;
    }

    if (pathname === "/home" && debouncedSearch !== "") {
      router.push(`/home?search=${debouncedSearch}`);
    }
  }, [pathname, debouncedSearch, router, createQueryString]);

  const toggleSearch = () => {
    setIsShowSearch(!isShowSearch);
  };

  return (
    <div className="mb-3">
      <header className="flex items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-4">
          <Image
            src={"/menu-icon.png"}
            alt="menu-icon"
            width={24}
            height={24}
          />
          <h1 className="text-primary text-xl font-bold">Quran App</h1>
        </div>
        <div className="relative h-6 w-6">
          <div
            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
              isShowSearch
                ? "scale-75 rotate-90 opacity-0"
                : "scale-100 rotate-0 opacity-100"
            }`}
          >
            <Image
              src={"/search-icon.png"}
              alt="search-icon"
              width={24}
              height={24}
              onClick={toggleSearch}
              className="cursor-pointer"
            />
          </div>
          <div
            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
              isShowSearch
                ? "scale-100 rotate-0 opacity-100"
                : "scale-75 rotate-90 opacity-0"
            }`}
          >
            <X
              width={24}
              height={24}
              onClick={toggleSearch}
              className="cursor-pointer"
            />
          </div>
        </div>
      </header>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isShowSearch ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="my-6 flex gap-3 px-6">
          <Input
            type="text"
            placeholder="Enter surah..."
            className="text-primary w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
