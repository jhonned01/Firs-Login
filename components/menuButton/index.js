import React from "react";
import Link from "next/link";
const index = ({ children, icon }) => {
  return (
    <li className="text-gray-700 font-bold py-1">
      <Link href="/">
        <a className="px-4 flex justify-end border-r-4 border-red-400">
          {children} {icon}
        </a>
      </Link>
    </li>
  );
};

export default index;
