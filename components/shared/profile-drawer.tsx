import Image from "next/image";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { BookCheck, Settings, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ProfileDrawer = () => {
  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <Image src={"/menu-icon.png"} alt="menu-icon" width={24} height={24} />
      </DrawerTrigger>
      <DrawerContent className="fixed top-0 left-0 h-full w-80">
        <DrawerHeader>
          <DrawerTitle>Profile Menu</DrawerTitle>
          <div className="mt-4 flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-50 p-4">
            <Avatar className="h-18 w-18">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center">
              <h3 className="text-lg font-semibold">Ahmad Fauzi</h3>
              <p className="text-sm text-gray-600">ahmad.fauzi@email.com</p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <button className="flex w-full items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                <BookCheck color="gray" size={16} />
              </div>
              <span className="font-medium">Reading Progress</span>
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                <Star color="gray" size={16} />
              </div>
              <span className="font-medium">Favorites</span>
            </button>
            <button className="flex w-full items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                <Settings color="gray" size={16} />
              </div>
              <span className="font-medium">Settings</span>
            </button>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button
              variant="outline"
              className="w-full border-red-600 text-red-600 hover:bg-red-50"
            >
              Logout
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ProfileDrawer;
