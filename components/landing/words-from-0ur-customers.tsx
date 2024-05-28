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
      <div className="border rounded-full border-gray-400 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 2</a> </div>
      <div className="border rounded-full border-gray-400 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 3</a> </div>
      <div className="border rounded-full border-gray-400 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 4</a> </div>
      <div className="border rounded-full border-gray-400 p-2 w-[40px] h-[40px] flex justify-center items-center"><a href=""> 5</a> </div>
    </div>,
    lable: <span>Optimised supply <br /> chain</span>,
    sublable: "Spare parts arrive on site faster.",
    ulLi: <ul>
      <li>Spare parts ordered 3x faster.</li>
      <li>Without a middleman, stored locally.</li>
      <li>Reliable, faster supplier network.</li>
    </ul>
  },
  {
    id: 1,
    btn: <div className="mr-20">
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="#Customers1">1 </a></div>
      <div className="border rounded-full border-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center text-purple-700 mb-2"> <a href="">2 </a></div>
      <div className="border rounded-full border-gray-400 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="">3 </a></div>
      <div className="border rounded-full border-gray-400 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="">4 </a></div>
      <div className="border rounded-full border-gray-400 p-2 w-[40px] h-[40px] flex justify-center items-center"> <a href="">5 </a></div>
    </div>,
    lable: <span>Optimised supply <br /> chain</span>,
    sublable: "Spare parts arrive on site faster.",
    ulLi: <ul>
      <li>Spare parts ordered 3x faster.</li>
      <li>Without a middleman, stored locally.</li>
      <li>Reliable, faster supplier network.</li>
    </ul>
  },
  {
    id: 2,
    btn: <div className="mr-20">
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"> <a href="#Customers1">1 </a></div>
      <div className="border rounded-full border-gray-500 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 2</a> </div>
      <div className="border rounded-full border-purple-700 p-2 w-[40px] h-[40px] flex justify-center items-center text-purple-700 mb-2"><a href=""> 3</a> </div>
      <div className="border rounded-full border-gray-400 p-2 w-[40px] h-[40px] flex justify-center items-center mb-2"><a href=""> 4</a> </div>
      <div className="border rounded-full border-gray-400 p-2 w-[40px] h-[40px] flex justify-center items-center"><a href=""> 5</a> </div>
    </div>,
    lable: <span>Optimised supply <br /> chain</span>,
    sublable: "Spare parts arrive on site faster.",
    ulLi: <ul>
      <li>Spare parts ordered 3x faster.</li>
      <li>Without a middleman, stored locally.</li>
      <li>Reliable, faster supplier network.</li>
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

const WordsFromOurCustomers:React.FC = () => {

  return (
    <section className="py-14">
      <div className="container mx-auto px-7 mt-12 h-full">
        <h2 className="w-full lg:text-5xl md:text-3xl sm:text-2xl text-xl font-normal !leading-[60px] text-center">
          Words From Our Customers 
        </h2>
        <div className="relative w-full z-10">
{Slider.map((items) => (
    <div id={`Customers${items.id}`} key={items.id} className="bg-[#FFFFFF] w-full sticky top-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 mt-5 items-center">
            <div className="flex">
                {items.btn}
                <div>
                    <h3 className="text-3xl">
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