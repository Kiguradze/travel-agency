import flightsIcon from "../../assets/showFlightsIcon.svg";

const ShowFlightsBtn = () => {
  return (
    <button className="w-full py-2 px-4 flex items-center justify-center gap-[5px] text-[14px] font-[500] rounded-[4px] bg-[#8DD3BB] hover:bg-[#98e4c9] duration-150 sm:w-fit">
      <img src={flightsIcon} alt="" />
      Show Flights
    </button>
  );
};

export default ShowFlightsBtn;
