const GivingYouTime = () => {
  return (
    <section className="bg-gray-100 py-20 container mx-auto">
      <div className="container mx-auto px-7 h-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="">
            <p className="text-purple-600 font-semibold">
              GIVING YOU TIME TO FOCUS ON THE REST
            </p>
            <h2 style={{fontSize:"60px"}}  className="py-11 lg:text-6xl md:text-4xl text-4xl !leading-[60px] text-gray-700">
              Better maintenance, flexible solution with robust data insight
            </h2>
            <p className="font-normal text-gray-700 text-base lg:text-lg tracking-wider pb-11">
              Run businesses smoother even when you are handling multiple
              locations, Spectra makes it easy to monitor, collect data and give
              right insights.
            </p>
            <div className="mt-7 inline-block mr-auto cursor-pointer font-bold text-white bg-black tracking-wider py-3 px-6 lg:px-12 rounded-full transition ease-in-out duration-500 hover:bg-purple-600 hover:text-white">
              Multi-Site handling
            </div>
          </div>

          <div className="">
            <div className="grid grid-cols-3 gap-0">
              <div></div>
              <div></div>
              <div className="bg-purple-600 text-white text-sm p-2 lg:p-8 md:text-xl sm:text-xl font-normal flex flex-col justify-end h-[200px]">
                <p>Buid your own Dashboard</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-0">
              <div></div>
              <div className="bg-purple-600 text-white text-sm p-2 lg:p-8 md:text-xl sm:text-xl font-normal flex flex-col justify-end h-[200px]">
                <p>Timely Maintenance</p>
              </div>
              <div className="text-gray-800 text-sm p-2 lg:p-8 md:text-xl sm:text-xl font-normal flex flex-col justify-end h-[200px]">
                <p>Alerts and Notifications</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-0">
              <div className="bg-purple-600 text-white text-sm p-4 lg:p-8 md:text-xl sm:text-xl font-light flex flex-col justify-end h-[200px]">
                <p>Data Analysis and Patterns</p>
              </div>
              <div className="text-gray-800 text-sm p-2 lg:p-8 md:text-xl sm:text-xl font-normal flex flex-col justify-end h-[200px]">
                <p>Bring your own Device</p>
              </div>
              <div className="bg-gray-800 text-white text-sm p-2 lg:p-8 md:text-xl sm:text-xl font-light flex flex-col justify-end h-[200px]">
                <p>Knowledge Base Builder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GivingYouTime;
