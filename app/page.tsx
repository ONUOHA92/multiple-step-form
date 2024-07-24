"use client";
import { useMyContext } from "./provider";
import { DataType } from "@/utils/type-enums";
import { FormEvent, useState } from "react";
import Buttons from "@/component/Buttons";
import Tabs from "@/component/Tabs";
import { validation } from "@/utils/action";
import { rawData } from "@/utils/data";

export default function Home() {
  const { state, setState } = useMyContext();

  const [data, setData] = useState<DataType>(rawData);

  const nextTab = () => {
    const errorCheck = validation(state.step, data);

    if (errorCheck.length == 0) {
      setData((prev) => ({ ...prev, error: [] }));
      setState({ ...state, step: state.step + 1 });
    } else {
      setData((prev) => ({ ...prev, error: errorCheck }));
    }
    console.log(data.error);
  };
  const prevTab = () => {
    setState({ ...state, step: state.step - 1 });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="px-6">
        <div className="lg:h-[100vh] shadow-md p-7 lg:p-16 mx-auto lg:mt-0 -mt-28 rounded-md bg-white z-9 relative">
          <Tabs step={state.step} data={data} setData={setData} />
          <div className="invisible hidden lg:block lg:visible">
            <Buttons
              error={data.error}
              prevTab={prevTab}
              nextTab={nextTab}
              step={state.step}
            />
          </div>
        </div>
      </div>
      <div className="lg:invisible lg:hidden">
        <Buttons
          error={data.error}
          prevTab={prevTab}
          nextTab={nextTab}
          step={state.step}
        />
      </div>
    </form>
  );
}
