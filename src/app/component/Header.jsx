import React from "react";
import HeaderItem from "./HeaderItem";
import { AiFillHome } from "react-icons/ai";
import { RiInformation2Fill } from "react-icons/ri";

export default function Header() {
  return (
    <div className="flex justify-between px-3 sm:px-10 md:px-24 mx-auto py-3 ">
      <div className="flex space-x-8">
        <HeaderItem kind="menuItem" name="HOME" adress="/" Icon={AiFillHome} />
        <HeaderItem kind="menuItem" name="ABOUT" adress="/about" Icon={RiInformation2Fill}/>
      </div>
      <div>
        <HeaderItem kind="logoItem"/>
      </div>
    </div>
  );
}
