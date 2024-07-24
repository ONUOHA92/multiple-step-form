export type DataType = {
  name: string;
  email: string;
  phone: string;
  plan: PlanEnum;
  isYear: boolean;
  isOnlineService: boolean;
  isLargerStorage: boolean;
  isCustomizableProfile: boolean;
  total: number;
  error: ErrorType[];
};

export type PlanType = {
  icon: string;
  name: PlanEnum;
  price: number;
};

export type AddonsType = {
  title: string;
  info: string;
  price: number;
  isActive: boolean;
  target: keyof DataType;
};

export type ErrorType = {
  index: number;
  errorMsg: string;
};

export enum PlanEnum {
  Arcade = "Arcade",
  Advanced = "Advanced",
  Pro = "Pro",
}
