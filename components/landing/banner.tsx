import Image from "next/image";
import Link from "next/link";
import { MdDone } from "react-icons/md";

const Banner = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-7 h-full">
        <div className="grid grid-cols-12 gap-1">
          <div className="lg:col-span-9 col-span-12">
            <h1 className="w-full lg:text-7xl md:text-5xl sm:text-2xl text-xl font-light">
              Automate post sales workflows, processes
              <br className="hidden lg:block md:hidden sm:hidden" /> and tasks
            </h1>
            <p className="py-5 lg:text-xl text-sm md:text-lg sm:text-lg font-semibold">
              Keep Operations / Maintenance / Services team happy
            </p>
          </div>
          <div className="lg:col-span-3 col-span-12"></div>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className=" border-2 border-purple-700 rounded">
            <Image
              src="/img/ninth-B-YVRdKi.jpeg"
              width={300}
              height={300}
              alt="Picture of the author"
              className="w-full h-[400px]"
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
            <div className="flex gap-2 lg:gap-8 justify-center px-auto w-full lg:w-4/5 mt-5">
              <Link
                href="/#form"
                className="cursor-pointer border-2 font-bold text-purple-600 lg:tracking-wider border-purple-600 py-1 px-2 lg:px-8 rounded-full transition ease-in-out duration-500 hover:bg-purple-600 hover:text-white"
              >
                Try It Now
              </Link>
              <Link
                href="https://meetings.hubspot.com/girish-kadkol"
                target="_blank"
                className="cursor-pointer border-2 font-bold text-white bg-purple-600 lg:tracking-wider border-purple-600 py-1 px-2 lg:px-8 rounded-full transition ease-in-out duration-500 hover:bg-gray-200 hover:text-purple-600"
              >
                Book A Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
