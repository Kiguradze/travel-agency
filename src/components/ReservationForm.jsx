import { useState } from "react";
import choose from "../assets/choose directions.png";

const ReservationForm = () => {
  const initialOption = "Lahore - Karachi";
  const [option, setOption] = useState(initialOption);
  const [isActive, setIsActive] = useState(false);

  const cities = [
    "Lahore - Karachi",
    "Tbilisi - Tokyo",
    "Kutaisi - Amsterdam",
    // Add more cities as needed
  ];

  const handleClick = (selectedOption) => {
    setOption(selectedOption);
  };

  const handleActiveClick = () => setIsActive(!isActive);

  return (
    <form className="w-[324px] my-[40px]">
      <div className="flex flex-col">
        <span className="absolute top-[92px] left-[50px] bg-white z-10">
          From - To
        </span>
        <div className="relative cursor-pointer">
          <div
            onClick={handleActiveClick}
            className="py-[18px] px-[16px] flex justify-between items-center border-[1px] border-solid border-black rounded-[4px] relative"
          >
            <span>{option}</span>
            <img src={choose} alt="" />
          </div>
          <div
            className={`w-full absolute top-[70px] bg-white shadow-[0_4px_16px_0_rgba(141,_211,_187,_0.15)] rounded-[4px] transition-all duration-150 ${
              isActive
                ? ""
                : "opacity-0  translate-y-[-10px] pointer-events-none "
            }`}
          >
            {cities.map((city, index) => (
              <div
                key={index}
                onClick={() => (handleClick(city), handleActiveClick())}
                className="py-[18px] px-[16px] rounded-[4px] hover:bg-gray-200"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;
