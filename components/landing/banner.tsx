"use client"
import Image from "next/image";
import Link from "next/link";
import { MdDone } from "react-icons/md";
import img from "../../public/img/ninth-B-YVRdKi.jpeg"
import { Button } from "../ui/button";
import Formmodal from "../Formmodal";
import { useState } from "react";

const Banner = () => {
  const [modalType, setModalType] = useState("signup");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section className="py-20 bg-gray-100 md:container mx-auto">
      <div className="mx-auto px-7 h-full w-full p-2">
        <div className="grid grid-cols-12 gap-1">
          <div className="lg:col-span-8 col-span-12">
            <h1
              // style={{fontSize:"60px"}} 
              className="w-full lg:text-6xl md:text-4xl text-4xl ">
              Automate post sales workflows, processes
              <br className="hidden lg:block md:hidden sm:hidden" /> and tasks
            </h1>
            <p className="py-5 lg:text-xl text-sm md:text-lg sm:text-lg font-semibold">
              Keep Operations / Maintenance / Services team happy
            </p>
          </div>
          <div className="lg:col-span-4 col-span-12 flex">
            {/* <div className="flex w-full flex-col justify-center sm:m-7 m-auto align-middle ">

              <span onClick={()=>{
                setModalType("signup")
                openModal()
              }}
                className="cursor-pointer px-5 border-2 my-2 md:px-6 md:w-full inline-block text-center w-auto font-bold text-white bg-purple-600 lg:tracking-wider border-purple-600 py-1  lg:px-8 rounded-full transition ease-in-out duration-500 hover:bg-gray-200 hover:text-purple-600"
              >
                Sign Up
              </span>
              <span onClick={()=>{
                setModalType("signIn")
                openModal()
              }}
                className="cursor-pointer px-5 border-2 my-2 md:px-6 md:w-full inline-block text-center w-auto font-bold bg-white text-purple-600 lg:tracking-wider border-purple-600 py-1  lg:px-8 rounded-full transition ease-in-out duration-500 hover:text-gray-200 hover:bg-purple-600"
              >
                Sign In
              </span>
            </div> */}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className=" border-2 border-purple-700 rounded md:h-[400px]">
            <Image
              src={img}
              // src="/img/ninth-B-YVRdKi.jpeg"
              width={300}
              height={300}
              alt="Picture of the author"
              className="w-full h-full"
            />
          </div>
          <div className="m-auto">
            <p className="flex items-center py-3">
              <MdDone className="text-purple-700 text-xl mr-3" />
              <span>
                Reliable, practical and transparent service.
                <br /> Giving you complete peace of mind.
              </span>
            </p>
            <p className="flex items-center py-3">
              <MdDone className="text-purple-700 text-xl mr-3" />
              <span>
                Reduce your total maintenance costs by 25% and totally
                practical.
              </span>
            </p>
            <p className="flex items-center py-3">
              <MdDone className="text-purple-700 text-xl mr-3" />
              <span>
                Our engineers and smart sensors make your data even more
                reliable.
              </span>
            </p>
            <div className="flex gap-2 mb-4 lg:gap-8 justify-center px-auto w-full lg:w-4/5 mt-5">
              <Link
                target="_blank"
                href="/TryIt"
                className="cursor-pointer border-2 font-bold text-purple-600 lg:tracking-wider border-purple-600 py-1 px-2 lg:px-8 rounded-full transition ease-in-out duration-500 hover:bg-purple-600 hover:text-white"
              >
                Try It Now
              </Link>
              <Link
                href="https://outlook.office.com/bookwithme/user/9fec0210429842619464e9cde7728140@starlly.in/?getrequesturl=https%3a%2f%2foutlook.office.com%2fows%2fOID%3ab43f85e7-f923-4224-a4a5-02c0655b22f2%4047f8c235-5ae8-4231-aa67-1ae638504627%2fbeta%2fBookWithMe%2fCheckBookable%3fbookingcode%3dfde29a44-2b4d-4b20-a0c9-e853932f7b42%26itemid%3dydXRIoQzfkSgReNWdxOSQA2%26authtoken%3deyJhbGciOiJSUzI1NiIsImtpZCI6IloyeTkxSDI2NlFTcTVySGR2K1ljUFRxUVVzTT0iLCJ0eXAiOiJKV1QiLCJ4NXQiOiJNTkVPUHc1MEpXTk11NFBjT0ZFaTVYVW9ralUifQ.eyJvaWQiOiJiNDNmODVlNy1mOTIzLTQyMjQtYTRhNS0wMmMwNjU1YjIyZjIiLCJ2ZXIiOiJSZXNvdXJjZUxvb3BiYWNrLlVzZXIuVjEiLCJzY3AiOiJPcGVuQm9vay1JbnRlcm5hbC5SZWFkV3JpdGUiLCJyc2NvcGVsZW4iOiIyMTgiLCJyZXNvdXJjZV9zY29wZSI6IntcIlVSTFwiOlwiNVNuSFAySkp6M3pjV0licjlUSVVNVnJQakRsc0tndUtseEp4VW8vbTg1WT1cIn0iLCJjb3JyaWQiOiJlMjFhMTZjZC1lMGYwLTQzZDItYjBhOC1jYzA2N2EwM2JjMGUiLCJhcHBpZCI6IjE1N2NkZmJmLTczOTgtNGE1Ni05NmMzLWU5M2U5YWIzMDliNSIsImFwcGlkYWNyIjoiMCIsInRpZCI6IjQ3ZjhjMjM1LTVhZTgtNDIzMS1hYTY3LTFhZTYzODUwNDYyNyIsImlhdCI6MTcxODg4MDQ4OCwibmJmIjoxNzE4ODgwNDg4LCJleHAiOjE3MjY2NTY0ODgsImlzcyI6Imh0dHBzOi8vcmVzb3VyY2Uuc2VsZi8iLCJhdWQiOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSJ9.GM7Ll1TBqf5cgHwO16dhJ7BTSdxVQEIzGEOlfvwjAZ9rHWLfGmVcslE3r1EDY8qddt8Kla7ELrpVBWpRS6yl9JTQ_9604ds2DGifiMMDAi5h7e47k97dr194EDhbmISnM6wm8LnTVz-NB38lEHSrEf31CEI3Tp9sqx2i-s_AUotwyQIwLcMSA5rUSPe1c9rEo_HsGiqfHmMO7oBMYmSDbvxjfJQnzEF_IytVUFWT4DSt9t9mnC5adtL_KbIvYjywYxlUJjfnCvJapnGioPNMav-rC5NSEm1whb_07BZ7YiP4u15dHfYo7JSViwAE6k5j-tTkzCJahBv7y9rkv-wWGQ&anonymous&ep=owaSlotsCopyCard"
                target="_blank"
                className="cursor-pointer border-2 font-bold text-white bg-purple-600 lg:tracking-wider border-purple-600 py-1 px-2 lg:px-8 rounded-full transition ease-in-out duration-500 hover:bg-gray-200 hover:text-purple-600"
              >
                Book A Demo
              </Link>
              {/* <Link
                href="https://meetings.hubspot.com/girish-kadkol"
                target="_blank"
                className="cursor-pointer border-2 font-bold text-white bg-purple-600 lg:tracking-wider border-purple-600 py-1 px-2 lg:px-8 rounded-full transition ease-in-out duration-500 hover:bg-gray-200 hover:text-purple-600"
              >
                Book A Demo
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <Formmodal isOpen={isModalOpen} onClose={closeModal} type={modalType} />
    </section>
  );
};
export default Banner;
