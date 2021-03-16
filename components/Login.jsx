import React, { useEffect, useState, useContext } from "react";
import { VscAccount } from "react-icons/vsc";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import Menu from "./menu/Index";
import { LobginWithFacebook, LobginWithGItHub } from "../firebase/client";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";
const Login = () => {
  const [User, setUser] = useState(null);
  const { Login } = useContext(UserContext);
  const [loading, setloading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    User && router.replace("/navbar");
  }, [User]);

  const handleClickFace = () => {
    LobginWithFacebook()
      .then((result) => {
        if (result.credential) {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;
        }
        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {});
  };
  const handleClickGitHub = () => {
    setloading(true);

    LobginWithGItHub()
      .then((user) => {
        Login(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gray-200 ">
      <section className="grid place-items-center place-content-center h-screen bg-gray-200 shadow-sm  sm:bg-gray-50 sm:max-w-xl  sm:border-2 sm:rounded-sm sm:mx-auto">
        <VscAccount size={50} color={"black"} />

        <h1 className="text-3xl my-4 ">
          <p className="">Sing In</p>
        </h1>
        <button
          className="flex items-center bg-blue-800 h-10 rounded-lg w-52"
          onClick={handleClickFace}
        >
          <AiFillFacebook size={30} color={"white"} />
          <p className="text-white px-1">Sing Up With Facebook</p>
        </button>
        <p className="text-gray-500 m-1">-- or --</p>

        <button
          className="flex items-center  bg-gray-600 h-10 rounded-lg w-52"
          onClick={handleClickGitHub}
        >
          <AiFillGithub size={30} color={"white"} />
          <p className="text-white px-1">Sing Up With GitHub</p>
        </button>
        {loading && <p>Loading...</p>}
      </section>
    </div>
  );
};

export default Login;
