import { CarouselHome } from "@/components/CarouselHome";
import CategoriesHome from "@/components/section/CategoriesHome";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center w-screen overscroll-x-none">
      <div className="mb-10 mt-2">
        <CarouselHome />
      </div>

      <div className="xl:w-[70%] xl:px-0 px-12 w-full mt-[20px]">
        <CategoriesHome />
      </div>
    </div>
  );
}
