import React from "react";
import footerLogo from "../assets/footerLogo.png";
import fb from "../assets/fbIcon.svg";
import twt from "../assets/twtIcon.svg";
import youtube from "../assets/youtubeIcon.svg";
import insta from "../assets/instaIcon.svg";

const Footer = () => {
  return (
    <footer className="h-[422px] mt-[265px]  bg-[#8DD3BB] relative">
      <div className="w-full h-[305px] px-6 rounded-[20px] mx-auto flex justify-between xl:w-[90%] bg-[#CDEAE1] absolute -top-[35%] left-1/2 -translate-x-1/2 ">
        <div className="py-6">
          <h2>Subscribe Newsletter</h2>
          <h3>The Travel</h3>
          <p>
            Get inspired! Receive travel discounts, tips and behind the scenes
            stories.
          </p>
          <form action="" className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Your email address"
              className="w-[457px] px-4 py-[18px] rounded"
            />
            <button className="px-4 py-[18px] text-sm font-semibold bg-black text-white rounded">
              Subscribe
            </button>
          </form>
        </div>
        <div>IMG</div>
      </div>
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="w-full h-full mx-auto xl:w-[90%]">
          <div className="w-full pt-[218px] flex justify-between mt-[218px]">
            <div>
              <img src={footerLogo} alt="" className="cursor-pointer" />
              <div className="mt-6 flex items-center gap-3">
                <img src={fb} alt="" className="cursor-pointer " />

                <img src={twt} alt="" className="cursor-pointer" />
                <img src={youtube} alt="" className="cursor-pointer" />
                <img src={insta} alt="" className="cursor-pointer" />
              </div>
            </div>
            <div className="flex gap-6">
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
