"use client";
import Link from "next/link";

const HealthyMachines = () => {
  return (
    <section className="py-20 container mx-auto">
      <div className="container mx-auto px-7 h-full">
        <div className="grid grid-cols-12 gap-4 my-11">
          <div className="lg:col-span-5 col-span-12">
            <h2 className="w-full lg:text-6xl md:text-4xl text-4xl">
              Healthy Machines Create Profitable Business
            </h2>
            <p className="py-14 lg:text-xl text-sm md:text-lg sm:text-lg font-normal leading-normal">
              Simple plug n play solution to monitor your machines remotely in real time, send alert to the right team members
            </p>
            <Link
              target="_blank"
              href="/TryIt"
              className="cursor-pointer border-2 font-bold text-purple-600 lg:tracking-wider border-purple-600 py-1 px-2 lg:px-8 rounded-full transition ease-in-out duration-500 hover:bg-purple-600 hover:text-white"
            >
              Try It Now
            </Link>
          </div>
          <div className="lg:col-span-7 col-span-12">
            <div className="w-full rounded-3 overflow-hidden">
              <video
                width="320"
                height="240"
                className="w-full h-full"
                controls
                // preload="none"
              >
                <source src="/img/spectra-Bqo.mp4"  type="video/mp4" />
                <track
                  src="/img/spectra-Bqo.mp4"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HealthyMachines;
