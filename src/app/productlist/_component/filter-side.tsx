import React from "react";
import CategoriesFilter from "./categories-filter";
import { Separator } from "@/components/ui/separator";
import PriceFilter from "./price-filter";
import RatingFilter from "./rating-filter";

const FilterSide = ({
  filters,
  setFilters,
}: {
  filters: {
    category: string[];
    price: string[];
  };
  setFilters: Function;
}) => {
  return (
    <div>
      <h1 className="text-semibold text-lg ">Categories</h1>
      <Separator className="my-4" />
      <CategoriesFilter filters={filters} setFilters={setFilters} />
      <Separator className="my-4" />
      <h1 className="text-semibold text-lg mb-8">Filter by Price</h1>
      <PriceFilter filters={filters} setFilters={setFilters} />
      <Separator className="my-4" />
      <h1 className="text-semibold text-lg mb-8">Filter by Rating</h1>
      <RatingFilter filters={filters} setFilters={setFilters} />
    </div>
  );
};

export default FilterSide;
