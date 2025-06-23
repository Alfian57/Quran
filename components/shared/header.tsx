"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import ProfileDrawer from "./profile-drawer";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isShowSearch, setIsShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    setIsShowSearch(
      searchParams.get("isShowSearch") === "true" || pathname === "/home",
    );
  }, [pathname, searchParams]);

  const createQueryString = useCallback(
    (params: URLSearchParams, name: string, value: string) => {
      const newParams = new URLSearchParams(params.toString());
      if (value) {
        newParams.set(name, value);
      } else {
        newParams.delete(name);
      }
      return newParams.toString();
    },
    [],
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      const currentUrlSearch = searchParams.get("search") || "";

      if (search !== currentUrlSearch) {
        if (pathname !== "/home") {
          router.push(`/home?search=${search}&isShowSearch=true`);
        } else {
          const newQueryString = createQueryString(
            searchParams,
            "search",
            search,
          );
          router.push(`${pathname}?${newQueryString}`);
        }
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search, pathname, searchParams, router, createQueryString]);

  const toggleSearch = () => {
    setIsShowSearch(!isShowSearch);
  };

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div className="mb-3">
      <header className="flex items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-4">
          <ProfileDrawer />
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
        <div className="relative my-6 flex gap-3 px-6">
          <Input
            type="text"
            placeholder="Enter surah..."
            className="text-primary w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button
              onClick={clearSearch}
              className="absolute top-1/2 right-10 -translate-y-1/2 text-gray-500"
            >
              <X width={18} height={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
