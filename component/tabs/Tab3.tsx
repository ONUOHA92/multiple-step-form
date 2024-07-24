import { AddonsType, DataType } from "@/utils/type-enums";
import { Dispatch, SetStateAction } from "react";
import Title from "../Title";
import { addonsPriceMap } from "@/utils/data";

function Tab3({
  data,
  setData,
}: {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}) {
  const applyAddon = (target: keyof DataType, isActive: boolean) => {
    setData((prev) => ({ ...prev, [target]: isActive }));
  };
  const addons: AddonsType[] = [
    {
      title: "Online service",
      info: "Access to multiplayer games",
      price: addonsPriceMap.get("Online service") || 0,
      isActive: data.isOnlineService,
      target: "isOnlineService" as keyof DataType,
    },
    {
      title: "Larger storage",
      info: "Extra 1TB of cloud save",
      price: addonsPriceMap.get("Larger storage") || 0,
      isActive: data.isLargerStorage,
      target: "isLargerStorage" as keyof DataType,
    },
    {
      title: "Customizable Profile",
      info: "Custom theme on your profile",
      price: addonsPriceMap.get("Customizable Profile") || 0,
      isActive: data.isCustomizableProfile,
      target: "isCustomizableProfile" as keyof DataType,
    },
  ];
  return (
    <div id="tab3">
      <Title
        title="Pick add-ons"
        sub="Add-ons help enhance your gaming experience."
      />

      <div className="flex flex-col gap-3 mt-3 shadow-md xl:flex-row">
        {addons.map((item) => {
          const isYear = data.isYear;
          const price = isYear ? item.price * 10 : item.price;
          return (
            <label
              htmlFor={`${item.title}`}
              key={item.title}
              className={`cursor-pointer hover:border-primary-purplish-blue flex items-center flex-1 p-4 text-left border rounded-md ${
                item.isActive ? "border-primary-purplish-blue" : ""
              }  `}
            >
              <label
                htmlFor={`${item.title}`}
                className={`p-2 ml-1 mr-4 bg-cover border-[1px] ${
                  item.isActive
                    ? "bg-checkMark border-transparent"
                    : "  border-neutral-light-gray rounded-md"
                } `}
              >
                <input
                  onChange={() => applyAddon(item.target, !item.isActive)}
                  checked={item.isActive}
                  type="checkbox"
                  name={`${item.title}`}
                  id={`${item.title}`}
                  className="invisible hidden"
                />
              </label>
              <div className="">
                <h4 className="font-bold text-primary-marine-blue">
                  {item.title}
                </h4>
                <p className="text-xs font-medium text-neutral-cool-gray">
                  {item.info}
                </p>
              </div>
              <p className="ml-auto text-xs font-medium text-primary-purplish-blue">
                +${price}/{isYear ? "yr" : "mo"}
              </p>
            </label>
          );
        })}
      </div>
    </div>
  );
}
export default Tab3;
