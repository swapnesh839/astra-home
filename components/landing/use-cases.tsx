'use client'
import React from "react";
import chiller from "../../public/img/chiller.png" 
import QSR from "../../public/img/qsr.png" 
import Reefer from "../../public/img/reefer.png" 
import Cold from "../../public/img/freezer (1).png" 
import Vending from "../../public/img/vending-machine (1).png" 

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import CountUp from "react-countup";
import { MdOutlineArrowOutward } from "react-icons/md";

const useCases = [
  {
    id: 0,
    lable: (
      <span>
        Milk <br /> Chiller
      </span>
    ),
    url: chiller,
    p: "Real time alerts and dashboards quick setup gave teams better visibility of sites in shorter duration and milk freshness/health",
    hiddenText: (
      <span>
        Helped in improving the response times for attending any issues and
        avoiding them much before <br /> <br />
        Made operations team work more better and productive with real time
        information is accessible anytime,anywhere. <br /> <br />
        Plug n Play mode made it to add more sites as they scaled easily
      </span>
    ),
  },
  {
    id: 1,
    lable: (
      <span>
        Cold <br /> Storage
      </span>
    ),
    url:Cold,
    p: "Parameter setup and monitoring temperature and door opened or closed status , these use cases were implemented easily with Spectra.",
    hiddenText: (
      <span>
        Power consumption , report generation, issue tracking - site wise became
        easy and saved time for the teammembers involved <br /> 
        Adding multiple sites and machines is now handled by the team head, the
        setup is easy and can be done by anyone <br /> 
        Analysis and reports proved beneficial for the teams to spot the caveats
        in wastage/spoil
      </span>
    ),
  },
  {
    id: 2,
    lable: (
      <span>
        Vending <br /> Machine
      </span>
    ),
    url: Vending,
    p: "Tracking of vehicles feature allowed the teams in planning for activities once delivery happens",
    hiddenText: (
      <span>
        Adding a reefer into configuration was made easy as an admin could
        operate as per their needs <br /> <br />
        Using Spectra helped the team to maintain and preserve freshness of
        dairy/beverage based products <br /> <br />
        Worked well for deliveries from remote places with certain limitations.
      </span>
    ),
  },
  {
    id: 3,
    lable: "Reefer",
    url: Reefer,
    p: "Vending machines are convenient and automated retail units that offer a wide range of products to consumers.",
    hiddenText: (
      <span>
        From snacks and beverages to toiletries and electronics, these
        self-service machines provide a quick and easy way to access items
        on-the-go. <br /> <br />
        Operating 24/7, vending machines have become an integral part of modern
        life, offering a seamless shopping experience without the need for human
        assistance. <br /> <br />
        Whether found in busy public spaces, offices, or even remote locations,
        vending machines continue to simplify transactions and cater to people&apos;s
        immediate needs with efficiency and simplicity.
      </span>
    ),
  },
  {
    id: 4,
    lable: "QSR",
    url: QSR,
    p: 'QSR stands for "Quick Service Restaurant," a term used to describe a type of restaurant that provides fast and efficient service to customers.',
    hiddenText: (
      <span>
        These restaurants typically offer a limited menu, focusing on quick and
        easy-to-prepare items such as burgers, sandwiches, pizza, salads, and
        other fast-food options. <br /> <br />
        The emphasis is on speed, allowing customers to place their orders at a
        counter or through self-service kiosks and receive their food promptly.
        <br /> <br />
        QSRs are designed for fast-paced environments, often featuring efficient
        workflows, streamlined kitchen processes, and optimized layouts to
        handle high volumes of customers.
      </span>
    ),
  },
];

const UseCases = () => {
  return (
    <section className="md:container mx-auto py-20" id="Usecases">
      <div className="mx-auto px-7 h-full">
        <div className="grid grid-cols-1 pb-14 mx-auto">
          <h2  style={{fontSize:"56px"}} className="w-full text-center lg:text-6xl md:text-4xl text-4xl font-normal !leading-[60px]">
            Use Cases
          </h2>
        </div>
        <div className="grid grid-cols-1">
          <div className="w-full flex justify-center">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-[90%] "
            >
              <CarouselContent>
                {useCases.map((index) => (
                  <CarouselItem
                    key={index.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-[350px] overflow-hidden relative border-t border-b py-5 border-gray-600 group hover:border-2 hover:border-purple-700 p-7 hover:rounded-3xl">
                      <div className="group-hover:hidden">
                        <h3 className="text-3xl font-normal group-hover:text-purple-700">
                          {index.lable}
                        </h3>
                        <div className="flex flex-col absolute right-[25px] bottom-[25px] items-end">
                          <Image
                            src={index.url}
                            width={46}
                            height={46}
                            alt="Picture of the author"
                            className="w-[46px] h-[46px]"
                          />
                          <p className="text-lg font-light text-right pt-5 group-hover:text-purple-700">
                            {index.p}
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#FFFFFF] z-30 pt-2 h-[350px] w-full group-hover:block hidden">
                        <p className="text-base font-light text-center pt-5 group-hover:text-purple-700">
                          {index.hiddenText}
                        </p>
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
        <div className=" px-0 pt-20">
          <div className="lg:flex md:flex flex justify-between items-end py-14 border-t border-b border-gray-500">
            <div>
              <p className="text-base font-light mb-2">More than</p>
              <div className="flex items-center">
                <CountUp start={0} end={1000} duration={2} style={{ fontSize: "80px" }} />
                <span className="text-[80px]">+</span>
              </div>
              <p className="text-base font-light mb-2">Sites being monitored</p>
              <MdOutlineArrowOutward className="text-3xl font-light" />
            {/* <p className="text-3xl">Our Customer Trust us</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UseCases;
