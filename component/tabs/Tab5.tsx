import { thankyouIcon } from "@/public/assets/images";

import Image from "next/image";

function Tab5() {
  return (
    <div className="flex flex-col items-center p-10 text-pretty lg:p-28">
      <Image className="mb-5" src={thankyouIcon} alt="" />
      <h1 className="mb-2 text-2xl font-bold text-primary-marine-blue">
        Thank you!
      </h1>
      <p className="text-center text-neutral-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
export default Tab5;
