"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { logout } from "@/lib/auth";
import HomeIcon from "@/components/Icons/HomeIcon";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import LogoutIcon from "../Icons/LogoutIcon";

const menuItems = [
  { id: 1, label: "Home", icon: HomeIcon, link: "/list" },
  {
    id: 2,
    label: "Profile",
    icon: ProfileIcon,
    link: "/",
  },
];

const SideBar = () => {
  const { data: session } = useSession();

  const pathname = usePathname();

  if (!session?.user) return null;
  return (
    <div className="sidebar-wrapper">
      <div className="focus hidden md:flex"></div>
      {menuItems.map(({ icon: Image, ...menu }) => {
        return (
          <Link href={menu.link} key={menu.id}>
            <SideBarIcon icon={<Image />} text={menu.label} />
          </Link>
        );
      })}
      <button className="sidebar-icon group" type="submit" onClick={logout}>
        <LogoutIcon />
        <span className="sidebar-tooltip group-hover:scale-100">Logout</span>
        <span></span>
      </button>
    </div>
  );
};

const SideBarIcon = ({ icon, text }: any) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    <span></span>
  </div>
);

export default SideBar;
