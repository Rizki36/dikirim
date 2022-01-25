import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import chevronCircle from "@/public/icons/chevron_circle_down.svg";
import dashboardIcon from "@/public/icons/menus/dashboard.svg";
import orderIcon from "@/public/icons/menus/order.svg";
import trackingIcon from "@/public/icons/menus/tracking.svg";
import monitoringIcon from "@/public/icons/menus/monitoring.svg";
import reportsIcon from "@/public/icons/menus/report.svg";

const Menus = ({ onMenuClick = null }) => {
  return (
    <>
      <Menu
        onClick={onMenuClick}
        href="/"
        text="Dashboard"
        icon={dashboardIcon}
      />
      <Menu
        onClick={onMenuClick}
        href="/order/pickup"
        text="Buat Order"
        icon={orderIcon}
      />
      <Menu
        onClick={onMenuClick}
        href="/tracking"
        text="Tracking"
        icon={trackingIcon}
      />
      <Menu
        onClick={onMenuClick}
        href="/monitoring"
        text="Monitoring"
        icon={monitoringIcon}
      />
      <Menu
        onClick={onMenuClick}
        href="/reports"
        text="Reports"
        icon={reportsIcon}
      />
      <ContainerSubMenu text="Ticketing" icon={monitoringIcon}>
        <SubMenu onClick={onMenuClick}>Test</SubMenu>
      </ContainerSubMenu>
    </>
  );
};

const ContainerSubMenu = ({ icon, text, children, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`flex flex-col items-center w-full hover:bg-[#E8E8E8] ${
        isOpen && "bg-[#E8E8E8]"
      } rounded-lg p-2 my-1 justify-between`}
      {...props}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between outline-none h-[50px] px-5 w-full bg-white rounded-lg"
      >
        <div className="flex items-center">
          <Image src={icon} width={30} alt="" />
          <span className="text-primary text-lg font-medium font-mono ml-3">
            {text}
          </span>
        </div>
        <div className={`${!isOpen && "-rotate-90"} transition-all`}>
          <Image src={chevronCircle} height={20} width={20} alt="" />
        </div>
      </button>

      {isOpen && <div className="w-full">{children}</div>}
    </div>
  );
};

const SubMenu = ({ children, ...props }) => {
  return (
    <a
      href="#"
      className="flex items-center h-[50px] px-5 w-full bg-white rounded-lg mt-3"
      {...props}
    >
      <span className="w-[30px]"></span>
      <span className="text-primary text-lg font-medium font-mono ml-3">
        {children}
      </span>
    </a>
  );
};

const Menu = ({ href, text, icon, ...props }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        href="#"
        className={`flex items-center w-full hover:bg-[#E8E8E8] ${
          href === router.pathname && "bg-[#E8E8E8]"
        } rounded-lg p-2 my-1`}
        {...props}
      >
        <div className="flex items-center h-[50px] px-5 w-full bg-white rounded-lg">
          <Image src={icon} width="30" alt="" />
          <span className="text-primary text-lg font-medium font-mono ml-3">
            {text}
          </span>
        </div>
      </a>
    </Link>
  );
};

export default Menus;
