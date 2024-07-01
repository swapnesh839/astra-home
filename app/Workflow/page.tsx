import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MdDone } from "react-icons/md";
import img from "../../public/img/maintenance-worker.png"
import img2 from "../../public/img/Filing-System.jpeg"
import img3 from "../../public/img/workflowing2.jpeg"
import img4 from "../../public/img/Group 2 (1).png"

const page = () => {
    return (
        <section className="py-20 bg-gray-100 container mx-auto">
            <div className="container mx-auto px-7 h-full">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
                    <div className="flex flex-col relative">
                        <Image
                            src={img2}
                            // src="/img/ninth-B-YVRdKi.jpeg"
                            width={300}
                            height={800}
                            alt="workers"
                            className="me-auto w-full h-full border-purple-700 rounded border-2 "
                        />
                    </div>
                    <div className="mx-auto mb-5 flex flex-col sm:mt-4 p-5">
                        {/* <h2 style={{ fontSize: "56px" }} className="w-full text-center lg:text-6xl md:text-4xl text-4xl font-normal !leading-[60px]">
                            Workflow Section
                        </h2> */}
                        <p className="lg:text-2xl text-sm md:text-2xl sm:text-lg font-normal text-start leading-normal">
                            You have business, and then you have to take care of those never ending list of activities. A well oiled business helps its owners, employees and customers to get most out of the product/solution/services being offered.
                            To make it easy for teams to handle post sales/deployment focused activities. <br /> We at Spectra are allowing customers to build their own workflows/processes/templates in an easy manner.
                            Our intention is to make work easy for Operations-Maintenance-Services teams.
                            Check the utility, get an idea how you can arrange workflows/templates/recipes/itinerary.
                        </p>
                        <div className='h-7'></div>
                        <a 
                        // target='_blank' 
                        href='#'
                        // href='https://workflow-spectra.netlify.app/'
                            className="bg-purple-500 hover:bg-purple-700 mt-5 text-white text-center m-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Utility
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page