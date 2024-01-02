import React from "react";

const SeeBtn = ({ text }) => {
  return (
    <button className="w-full sm:w-fit px-4 py-2 text-sm font-medium text-[#112211] border-solid border-[1px] border-[#8DD3BB] rounded hover:bg-[#8DD3BB] duration-150">
      {text}
    </button>
  );
};

export default SeeBtn;
