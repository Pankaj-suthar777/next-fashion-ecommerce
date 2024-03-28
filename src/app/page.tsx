import { CarouselHome } from "@/components/CarouselHome";
import CategoriesRow from "@/components/section/Categories/CategoriesRow";
import FeaturedRow from "@/components/section/Featured/FeaturedRow";
import NewArrivalsRow from "@/components/section/NewArrivals/NewArrivalsRow";
import BrandRow from "@/components/section/WhyChooseUs/BrandRow";
import WhyChooseUs from "@/components/section/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center  overscroll-x-none h-full">
        <div className="mb-10">
          <CarouselHome />
        </div>

        <div className="xl:w-[75%] xl:px-0 px-12 w-full mt-[20px] space-y-16">
          <CategoriesRow />
          <NewArrivalsRow />
          <FeaturedRow />
          <WhyChooseUs />
          <BrandRow />
        </div>
      </div>
    </>
  );
}
