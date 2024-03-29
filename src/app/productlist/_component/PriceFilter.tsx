"use client";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

const PriceFilter = ({
  items,
}: {
  items: {
    between: string;
    onClick: Function;
    id: number;
  }[];
}) => {
  const [selected, setSelected] = useState<number[]>([1]);

  return (
    <div className="flex flex-col gap-y-5">
      {items.map((item, index) => {
        const isInclude = selected.includes(item.id);
        return (
          <div key={index} className="flex gap-4 items-center">
            <Checkbox
              id={item.id.toString()}
              onClick={() => {
                if (isInclude) {
                  setSelected((prev) => prev.filter((id) => id !== item.id));
                } else {
                  setSelected((pre) => [...pre, item.id]);
                }
              }}
            />
            <label
              htmlFor={item.id.toString()}
              className={`text-sm font-medium ${
                isInclude ? "text-black" : "text-slate-400"
              }`}
            >
              {item.between}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default PriceFilter;
