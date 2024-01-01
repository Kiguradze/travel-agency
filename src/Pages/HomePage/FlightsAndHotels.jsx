import React from "react";
import ShowFlightsBtn from "../../components/buttons/ShowFlightsBtn";
import Flights from "../../assets/NavigateToFlights.png";
import Hotels from "../../assets/NavigateToHotels.png";

const FlightsAndHotels = () => {
  return (
    <section className="w-full px-4 xl:w-[90%] mx-auto mt-[80px]">
      <div className="flex  flex-col items-center justify-between gap-6 md:flex-row ">
        <div className="relative">
          <div className="w-full h-full absolute bg-gradient-to-b from-transparent to-black rounded-3xl opacity-60"></div>
          <img src={Flights} alt="" />
          <div className="absolute bottom-6 left-2/4 -translate-x-2/4 flex flex-col items-center text-center">
            <h2 className="mb-2 text-[40px] font-bold text-white">Flights</h2>
            <p className="mb-4 text-sm font-normal font-Montserrat text-white">
              Search Flights & Places Hire to our most popular destinations
            </p>
            <ShowFlightsBtn />
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-full absolute bg-gradient-to-b from-transparent to-black rounded-3xl opacity-60"></div>
          <img src={Hotels} alt="" />
          <div className="absolute bottom-6 right-2/4 translate-x-2/4 flex flex-col items-center text-center">
            <h2 className="mb-2 text-[40px] font-bold text-white">Hotels</h2>
            <p className="mb-4 text-sm font-normal font-Montserrat text-white">
              Search hotels & Places Hire to our most popular destinations
            </p>
            <ShowFlightsBtn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightsAndHotels;
