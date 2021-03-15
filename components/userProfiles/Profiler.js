import React, { useState, useContext } from "react";
import ItemProfiler from "./ItemProfiler";
import { UserContext } from "../../context/UserContext";

const Profiler = () => {
  const [ShowProfiler, setShowProfiler] = useState(true);
  const { UserCredential } = useContext(UserContext);

  const handleClickProfiler = () => {
    setShowProfiler(!ShowProfiler);
  };

  return (
    <>
      <div className="fixed">
        <div className=" grid grid-cols-2 w-screen max-w-full md:max-w-3/4">
          <div className="">algp</div>
          <div>
            <div className="flex justify-end ">
              <section
                className={` ${
                  ShowProfiler ? "hidden" : ""
                } w-48 rounded-md shadow-lg py-1 m-1 bg-white  ring-1 ring-black ring-opacity-5`}
              >
                <h1 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {UserCredential.email}
                </h1>
                <ItemProfiler>Cerrar Session</ItemProfiler>
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  yor profiler
                </a>
              </section>
              <div className="">
                <button onClick={handleClickProfiler}>
                  <img
                    className="h-9 w-9- my-1 rounded-full "
                    src={UserCredential.photoURL}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiler;
