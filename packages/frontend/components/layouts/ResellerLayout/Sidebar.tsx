import React from "react";
import Image from "next/image";
import icon from "@/public/icon.png";
import ProfileCard from "./ProfileCard";
import Menus from "./Menus";

const Sidebar = ({ className = "", ...props }) => {
  return (
    <div
      className={`w-[300px] h-screen bg-[#F8F8FA] grid grid-rows-[auto,1fr,auto] relative border-r ${className}`}
    >
      <div className="text-center mt-6 mb-12">
        <Image src={icon} alt="" />
      </div>
      <div className="overflow-y-auto">
        <div className="mx-2">
          <Menus />
        </div>
      </div>
      <div className="m-3">
        <ProfileCard className="my-3" />
      </div>
    </div>
  );
};

export default Sidebar;
