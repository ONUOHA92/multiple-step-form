import { DataType } from "@/utils/type-enums";

import React, { Dispatch, SetStateAction } from "react";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";
import Tab4 from "./tabs/Tab4";
import Tab5 from "./tabs/Tab5";

const tabs = [Tab1, Tab2, Tab3, Tab4, Tab5];

function Tabs({
  step,
  data,
  setData,
}: {
  step: number;
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}) {
  return (
    <div>
      {tabs.map((Tab, index) => {
        if (index == step) {
          return <Tab key={index} data={data} setData={setData} />;
        }
      })}
    </div>
  );
}

export default Tabs;
