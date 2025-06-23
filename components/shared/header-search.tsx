"use client";

import { Input } from "../ui/input";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

const HeaderSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [isShowSearch, setIsShowSearch] = useState(false);

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    setIsShowSearch(searchParams.get("isShowSearch") === "true");
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

  const clearSearch = () => {
    setSearch("");
    setIsShowSearch(false);
  };

  return (
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
  );
};

export default HeaderSearch;
