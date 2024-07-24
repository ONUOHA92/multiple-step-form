import { advancedIcon, arcadeIcon, proIcon } from "@/public/assets/images";
import { DataType, PlanEnum, PlanType } from "./type-enums";

export const planPrice = [
  {
    plan: PlanEnum.Arcade,
    price: 9,
  },
  {
    plan: PlanEnum.Advanced,
    price: 12,
  },
  {
    plan: PlanEnum.Pro,
    price: 15,
  },
];

export const planPriceMap = new Map(
  planPrice.map(({ plan, price }) => [plan, price])
);

export const plans: PlanType[] = [
  {
    icon: arcadeIcon,
    name: PlanEnum.Arcade,
    price: planPriceMap.get(PlanEnum.Arcade) || 0,
  },
  {
    icon: advancedIcon,
    name: PlanEnum.Advanced,
    price: planPriceMap.get(PlanEnum.Advanced) || 0,
  },
  {
    icon: proIcon,
    name: PlanEnum.Pro,
    price: planPriceMap.get(PlanEnum.Pro) || 0,
  },
];

export const rawData: DataType = {
  name: "",
  email: "",
  phone: "",
  plan: PlanEnum.Arcade,
  isYear: false,
  isOnlineService: false,
  isLargerStorage: false,
  isCustomizableProfile: false,
  total: 0,
  error: [],
};

export const addonsPrice = [
  {
    name: "Online service",
    target: "isOnlineService" as keyof DataType,
    price: 1,
  },
  {
    name: "Larger storage",
    target: "isLargerStorage" as keyof DataType,
    price: 2,
  },
  {
    name: "Customizable Profile",
    target: "isCustomizableProfile" as keyof DataType,
    price: 2,
  },
];

export const addonsPriceMap = new Map(
  addonsPrice.map(({ name, price }) => [name, price])
);
