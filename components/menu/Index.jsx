import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuButton from "../menuButton/index";
import Link from "next/link";
import Profiler from "../userProfiles/Profiler";
const Index = ({ children }) => {
  const [burger, setburger] = useState(true);

  const handleClick = () => {
    setburger(!burger);
  };

  return (
    <div className="grid md:grid-cols-3    ">
      <div className=" md:col-span-1 md:flex md:justify-end bg-gray-100 md:row-span-3">
        <nav className="text-right">
          <div className="flex justify-between items-center ">
            <h1 className="font-bold uppercase p-4 border-b border-gray-100">
              <Link href="/navBar">
                <a>Menu</a>
              </Link>
            </h1>
            <div className="px-4 cursor-pointer md:hidden">
              <button onClick={handleClick}>
                <GiHamburgerMenu size={18} />
              </button>
            </div>
          </div>
          <ul className={`text-sm mt-6 ${burger ? "hidden" : ""} md:block`}>
            <MenuButton icon={<AiFillHome className="ml-2 " size={20} />}>
              Notes:
            </MenuButton>
          </ul>
        </nav>
      </div>
      <div className=" my-6">
        <Profiler />
      </div>
      <main className="md:col-span-2 bg-gray-900">
        <div className="">{children}</div>
      </main>
    </div>
  );
};

export default Index;
