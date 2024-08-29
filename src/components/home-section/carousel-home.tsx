"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselHome() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full z-[-99]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card className="flex items-center justify-center">
              <CardContent className="flex items-center justify-center lg:h-[500px] p-0 relative">
                <img
                  alt=""
                  src="/assets/c1.jpg"
                  className="contain h-[500px] lg:block hidden w-full"
                />
                <img
                  alt=""
                  src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202109/242473827_10160157467293221_2645921924837005982_n-sixteen_nine.jpg"
                  className="object-cover h-full w-full lg:hidden block"
                />
                <div className="absolute bottom-7 right-16">
                  <CarouselPrevious className="text-black font-bold rounded-none" />
                  <CarouselNext className="text-black font-bold rounded-none" />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
