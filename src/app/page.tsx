import { CarouselHome } from "@/components/CarouselHome";
import CategoriesRow from "@/components/section/Categories/CategoriesHome";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-slate-100 flex flex-col items-center w-screen overscroll-x-none">
        <div className="mb-10">
          <CarouselHome />
        </div>

        <div className="xl:w-[75%] xl:px-0 px-12 w-full mt-[20px] ">
          <CategoriesRow />
        </div>
      </div>
    </>
  );
}
