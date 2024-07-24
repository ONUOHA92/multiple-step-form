import { DataType } from "@/utils/type-enums";
import React from "react";

function MonthYearToggle({
  setIsYear,
  data,
}: {
  setIsYear: (isYear: boolean) => void;
  data: DataType;
}) {
  return (
    <div className="flex items-center justify-center gap-3 py-2 mt-5 rounded-md bg-neutral-magnolia">
      <button
        onClick={() => setIsYear(false)}
        className={` 
            font-bold hover:cursor-pointer ${
              !data.isYear
                ? "text-primary-marine-blue"
                : " text-neutral-cool-gray"
            }`}
      >
        Monthly
      </button>

      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          checked={data.isYear}
          onChange={() => setIsYear(!data.isYear)}
          className="sr-only"
        />

        <div
          className={`relative block w-9 h-5  rounded-full bg-primary-marine-blue`}
        ></div>

        <div
          className={`absolute top-1  bg-white w-3 h-3 rounded-full transition-all  ease-in-out ${
            data.isYear ? "  left-[20.5px]" : "left-1"
          }`}
        ></div>
      </label>

      <button
        onClick={() => setIsYear(true)}
        className={` font-bold  hover:cursor-pointer ${
          data.isYear ? "text-primary-marine-blue" : " text-neutral-cool-gray"
        }`}
      >
        Yearly
      </button>
    </div>
  );
}

export default MonthYearToggle;
