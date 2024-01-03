import React from "react";
import footerLogo from "../assets/footerLogo.png";
import fb from "../assets/fbIcon.svg";
import twt from "../assets/twtIcon.svg";
import youtube from "../assets/youtubeIcon.svg";
import insta from "../assets/instaIcon.svg";
import footerImg from "../assets/footerImg.png";

const Footer = () => {
  return (
    <footer className="min-h-[422px] mt-[300px]  bg-[#8DD3BB] lg:mt-[265px]   ">
      <div className="max-w-[1440px] mx-auto px-4 relative">
        <div className="w-full h-full mx-auto xl:w-[90%]">
          <div className="w-full pt-[218px] pb-16 flex flex-col justify-between items-center gap-20 xl:flex-row xl:items-start xl:gap-0">
            <div className="w-full min-h-[305px] px-6 rounded-[20px] mx-auto flex items-center lg:lg:justify-between xl:w-[90%] bg-[#CDEAE1] absolute -top-[20%]  sm:-top-[35%] left-1/2 -translate-x-1/2 ">
              <div className="w-full py-6 flex flex-col  items-center text-center lg:w-fit lg:text-left lg:items-start ">
                <h2 className="max-w-[364px] text-[44px] font-bold leadin-[54px]">
                  Subscribe Newsletter
                </h2>
                <div>
                  <h3 className="text-[20px] font-bold text-[#112211] opacity-80">
                    The Travel
                  </h3>
                  <p className="text-base font-Montserrat font-medium text-[#112211] opacity-70">
                    Get inspired! Receive travel discounts, tips and behind the
                    scenes stories.
                  </p>
                </div>
                <form
                  action=""
                  className="w-full flex flex-col items-center gap-4 sm:flex-row "
                >
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="w-full px-4 py-[18px] rounded sm:w-[457px]"
                  />
                  <button className="w-full px-4 py-[18px] text-sm font-semibold bg-black text-white rounded sm:w-fit">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="hidden lg:block">
                <img src={footerImg} alt="" />
              </div>
            </div>
            <div>
              <img src={footerLogo} alt="" className="cursor-pointer" />
              <div className="mt-6 flex items-center gap-3">
                <img src={fb} alt="" className="cursor-pointer " />

                <img src={twt} alt="" className="cursor-pointer" />
                <img src={youtube} alt="" className="cursor-pointer" />
                <img src={insta} alt="" className="cursor-pointer" />
              </div>
            </div>
            <div className="flex justify-center flex-wrap gap-6 lg:flex-nowrap text-center lg:text-left ">
              <ul className="w-[175px] flex flex-col gap-4">
                <label className="text-base font-bold">Our Destinations</label>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Canada
                </li>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Alaksa
                </li>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  France
                </li>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Iceland
                </li>
              </ul>
              <ul className="w-[175px] flex flex-col gap-4">
                <label className="text-base font-bold">Our Activities</label>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Northern Lights
                </li>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Cruising & sailing
                </li>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Multi-activities
                </li>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Kayaing
                </li>
              </ul>
              <ul className="w-[175px] flex flex-col gap-4">
                <label className="text-base font-bold">Travel Blogs</label>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Bali Travel Guide
                </li>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Sri Lanks Travel Guide
                </li>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Peru Travel Guide
                </li>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Bali Travel Guide
                </li>
              </ul>
              <ul className="w-[175px] flex flex-col gap-4">
                <label className="text-base font-bold">About Us</label>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Our Story
                </li>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Work with us
                </li>
              </ul>
              <ul className="w-[175px] flex flex-col gap-4">
                <label className="text-base font-bold">Contact Us</label>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Our Story
                </li>
                <li className="text-sm font-medium font-Montserrat opacity-70">
                  Work with us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
