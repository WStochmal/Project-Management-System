"use client";
import { useAuthContext } from "@/_hooks/useAuthContext";
import style from "./Header.module.css";
import { useEffect } from "react";
const Header = () => {
  const { state } = useAuthContext();
  // useEffect(() => {
  //   console.log("User:", state.user);
  // }, [state]);

  return (
    <header className={style.header}>
      <h1>Header?</h1>
    </header>
  );
};
export default Header;
