import { DataType } from "@/utils/type-enums";
import React, { Dispatch, FormEvent, SetStateAction } from "react";
import Title from "../Title";

function Tab1({
  data,
  setData,
}: {
  data: DataType;
  setData: Dispatch<SetStateAction<DataType>>;
}) {
  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const inputField = [
    {
      name: "name",
      label: "Name",
      placeholder: "e.g. Stephen King",
      value: data.name,
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "e.g. stephenking@lorem.com",
      value: data.email,
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "e.g. +1 234 567 890",
      value: data.phone,
    },
  ];

  return (
    <div id="tab1">
      <Title
        title="Personal info"
        sub="Please provide your name, email, address, and phone number. "
      />
      {inputField.map((field, indexInput) => {
        const hasError = data.error.some((item) => item.index === indexInput);

        return (
          <div key={field.name}>
            <div className="flex justify-between mt-5 text-sm">
              <label
                className="text-sm font-semibold text-primary-marine-blue"
                htmlFor="name"
              >
                {field.label}
              </label>
              {data.error.map((item, index) => {
                if (item.index === indexInput) {
                  return (
                    <label
                      key={index}
                      className=" text-primary-strawberry-red"
                      htmlFor="name"
                    >
                      {item.errorMsg}
                    </label>
                  );
                }
              })}
            </div>
            <input
              onChange={handleInput}
              value={field.value}
              className={`font-semibold text-sm placeholder:text-neutral-cool-gray text-primary-marine-blue hover:cursor-pointer placeholder:font-normal   focus-within:outline-primary-purplish-blue rounded-md w-full px-3 py-2 border ${
                hasError ? "border-primary-strawberry-red" : ""
              } `}
              onKeyDown={handleKeyDown}
              type="text"
              name={`${field.name}`}
              id={`${field.name}`}
              placeholder={`${field.placeholder}`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Tab1;
