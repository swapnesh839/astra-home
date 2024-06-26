import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

const sliderImageUrl = [
  {
    lable: ( <span> Milk <br /> Chiller </span> ),
    url: "https://assets-global.website-files.com/62d16206cfa17e1b469ab9b9/62e25eaf28e275626c8f7a0b_fb%20problems%201.svg",
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
    lable: ( <span> Cold <br /> Storage </span> ),
    url: "https://assets-global.website-files.com/62d16206cfa17e1b469ab9b9/62e25eaf8e9523a54b5185fe_fb%20problems%202.svg",
    p: "Parameter setup and monitoring temperature and door opened or closed status , these use cases were implemented easily with Spectra.",
    hiddenText: <span>
      Power consumption , report generation, issue tracking - site wise became easy and saved time for the teammembers involved <br /> <br />
      Adding multiple sites and machines is now handled by the team head, the setup is easy and can be done by anyone <br /> <br />
      Analysis and reports proved beneficial for the teams to spot the caveats in wastage/spoil
    </span>,
  },
  {
    lable: ( <span> Vending <br /> Machine </span> ),
    url: "https://assets-global.website-files.com/62d16206cfa17e1b469ab9b9/62e25eaf28e275626c8f7a0b_fb%20problems%201.svg",
    p: "Tracking of vehicles feature allowed the teams in planning for activities once delivery happens",
    hiddenText: <span>
      Adding a reefer into configuration was made easy as an admin could operate as per their needs <br /> <br />
      Using Spectra helped the team to maintain and preserve freshness of dairy/beverage based products <br /> <br />
      Worked well for deliveries from remote places with certain limitations.
    </span>,
  },
  {
    lable: "Reefer",
    url: "https://assets-global.website-files.com/62d16206cfa17e1b469ab9b9/62e25eaf2650e6efb0122eba_fb%20problems%203.svg",
    p: "Vending machines are convenient and automated retail units that offer a wide range of products to consumers.",
    hiddenText:  <span>
    From snacks and beverages to toiletries and electronics, these self-service machines provide a quick and easy way to access items on-the-go. <br /> <br />
    Operating 24/7, vending machines have become an integral part of modern life, offering a seamless shopping experience without the need for human assistance. <br /> <br />
    Whether found in busy public spaces, offices, or even remote locations, vending machines continue to simplify transactions and cater to people&apos;s immediate needs with efficiency and simplicity
  </span>,
  },
  {
    lable: "QSR",
    url: "https://assets-global.website-files.com/62d16206cfa17e1b469ab9b9/62e25eaf8e9523a54b5185fe_fb%20problems%202.svg",
    p:'QSR stands for "Quick Service Restaurant," a term used to describe a type of restaurant that provides fast and efficient service to customers.',
    hiddenText: <span>
      These restaurants typically offer a limited menu, focusing on quick and easy-to-prepare items such as burgers, sandwiches, pizza, salads, and other fast-food options. <br /> <br />
      The emphasis is on speed, allowing customers to place their orders at a counter or through self-service kiosks and receive their food promptly. <br /> <br />
      QSRs are designed for fast-paced environments, often featuring efficient workflows, streamlined kitchen processes, and optimized layouts to handle high volumes of customers.
    </span>,
  },
];

const TrustedCustomers = () => {
  return (
    <>
      <div className="grid grid-cols-1 pt-14 pb-5 mx-auto">
        <h2 className="w-full lg:text-5xl md:text-3xl sm:text-2xl text-xl font-normal !leading-[60px]">
          Trusted Customers
        </h2>
      </div>
      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={false}
          draggable={false}
          showDots={false}
          infinite={false}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {sliderImageUrl.map((imageUrl, index) => {
            return (
              <div className="slider relative" key={index}>
                <div className="h-[350px] overflow-hidden relative border-t border-b py-5 border-gray-600 group hover:border-2 hover:border-purple-700 p-7 hover:rounded-3xl">
                  <div className="group-hover:hidden">
                    <h3 className="text-3xl font-normal group-hover:text-purple-700">
                      {imageUrl.lable}
                    </h3>
                    <div className="flex flex-col absolute right-[25px] bottom-[25px] items-end">
                      <Image
                        src={imageUrl.url}
                        width={46}
                        height={96}
                        alt="Picture of the author"
                        className="w-[46px] h-[96px]"
                      />
                      <p className="text-lg font-light text-right pt-5 group-hover:text-purple-700">
                        {imageUrl.p}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#FFFFFF] z-30 pt-2 h-[350px] w-full group-hover:block hidden">
                    <p className="text-base font-light text-center pt-5 group-hover:text-purple-700">
                      {imageUrl.hiddenText}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
export default TrustedCustomers;
