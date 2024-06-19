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
    <section className="bg-[#031229] py-20 container mx-auto">
      <div className="container mx-auto px-7 h-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-11">
            <div className="flex flex-wrap justify-center align-middle p-2">
              {buttons.map((index) => (
                <div key={index.label} className="w-6/12 mx-auto my-7 px-2 flex">
                  <Button key={index.label} className="bg-orange-400 w-5/6 m-auto text-black transtion ease-in-out duration-500 rounded-full hover:bg-white">{index.label}</Button>
                </div>
              ))}
            {/* <Image
              src="/img/business_img.svg"
              width={300}
              height={300}
              alt="Picture of the author"
              className="w-full h-[500px]"
            /> */}
          </div>
          <div className="text-[#FFFFFF]">
            <h3 className="w-full lg:text-6xl text-5xl font-normal !leading-[60px]">
              Businesses should be ON everytime
            </h3>
            <p className="pt-11 ">
              Humans should be making decisions and not dumb work every time,
              making decision needs relevant data points. For us an Ideal
              Customer is someone who wants to run their operations or
              maintenance related activities seamlessly, the team should
              experience as if a head or a lead is talking to them even in their
              absence.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};
export default Businesses;
