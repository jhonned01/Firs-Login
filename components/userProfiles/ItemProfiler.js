import React from "react";

const ItemProfiler = ({ children }) => {
  return (
    <a className="block object-cover px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
      {children}
    </a>
  );
};

export default ItemProfiler;
