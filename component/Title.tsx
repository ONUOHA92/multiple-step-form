import React from "react";

function Title({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="text-pretty">
      <h1 className="text-2xl font-bold text-primary-marine-blue">{title}</h1>
      <p className="mt-2 text-neutral-cool-gray lg:max-w-[unset] max-w-[25rem]">
        {sub}
      </p>
    </div>
  );
}

export default Title;
