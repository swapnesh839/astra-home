"use client"
import React from "react";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  }
  // ,
  // {
  //   id: 3,
  //   logos: "/img/logo-1.png",
  // },
];

const TrustedCustomer = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div className='w-ful py-28 container mx-auto'>
      <div className="grid grid-cols-1 text-center mb-14">
        <h2 style={{fontSize:"60px"}}  className="w-full lg:text-6xl md:text-4xl text-4xl !leading-[60px]">
          Trusted Customers
        </h2>
      </div>
      <div className='p-6 md:px-28 px-5 w-full'>
        <Slider {...settings}>
          {
            logosImg.map((i) => (
              <div key={i.id} className="w-full p-2">
                <div className='flex p-2 justify-center align-middle'>
                  <Image quality={100} height={100} width={120} className='m-auto bg-amber-50 h-[40px]' src={i.logos} alt='Trusted Customers' />
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
};
// const TrustedCustomer = () => {
//   return (
//     <section className=" bg-gray-100">
//       <div className="container mx-auto px-7 h-full">
//         <div className="grid grid-cols-1 text-center mb-14">
//           <h2 className="w-full lg:text-5xl md:text-3xl sm:text-2xl text-xl font-normal !leading-[60px]">
//             Trusted Customers
//           </h2>
//         </div>
//         <div className="w-full flex justify-center">
//           <Carousel
//             opts={{
//               align: "start",
//             }}
//             className="w-full max-w-xl"
//           >
//             <CarouselContent>
//               {logosImg.map((index) => (
//                 <CarouselItem
//                   key={index.id}
//                   className="md:basis-1/2 lg:basis-1/3"
//                 >
//                   <div className="p-1">
//                     <div className="flex items-center justify-center p-3 h-[100px]">
//                       <Image
//                         src={index.logos}
//                         width={100}
//                         height={100}
//                         alt="Picture of the author"
//                         className="w-full lg:p-3 sm:p-16"
//                       />
//                     </div>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//             <CarouselPrevious />
//             <CarouselNext />
//           </Carousel>
//         </div>
//       </div>
//     </section>
//   );
// };
export default TrustedCustomer;


const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="border"
      style={{ display: "block", zIndex: 1, left: "20px", transform: "translateY(-50%)", top: "50%", cursor: "pointer", position: "absolute", borderRadius: "50%", padding: "5px" }}
      onClick={onClick}
    >
      <ArrowLeft size={"20px"} />
    </div>
  );
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="border"
      style={{ display: "block", zIndex: 1, right: "20px", transform: "translateY(-50%)", top: "50%", cursor: "pointer", position: "absolute", borderRadius: "50%", padding: "5px" }}
      onClick={onClick}
    >
      <ArrowRight size={"20px"} />
    </div>
  );
};