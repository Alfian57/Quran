"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";

const HeaderSearchIcon = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isShowSearch, setIsShowSearch] = useState(false);

  useEffect(() => {
    setIsShowSearch(searchParams.get("isShowSearch") === "true");
  }, [searchParams]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams],
  );

  const toggleSearch = () => {
    const newShowSearch = !isShowSearch;
    const queryString = createQueryString(
      "isShowSearch",
      newShowSearch.toString(),
    );

    if (!newShowSearch) {
      // Also clear search when hiding
      const params = new URLSearchParams(queryString);
      params.delete("search");
      router.push(`${pathname}?${params.toString()}`);
    } else {
      router.push(`${pathname}?${queryString}`);
    }
  };

  return (
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
  );
};

export default HeaderSearchIcon;
