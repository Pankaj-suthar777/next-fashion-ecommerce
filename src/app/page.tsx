import { CarouselHome } from "@/components/home-section/carousel-home";
import ShiftingCountdown from "@/components/Countdown";
import NavbarSearch from "@/components/layout/navbar/navbar";
import CategoriesRow from "@/components/home-section/Categories/CategoriesRow";
import FeaturedRow from "@/components/home-section/Featured/FeaturedRow";
import NewArrivalsRow from "@/components/home-section/NewArrivals/NewArrivalsRow";
import BrandRow from "@/components/home-section/WhyChooseUs/BrandRow";
import WhyChooseUs from "@/components/home-section/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <NavbarSearch type="home" />
      <div className="flex flex-col items-center overscroll-x-none h-full">
        <div className="md:mb-10 mb-4">
          <CarouselHome />
        </div>

        <div className="xl:w-[75%] xl:px-0 px-4 w-full sm:mt-[20px] mt-[10px] space-y-8 sm:space-y-16 ">
          <CategoriesRow />
          <div>
            <h1 className="text-center text-2xl mb-5">Sales {"Start's"} In</h1>{" "}
            <ShiftingCountdown />
          </div>
          <NewArrivalsRow />
          <FeaturedRow />
          <WhyChooseUs />
          <BrandRow />
        </div>
      </div>
    </div>
  );
}
