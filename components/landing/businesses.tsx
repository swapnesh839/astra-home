import Image from "next/image";
import { Button } from "../ui/button";

const buttons = [
  {
    label: "Warehouse",
  },
  {
    label: "Cloud Kitchens",
  },
  {
    label: "Vending machines",
  },
  {
    label: "Consumer Appliances",
  },
  {
    label: "Cold/Chain/Chiller/Refer",
  },
  {
    label: "Franchise Business",
  },
];

const Businesses = () => {
  return (
    <section className="bg-[#031229] py-20">
      <div className="container mx-auto px-7 h-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-11">
          <div>
            <Image
              src="/img/business_img.svg"
              width={300}
              height={300}
              alt="Picture of the author"
              className="w-full h-[500px]"
            />
          </div>
          <div className="text-[#FFFFFF]">
            <h3 className="w-full lg:text-5xl md:text-3xl sm:text-2xl text-xl font-normal !leading-[60px]">
              Businesses should be on everytime
            </h3>
            <p className="py-11">
              Humans should be making decisions and not dumb work every time,
              making decision needs relevant data points. For us an Ideal
              Customer is someone who wants to run their operations or
              maintenance related activities seamlessly, the team should
              experience as if a head or a lead is talking to them even in their
              absence.
            </p>
            <div className="">
              {buttons.map((index) => (
                <Button key={index.label} className="w-[185px] me-3 mb-3 px-5 py-2 bg-orange-400 text-black mx-auto transtion ease-in-out duration-500 rounded-full hover:bg-white">{index.label}</Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Businesses;
