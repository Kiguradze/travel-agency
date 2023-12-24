import airplane from "../assets/airplane black.png";
import bed from "../assets/icon_bed black.png";
import ReservationForm from "./ReservationForm";
import choose from "../assets/choose directions.png";

const Reservation = () => {
  const cities = ["Lahore - Karachi", "Tbilisi - Tokyo", "Kutaisi - Amsterdam"];
  const trips = ["Return", "Fly"];
  const time = ["07 Nov 22 - 13 Nov 22"];
  const passengerClass = ["1 Passenger, Economy"];

  return (
    <div className="w-full xl:w-[90%] md:w-full  pt-[16px] px-[32px] pb-[32px]  absolute bottom-[0] left-1/2 translate-x-[-50%] translate-y-[50%] rounded-[16px] bg-white shadow-[0_4px_16px_0_rgba(141,_211,_187,_0.15)]  ">
      <div className="w-max flex items-center justify-between ">
        <a
          href="#"
          className="py-[12px] pr-[32px] pl-[12px] flex items-center gap-x-[8px] text-[16px] font-[600] text-#112211 hover:bg-gray-200 duration-200 border-r-[1px] rounded-l-md border-#D7E2EE"
        >
          <img src={airplane} alt="" />
          <span>Flights</span>
        </a>
        <a
          href="#"
          className="py-[12px] pl-[32px] pr-[12px] flex items-center gap-x-[8px] text-[16px] font-[600] text-#112211 hover:bg-gray-200 duration-200 rounded-r-md"
        >
          <img src={bed} alt="" />
          <span>Stays</span>
        </a>
      </div>
      <div className="flex justify-between flex-wrap gap-x-[24px]">
        <ReservationForm label={"From - To"} data={cities} img={choose} />
        <ReservationForm label={"Trip"} data={trips} />
        <ReservationForm label={"Depart - Return"} data={time} />
        <ReservationForm label={"Passenger - Class"} data={passengerClass} />
      </div>
    </div>
  );
};

export default Reservation;
