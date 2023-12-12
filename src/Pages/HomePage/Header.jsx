import React from "react";
import Nav from "../../components/Nav";
import backgroundImage from "../../assets/homeBackgroundImage.jpg";

const Header = () => {
  return (
    <header
      className="max-w-[1440px] mx-auto bg-cover bg-[center_-80px] bg-no-repeat h-[600px] relative rounded-[24px] overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full h-full bg-black/40">
        <Nav />
        <div className="my-[84px] items-center text-white text-center">
          <h2 className="text-[45px] font-[700]">Helping Others</h2>
          <h1 className="text-[80px] font-[700] uppercase">Live & Travel</h1>
          <h4 className="text-[20px] font-[500]">
            Special offers to suit your plan
          </h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
