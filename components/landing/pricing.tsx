"use client"
import Image from "next/image";
import { useState } from "react";
import check from "../../public/img/check.png"
const Pricing = () => {
  const [show, setShow] = useState(true)
  return (
    <section id="Pricing" className="pt-14 bg-gray-100 pb-20">
      <div className="container mx-auto px-7 h-full">
        <div className="grid grid-cols-1">
          <h2 className="py-11 lg:text-5xl text-4xl font-normal !leading-[60px] text-[#000000] mx-auto">
            Pricing
          </h2>
          <div className="mx-auto text-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <span className="ml-3 text-xl font-medium text-gray-900 dark:text-gray-300 pr-1">
                Parameter
              </span>
              <div className="flex flex-col justify-center items-center">
                <div className="md1 md:h-7 w-12 h-6 flex items-center bg-purple-300 rounded-full p-1 cursor-pointer" onClick={() => { setShow(!show) }}>
                  <div className={`bg-purple-900 md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out ${show && "translate-x-5"}`}></div>
                </div>
              </div>
              <span className="ml-3 text-xl font-medium text-gray-900 dark:text-gray-300">
                Machine
              </span>
            </label>
          </div>
          <div className="w-[90%] lg:w-[60%] mx-auto">
            <div className="bg-[#FFFFFF] text-slate-900 m-4 p-4 lg:p-8 rounded-xl relative col-start-3 col-span-2">
              <div className=" ">
                <p className="text-4xl font-medium py-4 flex justify-center">
                  {" "}
                  {show ? "$15" : "$0.80"}
                  <span className="text-xl text-slate-500 flex flex-col justify-end">
                    /mo
                  </span>
                </p>
              </div>
              <div className="w-full lg:w-[60%] mx-auto p-6 flex flex-col gap-8 lg:gap-0 text-lg font-normal text-start">
                <div className="flex py-4">
                  <Image
                    src={check}
                    alt="check"
                    className="w-8 h-8 mr-5 text-green-600"
                  />
                  {show ? "Support availability" : ""}
                </div>
                <div className="flex py-4">
                  <Image
                    src={check}
                    alt="check"
                    className="w-8 h-8 mr-5 text-green-600"
                  />
                  {show ? "Setup help available" : ""}
                </div>
                <div className="flex py-4">
                  <Image
                    src={check}
                    alt="check"
                    className="w-8 h-8 mr-5 text-green-600"
                  />
                  {show ? "Consultant expertise available" : ""}
                </div>
                <div className="flex py-4">
                  <Image
                    src={check}
                    alt="check"
                    className="w-8 h-8 mr-5 text-green-600"
                  />
                  {show ? "Weekly Status calls (charges extra)" : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
