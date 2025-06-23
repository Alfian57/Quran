import ProfileDrawer from "./profile-drawer";
import HeaderSearch from "./header-search";
import { Suspense } from "react";
import HeaderSearchIcon from "./header-search-icon";

const Header = () => {
  return (
    <div className="mb-3">
      <header className="flex items-center justify-between px-6 pt-6">
        <div className="flex items-center gap-4">
          <ProfileDrawer />
          <h1 className="text-primary text-xl font-bold">Quran App</h1>
        </div>
        <Suspense fallback={<div className="h-6 w-6" />}>
          <HeaderSearchIcon />
        </Suspense>
      </header>
      <Suspense fallback={<div className="h-0" />}>
        <HeaderSearch />
      </Suspense>
    </div>
  );
};

export default Header;
