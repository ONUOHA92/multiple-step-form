"use client";
import { useMyContext } from "@/app/provider";
import { DataType } from "@/utils/type-enums";
import { Dispatch, SetStateAction, useEffect } from "react";
import Title from "../Title";
import { addonsPrice, planPriceMap } from "@/utils/data";

function Tab4({
  data,
  setData,
}: {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}) {
  const { state, setState } = useMyContext();
  const planPrice = data.isYear
    ? (planPriceMap.get(data.plan) || 0) * 10
    : planPriceMap.get(data.plan) || 0;
  const isYear = data.isYear;
  const format = isYear ? "yr" : "mo";

  const totalAmount = addonsPrice.reduce((total, item) => {
    if (data[item.target as keyof DataType]) {
      const addonPrice = isYear ? item.price * 10 : item.price;
      return total + addonPrice;
    }
    return total;
  }, planPrice);

  useEffect(() => {
    setData((prev) => ({ ...prev, total: totalAmount }));
  }, [totalAmount, setData]);

  return (
    <div id="tab4">
      <Title
        sub="Double-check everything looks OK before confirming."
        title="Finishing up"
      />
      <div className="p-3 mt-5 rounded-md bg-neutral-magnolia">
        <div className="flex items-center justify-between mb-3 border-b-2">
          <div className="mb-3">
            <p className="font-bold text-primary-marine-blue">
              {data.plan} ({isYear ? "Yearly" : "Monthly"})
            </p>
            <button
              className="underline hover:text-primary-purplish-blue text-neutral-cool-gray"
              type="button"
              onClick={() => setState({ ...state, step: 1 })}
            >
              Change
            </button>
          </div>
          <p className="text-sm font-bold text-primary-marine-blue">
            ${planPrice}/{format}
          </p>
        </div>
        {addonsPrice.map((item) => {
          const target: keyof DataType = item.target;
          if (data[target]) {
            return (
              <div
                key={target}
                className="flex items-center justify-between mb-2"
              >
                <h3 className="text-neutral-cool-gray">{item.name}</h3>
                <p id="pricing" className="text-sm text-primary-marine-blue">
                  +${isYear ? item.price * 10 : item.price}/{format}
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className="flex items-center justify-between px-3 mt-5 ">
        <p className="text-neutral-cool-gray">
          Total (per <span>{isYear ? "year" : "month"}</span>)
        </p>
        <p className="font-bold text-primary-purplish-blue">
          ${totalAmount}/{format}
        </p>
      </div>
    </div>
  );
}

export default Tab4;
