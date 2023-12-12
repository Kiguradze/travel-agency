import React from "react";

const ReservationForm = () => {
  return (
    <form className="my-[40px]">
      <div className="flex flex-col">
        <label
          htmlFor="destination"
          className="absolute top-[92px] left-[50px] bg-white z-10"
        >
          From - To
        </label>
        <select
          name="destination"
          id="destination"
          className="py-[18px] pl-[16px] border-[1px] border-#79747E relative"
        >
          <option className="py-[18px]" value="lahore-karachi">
            Lahore - Karachi
          </option>
          <option className="py-[18px]" value="lahore-karachi">
            Tbilisi - Tokyo
          </option>
          <option className="py-[18px]" value="lahore-karachi">
            Kutaisi - Amsterdam
          </option>
        </select>
      </div>
    </form>
  );
};

export default ReservationForm;
