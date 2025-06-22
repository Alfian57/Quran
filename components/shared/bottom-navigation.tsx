"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/home",
    icon: "bottom-nav-1",
    alt: "bottom-nav-1",
    activeLink: ["/home", "/surah*"],
  },
  {
    href: "/bookmarks",
    icon: "bottom-nav-2",
    alt: "bottom-nav-2",
    activeLink: ["/bookmarks"],
  },
  {
    href: "/about",
    icon: "bottom-nav-3",
    alt: "bottom-nav-3",
    activeLink: ["/about"],
  },
];

function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed right-0 bottom-0 left-0 flex items-center justify-around border-t border-gray-200 bg-white p-4 shadow-lg">
      {navItems.map(({ href, icon, alt }) => {
        const isActive =
          navItems
            .find((item) => item.href === href)
            ?.activeLink.some((link) =>
              link.endsWith("*")
                ? pathname.startsWith(link.slice(0, -1))
                : pathname === link,
            ) || false;
        return (
          <Link key={href} href={href}>
            <Image
              src={`/${icon}${isActive ? "-active" : ""}.png`}
              alt={alt}
              width={32}
              height={32}
            />
          </Link>
        );
      })}
    </nav>
  );
}

export default BottomNavigation;
