import React, { useContext, useEffect } from "react";
import Index from "../note/index";
import Menu from "../menu/Index";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { User } = useContext(UserContext);
  const router = useRouter();

  return <Menu>{children}</Menu>;
};

export default Layout;
