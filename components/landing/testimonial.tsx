"use client"

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import assert from 'assert';
import user from "../../public/img/user.png"
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
const userData = [
  {
    username: "john_doe",
    userReview: "Great product, highly recommended! It exceeded my expectations in every way.",
    userImage: user
  },
  {
    username: "jane_smith",
    userReview: "Excellent service and fantastic quality. Will definitely buy again.",
    userImage: user
  },
  {
    username: "sam_wilson",
    userReview: "Good value for money. The item arrived on time and as described.",
    userImage: user
  },
  {
    username: "emma_jones",
    userReview: "Very satisfied with my purchase. The customer support was very helpful.",
    userImage: user
  },
  {
    username: "liam_brown",
    userReview: "The product works perfectly. Great build quality and easy to use.",
    userImage: user
  }
];

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
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
    <div className='w-ful py-20'>
      <div className='p-6 px-9 w-full'>
        <Slider {...settings}>
          {
            userData.map((user) => (
              <div key={user.username} className="w-full p-2">
                <div className="border border-purple-500 w-full bottom-3 rounded-xl p-2">
                  <div className='flex p-2'>
                    <Image height={100} width={100} className='m-auto' src={user.userImage} alt='user' />
                  </div>
                  <div className='text-center mt-7'>
                    <p className="text-xl p-3 font-semibold">{user.username}</p>
                    <p className='pb-3 px-4'>{user.userReview}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default Testimonial

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
    className="hover:bg-purple-500 bg-purple-400 "
      style={{ display: "block", zIndex: 1, left: "10px", transform: "translateY(-50%)", top: "50%", cursor: "pointer", position: "absolute", borderRadius: "50%", padding:"5px" }}
      onClick={onClick}
    >
      <ArrowLeft/>
    </div>
  );
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
    className="hover:bg-purple-500 bg-purple-400 "
      style={{  display: "block", zIndex: 1, right: "10px", transform: "translateY(-50%)", top: "50%", cursor: "pointer", position: "absolute", borderRadius: "50%", padding: "5px"  }}
      onClick={onClick}
    >
      <ArrowRight/>
    </div>
  );
};

