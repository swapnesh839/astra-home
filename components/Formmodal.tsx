import React from 'react';
import SignupForm from './landing/signupform';
import { X } from 'lucide-react';
import Login from './landing/login';

interface ModalProps {
  isOpen: boolean;
  onClose: ()=>void;
  type?: string,
}

const Formmodal: React.FC<ModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 overflow-auto hide-scrollbar inset-0 p-3 flex items-center justify-center z-50 w-full">
      <div className='h-full w-full bg-white relative'>

        <div  onClick={onClose} className='p-1 absolute text-xl bg-[#6B21A8] text-white right-[10px] top-[10px] z-[52] rounded-[50%] cursor-pointer' ><X/></div>
        {/* <div className="p-3 m-4 absolute right-[0px] top-[0px] z-[52] rounded-[50%] opacity-50" onClick={onClose}>X</div> */}

        <div className="bg-white rounded-lg shadow-xl transform transition-all w-full">
          <div>
            {type == "signup" && <SignupForm />}
            {type != "signup" && <Login />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formmodal;
