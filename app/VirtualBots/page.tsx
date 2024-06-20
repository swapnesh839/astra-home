import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MdDone } from "react-icons/md";
import img2 from "../../public/img/Group 1 (5).png"

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
                    <div className="mx-auto px-10 mb-5 flex flex-col">
                        {/* <h2 style={{ fontSize: "56px" }} className="w-full text-center lg:text-6xl md:text-4xl text-4xl font-normal !leading-[60px]">
                            Workflow Section
                        </h2> */}
                        <p className="lg:text-xl text-sm md:text-lg sm:text-lg font-normal text-start leading-normal" style={{ fontSize: "22px" }}>
                            Precaution is better than cure.
                            Give yourself that complete ownership and authority of running the post sales/deployment related activities without any doubts.
                            Allow the Spectra virtual bot to keep you well informed on all the valuable insights, whenever its needed, ask it and it shall answer all the information without you even moving a finger.
                            Keep your business/team all intact with this friendly virtual bot that can be a great additional team member.
                        </p>
                        <div className='h-7'></div>
                        <span
                        style={{fontSize:"22px"}}
                            className="mt-5 text-purple-900 text-center m-auto font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Watch out this space for more soon.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page