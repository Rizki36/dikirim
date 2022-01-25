import Image from "next/image";
import Link from "next/link";
import notificationIcon from "@/public/icons/notification.svg";
import menuIcon from "@/public/icons/menu.svg";
import brandIcon from "@/public/icon.png";
import React from "react";
import Menus from "./Menus";
import InputSearch from "./InputSearch";

const Header = ({ className = "", ...props }) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [notifIsOpen, setNotifIsOpen] = React.useState(false);
  return (
    <div
      className={`w-full h-[60px] border-b flex items-center justify-between px-10 py-2 ${className}`}
      {...props}
    >
      <div className="flex items-center">
        <button
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className="flex items-center lg:hidden justify-center active:outline-black w-[30px] h-[30px]"
        >
          <Image src={menuIcon} alt="" />
        </button>
        <InputSearch className="hidden lg:flex" />
      </div>
      <Link href="/">
        <a className="relative h-[20px] w-[100px] lg:hidden">
          <Image src={brandIcon} layout="responsive" alt="" />
        </a>
      </Link>
      <div>
        <button
          onClick={() => setNotifIsOpen(!notifIsOpen)}
          className="flex items-center justify-center active:outline-black w-[30px] h-[30px]"
        >
          <Image width={20} height={20} src={notificationIcon} alt="" />
        </button>
      </div>

      <HeaderMenu
        isOpen={menuIsOpen}
        setIsOpen={() => setMenuIsOpen(!menuIsOpen)}
      />
      <NotificationList
        isOpen={notifIsOpen}
        setIsOpen={() => setNotifIsOpen(!notifIsOpen)}
      />
    </div>
  );
};

const HeaderMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`transition-all duration-500 ${
        !isOpen && "-translate-y-full"
      } fixed bg-white h-screen w-screen top-0 bottom-0 left-0 right-0 p-10 grid grid-rows-[auto,1fr,auto] lg:hidden`}
    >
      <InputSearch className="opacity-100 mb-10" classNameInput="w-full" />
      <div>
        <Menus onMenuClick={setIsOpen} />
      </div>
      <button
        className="bg-gray-200 w-full py-3 px-3 rounded-md"
        onClick={setIsOpen}
      >
        Tutup
      </button>
    </div>
  );
};

const NotificationList = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`transition-all duration-500 ${
        !isOpen && "-translate-y-full"
      } fixed bg-white h-screen w-screen top-0 bottom-0 left-0 right-0 p-10 grid grid-rows-[1fr,auto]`}
    >
      <div className="flex items-center justify-center flex-col text-center">
        <div className="text-3xl mb-2">🛎️</div>
        Belum Ada Notifikasi
      </div>
      <button
        className="bg-gray-200 w-full py-3 px-3 rounded-md"
        onClick={setIsOpen}
      >
        Tutup
      </button>
    </div>
  );
};

export default Header;
