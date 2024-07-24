"use client";
import { useMyContext } from "@/app/provider";
import React, { useEffect, useState } from "react";

function Container({ children }: { children: React.ReactNode }) {
  const { state, setState } = useMyContext();
  const [step, setStep] = useState(state.step);

  useEffect(() => {
    setStep(state.step);
  }, [state.step]);

  const indicators = [
    { number: 1, info: "Your info" },
    { number: 2, info: "Select plan" },
    { number: 3, info: "Add-ons" },
    { number: 4, info: "Summary" },
  ];

  return (
    <main className="">
      <div className="lg:grid   grid-cols-[300px,1fr] relative bg-neutral-magnolia h-[100vh]  ">
        <div className="bg-center bg-no-repeat bg-cover lg:p-5 lg:bg-pattern-desktop bg-pattern-mobile">
          <ul className="  flex lg:flex-col flex-row min-h-[198px] justify-center gap-4">
            {indicators.map((indicator) => {
              return (
                <li
                  className="items-center gap-2 mt-3 lg:flex "
                  key={indicator.number}
                >
                  <p
                    className={`border border-neutral-alabaster 
                      rounded-full h-8 w-8   flex justify-center items-center font-semibold  ${
                        step == indicator.number - 1
                          ? "text-primary-marine-blue bg-primary-pastel-blue border-primary-pastel-blue"
                          : "text-neutral-alabaster "
                      } ${
                      indicator.number == indicators.length &&
                      step === indicators.length
                        ? "text-primary-marine-blue bg-primary-pastel-blue border-primary-pastel-blue"
                        : ""
                    } text-base`}
                  >
                    {indicator.number}
                  </p>
                  <div className="hidden lg:inline">
                    <p className="text-sm font-light text-neutral-cool-gray">
                      Step {indicator.number}
                    </p>
                    <h4 className="hidden text-lg font-bold text-white lg:inline">
                      {indicator.info}
                    </h4>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {children}
      </div>
    </main>
  );
}

export default Container;
