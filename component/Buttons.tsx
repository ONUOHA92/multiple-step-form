import { ErrorType } from "@/utils/type-enums";
import React, { SetStateAction } from "react";

function Buttons({
  error,
  prevTab,
  nextTab,
  step,
}: {
  error: ErrorType[];
  prevTab: () => void;
  nextTab: () => void;
  step: number;
}) {
  return (
    <div
      id="buttons"
      className="flex text-neutral-light-gray font-semibold justify-between w-full  absolute bottom-0 right-0 py-4 h-[80px] px-4 bg-white"
    >
      <div
        className={`px-10 ${
          step >= 1 && step < 4 ? "invisible hidden" : "  "
        }  `}
      ></div>
      <button
        type="button"
        className={`hover:text-primary-marine-blue  w-32 p-2 ${
          step >= 1 && step < 4 ? "" : "invisible hidden  "
        }col-start-1 `}
        onClick={prevTab}
      >
        Go Back
      </button>
      <button
        type="button"
        id="next"
        className={`hover:bg-primary-marine-blue rounded-md w-32 bg-black text-white  p-2    ${
          step < 3 ? "" : "invisible hidden "
        } col-start-2`}
        onClick={nextTab}
      >
        Next Step
      </button>
      <button
        type="submit"
        id="next"
        className={` hover:bg-primary-pastel-blue rounded-md w-32 bg-primary-purplish-blue text-white  p-2  ${
          step === 3 ? "" : "invisible hidden   "
        } col-start-2`}
        onClick={nextTab}
      >
        Confirm
      </button>
    </div>
  );
}

export default Buttons;
