import React from "react";

const page: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-gradient-to-t from-purple-200"
      id="Thankyou"
    >
      <div>
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-3xl font-bold text-center text-purple-900">
            Thanks for sharing your details, check your email <br />(also spam
            inbox in case), follow the instructions, share your feedback
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
