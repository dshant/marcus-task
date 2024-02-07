// components/Sidebar.js

import React, { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { IoIosArrowDropleft } from "react-icons/io";


const sidebarLinks = [
  {
    id: 1,
    icon: <BiSolidDashboard className="w-full h-full" />,
    url: '/dashboard',
    text: 'Dashboard'
  },
  {
    id: 2,
    icon: <FaUsers className="w-full h-full" />,
    url: '/users',
    text: 'Users'
  },
  {
    id: 3,
    icon: <BiLogoMicrosoftTeams className="w-full h-full" />,
    url: '/teams',
    text: 'Teams'
  },
]

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState();

  const handleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <div className={`bg-gray-800 h-screen min-w-[72px] md:min-w-64 fixed z-50 left-0 top-0 ${showSidebar ? 'min-w-64' : 'min-w-[72px]'}`}>
      <span onClick={handleSidebar} className={`absolute -right-2 top-3 ${showSidebar ? 'block' : 'hidden'}`}><IoIosArrowDropleft className="text-white w-10 h-7" />
      </span>
      <div className="p-4 text-white">
        <img src="/images/logo.png" className={` md:block ${showSidebar ? 'block' : 'hidden'}`} height={30} width={200} />
        <MdMenu className={`md:hidden w-10 h-7 ${showSidebar ? 'hidden' : 'block'}`} onClick={handleSidebar} />
        <ul>
          {sidebarLinks?.map((data) => (
            <li key={data?.id}>
              <Link href={data?.url} className="flex items-center py-5 gap-2">
                <span className="h-7 w-10">{data?.icon}</span>
                <span className={`hidden md:block ${showSidebar ? '[display:_block]' : 'hidden'}`}>{data?.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
