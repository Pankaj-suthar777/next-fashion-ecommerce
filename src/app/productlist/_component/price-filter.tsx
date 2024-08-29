"use client";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useEffect, useState } from "react";

const pricesArray = [
  { id: 11, between: "All Price", value: "any", onClick: () => {} },
  { id: 12, between: "$100 - $250", value: "100-250", onClick: () => {} },
  { id: 13, between: "$250 - $500", value: "250-500", onClick: () => {} },
  { id: 14, between: "$750 - $1000", value: "750-1000", onClick: () => {} },
  { id: 15, between: "$1000 - $1500", value: "1000-1500", onClick: () => {} },
];
const PriceFilter = ({
  filters,
  setFilters,
}: {
  filters: any;
  setFilters: Function;
}) => {
  const [selected, setSelected] = useState<string[]>([...filters.price]);

  // useEffect(() => {
  //   if (filters.price.length > 1) {
  //     setFilters((prevFilters: any) => ({
  //       ...prevFilters,
  //       price: filters.price,
  //     }));
  //   }
  // }, []);

  useEffect(() => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      price: selected,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePriceClick = (priceValue: string) => {
    if (selected.includes(priceValue)) {
      setSelected((prevSelected) =>
        prevSelected.filter((value) => value !== priceValue)
      );
    } else {
      setSelected((prevSelected) => [...prevSelected, priceValue]);
    }
  };

  useEffect(() => {
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      price: selected,
    }));
  }, [selected, setFilters]);

  return (
    <div className="flex flex-col gap-y-5">
      {pricesArray.map((item) => {
        const isInclude = selected.includes(item.value);
        return (
          <div key={item.id} className="flex gap-4 items-center">
            <Checkbox
              id={item.id.toString()}
              onClick={() => handlePriceClick(item.value)}
              checked={isInclude || filters.price.includes(item.value)}
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
