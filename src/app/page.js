"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCheck } from "react-icons/fa6";

const Page = () => {
  const [value, onChange] = useState(new Date());

  const handleDateChange = (newDate) => {
    onChange(newDate);
  };

  return (
    <div className="w-full h-full grid place-content-center">
      <h1 className="text-5xl mb-7 capitalize">react calendar</h1>
      <div className="border-2 w-[360px] p-4 border-[#00000033] rounded-3xl drop-conustionMatrix flex flex-col gap-4">
        <h3 className="text-[#1B1F23] font-sans text-2xl font-medium capitalize">
          {" "}
          Start Date
        </h3>
        <hr className="border-[#00000033]" />
        <Calendar
          value={value}
          maxDate={new Date()}
          onChange={handleDateChange}
          className={"  border-0 outline-none"}
        />
        <hr className="border-[#00000033]" />

        <div className="flex justify-center gap-4">
          <button className="text-base border-2   py-[10px] w-[90px] rounded-[8px] grid place-content-center font-bold text-[#2960EC] tracking-[.8px] capitalize font-inter ">
            Cancel
          </button>
          <button className="text-base border-2   py-[10px] w-[90px] rounded-[8px] flex justify-center items-center font-bold tracking-[.8px] capitalize font-inter text-white bg-[#1C4E80] gap-1">
            <FaCheck size={18} color="white" />
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
