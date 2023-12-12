import React from "react";
import airplane from "../assets/airplane.png";
import icon_bed from "../assets/icon_bed.png";
import headerLogo from "../assets/Logo.png";

const Nav = () => {
  return (
    <nav className="px-1 text-white">
      <div className="py-[24px] px-[32px] flex justify-between">
        <div className="flex items-center justify-between gap-x-[32px] ">
          <a
            href="#"
            className="flex items-center gap-1 cursor-pointer text-[14px] font-[600]"
          >
            <img src={airplane} alt="" />
            Find Flight
          </a>
          <a
            href="#"
            className="flex items-center gap-1 cursor-pointer text-[14px] font-[600]"
          >
            <img src={icon_bed} alt="" />
            Find Stays
          </a>
        </div>

        <div className="cursor-pointer">
          <img src={headerLogo} alt="" />
        </div>

        <div className="flex items-center justify-between gap-x-[32px]">
          <a href="#" className="cursor-pointer text-[14px] font-[600]">
            Login
          </a>
          <a
            href="#"
            className="cursor-pointer text-[14px] font-[600] py-[15px] px-[30px] bg-white text-black rounded-lg hover:bg-black hover:text-white duration-200"
          >
            Sing up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
