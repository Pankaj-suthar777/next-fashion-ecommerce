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
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="flex items-center justify-center p-6 h-[500px] relative">
                  <img
                    src="https://s3b.cashify.in/gpro/uploads/2022/02/24181210/Upcoming-Sale_on-Myntra.jpg"
                    className="contain h-[500px]"
                  />
                  <div className="absolute bottom-7 right-16">
                    <CarouselPrevious className="text-black font-bold rounded-none" />
                    <CarouselNext className="text-black font-bold rounded-none" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
