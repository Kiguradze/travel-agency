import React from "react";

const TripCard = ({ img, destination, includes }) => {
  return (
    <div className="w-[100%]  md:w-[47%] lg:w-[30%]  px-4 py-4 flex items-center justify-start gap-4 rounded-2xl bg-white shadow-[0_4px_16px_0_rgba(17,34,17,_0.05)] hover:shadow-[0_4px_16px_0_rgba(17,34,17,_0.2)] duration-150 cursor-pointer hover:scale-105">
      <img src={img} alt={destination} />
      <div>
        <span className="text-[16px] opacity-70 font-semibold font-Montserrat">
          {destination}
        </span>
        <ul className="flex items-center justify-between gap-1 ">
          {includes?.map((item, index) => {
            return (
              <li
                key={index}
                className="text-[14px] font-medium font-Montserrat"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TripCard;
