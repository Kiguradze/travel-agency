import airplane from "../assets/airplane black.png";
import bed from "../assets/icon_bed black.png";
import ReservationForm from "./ReservationForm";
import choose from "../assets/choose directions.png";
import flightsIcon from "../assets/showFlightsIcon.svg";
import chevronDown from "../assets/chevron_down.svg";
import { useState } from "react";

const Reservation = () => {
  const cities = ["Lahore - Karachi", "Tbilisi - Tokyo", "Kutaisi - Amsterdam"];
  const trips = ["Return", "Fly"];
  const time = ["07 Nov 22 - 13 Nov 22"];
  const passengerClass = ["1 Passenger, Economy"];
  const [activeTab, setActiveTab] = useState(null);
  const [highlightPosition, setHighlightPosition] = useState(0);

  const handleTabClick = (tab, position) => {
    setActiveTab(tab);
    setHighlightPosition(position);
  };

  return (
    <div className="w-full xl:w-[90%] md:w-full  pt-[16px] px-[32px] pb-[32px]  absolute bottom-[0] left-1/2 translate-x-[-50%] translate-y-[75%] lg:translate-y-[65%]  lg:rounded-[16px] bg-white shadow-[0_4px_16px_0_rgba(141,_211,_187,_0.15)]  ">
      <div className="w-max flex items-center justify-between relative">
        <a
          href="#"
          className="py-[12px] pr-[32px] pl-[12px] flex items-center gap-x-[8px] text-[16px] font-[600] text-#112211 hover:bg-gray-200 duration-200 border-r-[1px] rounded-l-md border-#D7E2EE "
          onClick={() => handleTabClick("flights", 15)}
        >
          <img src={airplane} alt="" />
          <span>Flights</span>
        </a>
        <a
          href="#"
          className="py-[12px] pl-[32px] pr-[12px] flex items-center gap-x-[8px] text-[16px] font-[600] text-#112211 hover:bg-gray-200 duration-200 rounded-r-md"
          onClick={() => handleTabClick("stays", 150)}
        >
          <img src={bed} alt="" />
          <span>Stays</span>
        </a>
        {activeTab && (
          <div
            className="w-[35%] h-1 bg-[#8DD3BB] absolute -bottom-3 duration-150"
            style={{ left: `${highlightPosition}px` }}
          ></div>
        )}
      </div>
      <div className="mt-[40px] flex justify-between flex-wrap gap-x-[24px]">
        <ReservationForm label={"From - To"} data={cities} img={choose} />
        <ReservationForm label={"Trip"} data={trips} img={chevronDown} />
        <ReservationForm label={"Depart - Return"} data={time} />
        <ReservationForm label={"Passenger - Class"} data={passengerClass} />
      </div>

      <div className="mt-[32px] mr-[32px] flex items-center justify-end gap-6">
        <span className="py-2 text-[14px] font-[500] rounded-[4px]">
          + Add Promo Code
        </span>
        <button className="py-2 px-4 flex items-center gap-[5px] text-[14px] font-[500] rounded-[4px] bg-[#8DD3BB] hover:bg-[#98e4c9] duration-150">
          <img src={flightsIcon} alt="" />
          Show Flights
        </button>
      </div>
    </div>
  );
};

export default Reservation;
