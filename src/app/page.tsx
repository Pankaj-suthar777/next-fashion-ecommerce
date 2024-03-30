import { CarouselHome } from "@/components/CarouselHome";
import NavbarSearch from "@/components/Navbar";
import CategoriesRow from "@/components/section/Categories/CategoriesRow";
import FeaturedRow from "@/components/section/Featured/FeaturedRow";
import NewArrivalsRow from "@/components/section/NewArrivals/NewArrivalsRow";
import BrandRow from "@/components/section/WhyChooseUs/BrandRow";
import WhyChooseUs from "@/components/section/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <NavbarSearch type="home" />
      <div className="flex flex-col items-center  overscroll-x-none h-full">
        <div className="md:mb-10 mb-4">
          <CarouselHome />
        </div>

        <div className="xl:w-[75%] xl:px-0 px-4 w-full sm:mt-[20px] mt-[10px] space-y-8 sm:space-y-16 ">
          <CategoriesRow />
          <NewArrivalsRow />
          <FeaturedRow />
          <WhyChooseUs />
          <BrandRow />
        </div>
      </div>
    </div>
  );
}
