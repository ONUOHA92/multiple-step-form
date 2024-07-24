import { DataType, PlanEnum } from "@/utils/type-enums";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Title from "../Title";
import { plans } from "@/utils/data";
import MonthYearToggle from "../MonthYearToggle";

function Tab2({
  data,
  setData,
}: {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}) {
  const setIsYear = (isYear: boolean) => {
    setData((prevData) => ({ ...prevData, isYear }));
  };

  const setPlans = (plan: PlanEnum) => {
    setData((prevData) => ({ ...prevData, plan }));
  };

  return (
    <div id="tab2">
      <Title
        title="Select your plan"
        sub="You have the option of monthly or yearly billing."
      />

      <div className="flex flex-col gap-3 mt-5 lg:flex-row ">
        {plans.map((item) => {
          let price = data.isYear ? item.price * 10 : item.price;
          let date = data.isYear ? "yr" : "mo";
          return (
            <button
              type="button"
              className={`
                hover:border-primary-purplish-blue
              shadow-md ${
                data.plan === item.name
                  ? "border-primary-purplish-blue bg-neutral-magnolia"
                  : ""
              }
              flex-1
              rounded-md border  gap-5 flex items-center min-h-[80px] px-4`}
              key={item.name}
              onClick={() => setPlans(item.name)}
            >
              <Image src={item.icon} alt="" />
              <div className="text-left ">
                <h3 className="font-bold text-primary-marine-blue">
                  {item.name}
                </h3>
                <p id="pricing" className="text-sm text-neutral-cool-gray">
                  ${price}/{date}
                </p>
                <p className="text-sm font-semibold text-neutral-cool-gray">
                  {data.isYear ? "2 months free" : ""}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <MonthYearToggle data={data} setIsYear={setIsYear} />
    </div>
  );
}
export default Tab2;
