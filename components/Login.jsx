import React from "react";
import { VscAccount } from "react-icons/vsc";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import Menu from "./menu/index";

const Login = () => {
  return (
    <div className="bg-gray-300">
      <section className="grid place-items-center place-content-center h-screen bg-gray-200 sm:bg-white sm:max-w-xl  sm:border-2 sm:m-auto ">
        <VscAccount size={50} color={"black"} />

        <h1 className="text-3xl my-4 ">
          <p className="">Sing In</p>
        </h1>
        <button className="flex items-center bg-blue-800 h-10 rounded-lg w-52">
          <AiFillFacebook size={30} color={"white"} />
          <p className="text-white px-1">Sing Up With Facebook</p>
        </button>
        <p className="text-gray-500 m-1">-- or --</p>

        <button className="flex items-center  bg-gray-600 h-10 rounded-lg w-52">
          <AiFillGithub size={30} color={"white"} />
          <p className="text-white px-1">Sing Up With GitHub</p>
        </button>
      </section>
    </div>
  );
};

export default Login;
