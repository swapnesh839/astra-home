'use client'
import Formmodal from "../Formmodal";
import { useState } from "react";

const Button = () => {
  const [modalType, setModalType] = useState("signup");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="flex w-full  justify-center sm:m-7 m-auto align-middle ">
      <Formmodal isOpen={isModalOpen} onClose={closeModal} type={modalType} />

              <span onClick={()=>{
                setModalType("signup")
                openModal()
              }}
                className="cursor-pointer mx-1 px-1 border-2 my-2  md:w-full inline-block text-center w-auto font-bold text-white bg-purple-600 lg:tracking-wider border-purple-600 py-1 rounded-full transition ease-in-out duration-500 hover:bg-gray-200 hover:text-purple-600"
              >
                Sign Up
              </span>
              <span onClick={()=>{
                setModalType("signIn")
                openModal()
              }}
                className="cursor-pointer mx-1 px-1 border-2 my-2  md:w-full inline-block text-center w-auto font-bold bg-white text-purple-600 lg:tracking-wider border-purple-600 py-1 rounded-full transition ease-in-out duration-500 hover:text-gray-200 hover:bg-purple-600"
              >
                Sign In
              </span>
            </div>
    // <a target="_blank" href="https://outlook.office.com/bookwithme/user/9fec0210429842619464e9cde7728140@starlly.in/?getrequesturl=https%3a%2f%2foutlook.office.com%2fows%2fOID%3ab43f85e7-f923-4224-a4a5-02c0655b22f2%4047f8c235-5ae8-4231-aa67-1ae638504627%2fbeta%2fBookWithMe%2fCheckBookable%3fbookingcode%3dfde29a44-2b4d-4b20-a0c9-e853932f7b42%26itemid%3dydXRIoQzfkSgReNWdxOSQA2%26authtoken%3deyJhbGciOiJSUzI1NiIsImtpZCI6IloyeTkxSDI2NlFTcTVySGR2K1ljUFRxUVVzTT0iLCJ0eXAiOiJKV1QiLCJ4NXQiOiJNTkVPUHc1MEpXTk11NFBjT0ZFaTVYVW9ralUifQ.eyJvaWQiOiJiNDNmODVlNy1mOTIzLTQyMjQtYTRhNS0wMmMwNjU1YjIyZjIiLCJ2ZXIiOiJSZXNvdXJjZUxvb3BiYWNrLlVzZXIuVjEiLCJzY3AiOiJPcGVuQm9vay1JbnRlcm5hbC5SZWFkV3JpdGUiLCJyc2NvcGVsZW4iOiIyMTgiLCJyZXNvdXJjZV9zY29wZSI6IntcIlVSTFwiOlwiNVNuSFAySkp6M3pjV0licjlUSVVNVnJQakRsc0tndUtseEp4VW8vbTg1WT1cIn0iLCJjb3JyaWQiOiJlMjFhMTZjZC1lMGYwLTQzZDItYjBhOC1jYzA2N2EwM2JjMGUiLCJhcHBpZCI6IjE1N2NkZmJmLTczOTgtNGE1Ni05NmMzLWU5M2U5YWIzMDliNSIsImFwcGlkYWNyIjoiMCIsInRpZCI6IjQ3ZjhjMjM1LTVhZTgtNDIzMS1hYTY3LTFhZTYzODUwNDYyNyIsImlhdCI6MTcxODg4MDQ4OCwibmJmIjoxNzE4ODgwNDg4LCJleHAiOjE3MjY2NTY0ODgsImlzcyI6Imh0dHBzOi8vcmVzb3VyY2Uuc2VsZi8iLCJhdWQiOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSJ9.GM7Ll1TBqf5cgHwO16dhJ7BTSdxVQEIzGEOlfvwjAZ9rHWLfGmVcslE3r1EDY8qddt8Kla7ELrpVBWpRS6yl9JTQ_9604ds2DGifiMMDAi5h7e47k97dr194EDhbmISnM6wm8LnTVz-NB38lEHSrEf31CEI3Tp9sqx2i-s_AUotwyQIwLcMSA5rUSPe1c9rEo_HsGiqfHmMO7oBMYmSDbvxjfJQnzEF_IytVUFWT4DSt9t9mnC5adtL_KbIvYjywYxlUJjfnCvJapnGioPNMav-rC5NSEm1whb_07BZ7YiP4u15dHfYo7JSViwAE6k5j-tTkzCJahBv7y9rkv-wWGQ&anonymous&ep=owaSlotsCopyCard" 
    //     className="cursor-pointer border-2 font-bold py-2 text-purple-600 tracking-wider border-purple-600 px-8 rounded-full transition ease-in-out duration-500 hover:bg-purple-600 hover:text-white"
    // >
    //     Book a Demo
    // </a>
  );
};
export default Button;
