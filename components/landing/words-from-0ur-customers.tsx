"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { number } from "zod";
import slider from "../../public/img/slider-1.png"

const Slider = [
  {
    id: 0,
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
    ulLi: <ul>
      <li>Device Agnostic, adapts as needed</li>
      <li>Plug n Play mode, ready to go</li>
      <li>Easily configurable and setup</li>
    </ul>
  },
  {
    id: 1,
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
    ulLi: <ul>
      <li>Setup dashboard as you want</li>
      <li> Save time on development</li>
      <li>Get it aligned to your business</li>
    </ul>
  },
  {
    id: 2,
    btn: <div className="mr-20">
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="#Customers1">1 </a></div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 2</a> </div>
      <div className="border rounded-full border-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center text-purple-700 mb-2"><a href=""> 3</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 4</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 5</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 6</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 7</a> </div>
    </div>,
    lable: <span>Maintenance</span>,
    sublable: "Spare parts arrive on site faster.",
    ulLi: <ul>
      <li>CRM support for service flow</li>
      <li>Check Machine status on the go</li>
      <li>Tailored insights for engineers</li>
    </ul>
  },
  {
    id: 3,
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
    ulLi: <ul>
      <li>Real time alert setup made easy</li>
      <li>Team member assignment made easy</li>
      <li>Take care of issue/anamoly early</li>
    </ul>
  },
  {
    id: 4,
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
    ulLi: <ul>
      <li>Find details needed to function well</li>
      <li>Give team members info that works</li>
      <li>Automate once, save time</li>
    </ul>
  },
  {
    id: 4,
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
    ulLi: <ul>
      <li>Automatic information builder</li>
      <li>Resolution based approach</li>
      <li>Service engineer onboarding made easy</li>
    </ul>
  },
  {
    id: 4,
    btn: <div className="mr-20">
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="#Customers1">1 </a></div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 2</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 3</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 4</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 5</a> </div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 6</a> </div>
      <div className="border rounded-full border-purple-700 text-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 7</a> </div>
    </div>,
    lable: <span>Workflows and Insightsr</span>,
    // sublable: "Spare parts arrive on site faster.",
    ulLi: <ul>
      <li>Workflow Automation </li>
      <li>Robust Recipes</li>
      <li>Automatic Itinerary Generation</li>
    </ul>
  },

];
// const WordsFromOurCustomers: React.FC = () => {

//   const [page, setpage] = useState<number>(1);
//   return (
//     <section className={`py-14  ${page !== 5 && " my-auto sticky top-7"}`}>
//       <div className="container mx-auto px-7 h-full">
//         <h2 className="w-full lg:text-5xl md:text-3xl sm:text-2xl text-xl font-normal !leading-[60px] text-center">
//           Words From Our Customers
//         </h2>
//         <div className="relative w-full z-10 flex ">
//          <div className="my-auto">
//          <div className=" w-3/12">
//             <div onClick={() => { setpage(1) }} className={`border rounded-full cursor-pointer border-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2 ${page == 1 && "text-purple-700"}`}> <a>1</a> </div>
//             <div onClick={() => { setpage(2) }} className={`border rounded-full cursor-pointer border-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2 ${page == 2 && "text-purple-700"}`}> <a>2</a> </div>
//             <div onClick={() => { setpage(3) }} className={`border rounded-full cursor-pointer border-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2 ${page == 3 && "text-purple-700"}`}> <a>3</a> </div>
//             <div onClick={() => { setpage(4) }} className={`border rounded-full cursor-pointer border-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2 ${page == 4 && "text-purple-700"}`}> <a>4</a> </div>
//             <div onClick={() => { setpage(5) }} className={`border rounded-full cursor-pointer border-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center ${page == 5 && "text-purple-700 "}`}> <a>5</a> </div>
//           </div>
//          </div>
//           <div style={{height:"100vh"}} className="mr-20 w-9/12 overflow-scroll no-scrollbar">
//             {Slider.map((items) => (
//               <div key={items.id} className="bg-[#FFFFFF] w-full">
//                 <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 mt-5 items-center">
//                   <div className="flex">
//                     <div>
//                       <h3 className="text-3xl">
//                         {items.lable}
//                       </h3>
//                       <p className="text-gray-500 text-xl py-7">
//                         {items.sublable}
//                       </p>
//                       {items.ulLi}
//                     </div>
//                   </div>
//                   <div className="">
//                     <img
//                       src="/img/slider-1.png"
//                       width={300}
//                       height={400}
//                       className="w-full h-[400px]"
//                       alt="Picture of the author"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const WordsFromOurCustomers: React.FC = () => {

  return (
    <section className="py-14" id="Features">
      <div className="container mx-auto px-7 mt-12 h-full">
        <h2 className="w-full lg:text-6xl text-5xl font-normal !leading-[60px] text-center">
          Features
        </h2>
        <div className="relative w-full z-10">
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
                    {items.ulLi}
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
        </div>
      </div>
    </section>
  );
};
export default WordsFromOurCustomers;