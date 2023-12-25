import { useState } from "react";

const ReservationForm = ({ label = "Default Label", data, img }) => {
  const initialOption = data[0];
  const [option, setOption] = useState(initialOption);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (selectedOption) => {
    setOption(selectedOption);
  };

  const handleActiveClick = () => setIsActive(!isActive);

  const handleReverse = (e) => {
    e.stopPropagation();
    setOption(option.split(" - ").reverse().join(" - "));
  };

  return (
    <form className="w-full mb-0 2xl:w-auto  lg:w-[48%]">
      <div className="flex flex-col">
        <span className="w-fit relative top-[14px] left-[20px] bg-white z-[1]">
          {label}
        </span>
        <div className="relative cursor-pointer">
          <div
            onClick={handleActiveClick}
            className="py-[18px] px-[16px] flex justify-between items-center gap-x-[100px]  border-[1px] border-solid border-[#79747E] rounded-[4px] relative"
          >
            <span>{option}</span>
            <img onClick={handleReverse} src={img} alt="" />
          </div>
          <div
            className={`w-full absolute lg:top-[70px] bg-white shadow-[0_4px_16px_0_rgba(141,_211,_187,_0.15)] rounded-[4px] z-10 transition-all duration-150 ${
              isActive
                ? ""
                : "opacity-0  translate-y-[-10px] pointer-events-none "
            }`}
          >
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => (handleClick(item), handleActiveClick())}
                className="py-[18px] px-[16px] rounded-[4px] hover:bg-gray-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default ReservationForm;
