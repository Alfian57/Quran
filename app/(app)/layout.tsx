import BottomNavigation from "@/components/shared/bottom-navigation";
import Header from "@/components/shared/header";
import React from "react";

type Props = {
  children: Readonly<React.ReactNode>;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div className="relative h-full">
      <Header />
      {children}
      <BottomNavigation />
    </div>
  );
};

export default AppLayout;
