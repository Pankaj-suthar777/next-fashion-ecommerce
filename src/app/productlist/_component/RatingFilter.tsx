"use client";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useEffect, useState } from "react";

const ratingArray = [
  { id: 1, star: 1, onClick: () => {} },
  { id: 2, star: 2, onClick: () => {} },
  { id: 3, star: 3, onClick: () => {} },
  { id: 4, star: 4, onClick: () => {} },
];

const RatingFilter = ({
  filters,
  setFilters,
}: {
  filters: any;
  setFilters: Function;
}) => {
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    // Include selected ratings in filters when component mounts
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      rating: selected,
    }));
  }, [selected]); // Update when selected ratings change

  useEffect(() => {
    // Ensure "All Ratings" is checked when component mounts
  }, []); // Run only once when component mounts

  return (
    <div className="flex flex-col gap-y-3">
      {ratingArray.map((item, index) => {
        const isInclude = selected.includes(item.id);
        return (
          <div key={index} className="flex gap-4 items-center">
            <Checkbox
              id={item.id.toString()}
              onClick={() => {
                if (isInclude) {
                  setSelected((prev) => prev.filter((id) => id !== item.id));
                } else {
                  setSelected((prev) => [...prev, item.id]);
                }
              }}
              checked={isInclude} // Ensure selected rating options are checked
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
