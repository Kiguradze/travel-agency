import React from "react";
import airplane from "../assets/airplane black.png";
import bed from "../assets/icon_bed black.png";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <div className="mx-w-[1232px] min-h-[280px] pt-[16px] px-[32px] pb-[32px]  absolute bottom-[-50%] left-1/2 translate-x-[-50%] translate-y-[-50%]  rounded-[16px] bg-white shadow-[0_4px_16px_0_rgba(141,_211,_187,_0.15)]  ">
      <div className="flex items-center justify-between ">
        <a
          href="#"
          className="py-[12px] pr-[32px] pl-[12px] flex items-center gap-x-[8px] text-[16px] font-[600] text-#112211 hover:bg-gray-200 duration-200 border-r-[1px] rounded-md border-#D7E2EE"
        >
          <img src={airplane} alt="" />
          <span>Flights</span>
        </a>
        <a
          href="#"
          className="py-[12px] pl-[32px] pr-[12px] flex items-center gap-x-[8px] text-[16px] font-[600] text-#112211 hover:bg-gray-200 duration-200 rounded-md"
        >
          <img src={bed} alt="" />
          <span>Stays</span>
        </a>
      </div>

      <ReservationForm />
    </div>
  );
};

export default Reservation;
