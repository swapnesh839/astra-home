import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const logosImg = [
  {
    id: 0,
    logos: "/img/logo-1.png",
  },
  {
    id: 1,
    logos: "/img/logo-2.png",
  },
  {
    id: 2,
    logos: "/img/logo-3.png",
  },
  {
    id: 3,
    logos: "/img/logo-1.png",
  },
];

const TrustedCustomer = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-7 h-full">
        <div className="grid grid-cols-1 text-center mb-14">
          <h2 className="w-full lg:text-5xl md:text-3xl sm:text-2xl text-xl font-normal !leading-[60px]">
            Trusted Customers
          </h2>
        </div>
        <div className="w-full flex justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-xl"
          >
            <CarouselContent>
              {logosImg.map((index) => (
                <CarouselItem
                  key={index.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <div className="flex items-center justify-center p-3 h-[100px]">
                      <Image
                        src={index.logos}
                        alt="Picture of the author"
                        className="w-full lg:p-3 sm:p-16"
                      />
                      {/* <img
                        src={index.logos}
                        width={300}
                        height={96}
                        alt="Picture of the author"
                        className="w-full h-auto"
                      /> */}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default TrustedCustomer;
