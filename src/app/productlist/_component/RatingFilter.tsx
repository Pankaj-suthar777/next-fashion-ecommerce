"use client";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

const RatingFilter = ({
  items,
}: {
  items: {
    star: number;
    id: number;
  }[];
}) => {
  const [selected, setSelected] = useState<number[]>([1]);
  return (
    <div className="flex flex-col gap-y-3">
      {items.map((item, index) => {
        const isInclude = selected.includes(item.id);
        return (
          <div className="flex gap-4 items-center">
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
              className={`text-sm font-medium flex items-center
              }`}
            >
              {Array.from({ length: item.star }).map((_, index) => (
                <div key={index} className="flex items-center">
                  <i className="ri-star-fill text-xl text-yellow-500"></i>
                </div>
              ))}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RatingFilter;
