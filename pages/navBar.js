import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Menu from "../components/menu/Index";
import { useRouter } from "next/router";

const navBar = () => {
  const router = useRouter();
  const [NotUser, setNotUser] = useState(null);
  const { User } = useContext(UserContext);

  return (
    <>
      <Menu />
    </>
  );
};

export default navBar;
