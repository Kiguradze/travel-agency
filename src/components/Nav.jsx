import React from "react";

const Nav = () => {
  return (
    <nav className="px-1">
      <div className="max-w-[1440px] mx-auto py-[24px] px-[32px] flex justify-between">
        <div className="flex items-center justify-between gap-x-[32px]">
          <span>Find Flight</span>
          <span>Find Stays</span>
        </div>

        <div>
          <span>Logo</span>
        </div>

        <div className="flex items-center justify-between gap-x-[32px]">
          <span>Login</span>
          <span>Sing up</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
