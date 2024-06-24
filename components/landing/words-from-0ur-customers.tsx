"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { number } from "zod";
import slider from "../../public/img/slider-1.png"
import { MonitorSpeakerIcon, Construction, Database, LayoutDashboard, OctagonAlert, LibraryBig, Workflow } from "lucide-react";

const Slider = [
  {
    id: 0,
    icon: MonitorSpeakerIcon,
    btn: <div className="mr-20">
      <div className="border rounded-full border-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center text-purple-700 mb-2"><a href="#Customers1"> 1</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 2</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 3</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 4</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 5</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 6</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 7</a> </div>
    </div>,
    lable: <span>Bring your own Device</span>,
    // sublable: "Spare parts arrive on site faster.",
    utlits: <ul>
      <li>Device Agnostic, adapts as needed</li>
      <li>Plug n Play mode, ready to go</li>
      <li>Easily configurable and setup</li>
    </ul>
  },
  {
    id: 1,
    icon: LayoutDashboard,
    btn: <div className="mr-20">
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="#Customers1">1 </a></div>
      <div className="border rounded-full border-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center text-purple-700 mb-2"> <a href="">2 </a></div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="">3 </a></div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="">4 </a></div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="">5 </a></div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="">6 </a></div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 7</a> </div>
    </div>,
    lable: <span>Buid your own Dashboard</span>,
    // sublable: "Spare parts arrive on site faster.",
    utlits: <ul>
      <li>Setup dashboard as you want</li>
      <li> Save time on development</li>
      <li>Get it aligned to your business</li>
    </ul>
  },
  {
    id: 2,
    icon: Construction,
    btn: <div className="mr-20">
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="#Customers1">1 </a></div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 2</a> </div>
      <div className="border rounded-full border-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center text-purple-700 mb-2"><a href=""> 3</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 4</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 5</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 6</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 7</a> </div>
    </div>,
    lable: <span>Maintenance and updates</span>,
    sublable: "Spare parts arrive on site faster.",
    utlits: <ul>
      <li>CRM support for service flow</li>
      <li>Check Machine status on the go</li>
      <li>Tailored insights for engineers</li>
    </ul>
  },
  {
    id: 3,
    icon: OctagonAlert,
    btn: <div className="mr-20">
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="#Customers1">1 </a></div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 2</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 3</a> </div>
      <div className="border rounded-full border-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center text-purple-700 mb-2"><a href=""> 4</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 5</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 6</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 7</a> </div>
    </div>,
    lable: <span>Alerts and Notifications</span>,
    // sublable: "Spare parts arrive on site faster.",
    utlits: <ul>
      <li>Real time alert setup made easy</li>
      <li>Team member assignment made easy</li>
      <li>Take care of issue/anamoly early</li>
    </ul>
  },
  {
    id: 4,
    icon: Database,
    btn: <div className="mr-20">
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="#Customers1">1 </a></div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 2</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 3</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 4</a> </div>
      <div className="border rounded-full border-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center text-purple-700 mb-2"><a href=""> 5</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 6</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 7</a> </div>
    </div>,
    lable: <span>Data Analysis and Patterns</span>,
    // sublable: "Spare parts arrive on site faster.",
    utlits: <ul>
      <li>Find details needed to function well</li>
      <li>Give team members info that works</li>
      <li>Automate once, save time</li>
    </ul>
  },
  {
    id: 5,
    icon: LibraryBig,
    btn: <div className="mr-20">
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="#Customers1">1 </a></div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 2</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 3</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 4</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 5</a> </div>
      <div className="border rounded-full border-purple-700 text-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 6</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 7</a> </div>
    </div>,
    lable: <span>Knowledge Base Builder</span>,
    // sublable: "Spare parts arrive on site faster.",
    utlits: <ul>
      <li>Automatic information builder</li>
      <li>Resolution based approach</li>
      <li>Service engineer onboarding made easy</li>
    </ul>
  },
  {
    id: 6,
    icon: Workflow,
    btn: <div className="mr-20">
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="#Customers1">1 </a></div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 2</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 3</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 4</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 5</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 6</a> </div>
      <div className="border rounded-full border-purple-700 text-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 7</a> </div>
    </div>,
    lable: <span>Workflows and Insights</span>,
    // sublable: "Spare parts arrive on site faster.",
    utlits: <ul>
      <li>Workflow Automation </li>
      <li>Robust Recipes</li>
      <li>Automatic Itinerary Generation</li>
    </ul>
  },

];

const WordsFromOurCustomers: React.FC = () => {

  return (
    <section className="md:container mx-auto py-20" id="Features">
      <div className="px-7 mt-12 h-full">
        <h2 style={{fontSize:"60px"}} className="w-full mb-11 lg:text-6xl md:text-4xl text-4xl !leading-[60px] text-center">
          Features
        </h2>
        <div className="flex flex-wrap md:justify-center sm:justify-start align-middle">
          {Slider.map((items, ind) => (
            <div key={ind} className="lg:w-4/12 w-full  mb-4 p-5 flex">
              <div className="w-full p-2 border border-purple-500 m-auto rounded-sm">
                <div className="flex w-full p-2 justify-start">
                  <div className="flex" style={{fontSize:"20px",fontWeight:"500",lineHeight:"21px"}}>{<items.icon />} <span className="ms-2 ps-2">{items.lable}</span></div>
                </div>
                <div className="mt-2"  style={{fontSize:"15px",fontWeight:"400",lineHeight:"21px"}}>
                {items.utlits}
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* <div className="relative w-full z-10">
          {Slider.map((items) => (
            <div id={`Customers${items.id}`} key={items.id} className="bg-[#FFFFFF] w-full sticky top-10">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 mt-5 items-center">
                <div className="flex">
                  {items.btn}
                  <div>
                    <h3 className="text-3xl text-purple-700">
                      {items.lable}
                    </h3>
                    <p className="text-gray-500 text-xl py-7">
                      {items.sublable}
                    </p>
                    {items.utlits}
                  </div>
                </div>
                <div className="">
                  <Image
                    src={slider}
                    width={300}
                    height={400}
                    className="w-full h-[400px]"
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
export default WordsFromOurCustomers;