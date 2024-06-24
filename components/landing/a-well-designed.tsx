import Image from "next/image";
import img from "../../public/img/a_well.svg"

const AWellDesigned = () => {
  return (
    <section className="md:py-20 py-0 container mx-auto bg-[#FFFFFF]">
      <div className="container mx-auto px-7 h-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-24">
          <div className="">
            <Image
              src={img}
              width={300}
              height={300}
              alt="Picture of the author"
              className="w-full h-[400px] object-cover overflow-hidden"
            />
            <div className="grid grid-cols-2 gap-0">
              <div className="tracking-wider bg-purple-50 flex justify-center items-center h-[150px]">
                Data Insights
              </div>
              <div className="tracking-wider bg-gray-900 text-white flex justify-center items-center h-[150px]">
                Workflows
              </div>
              <div className="tracking-wider bg-purple-600 text-white flex justify-center items-center h-[150px]">
                Analytics
              </div>
              <div className="tracking-wider bg-purple-200 flex justify-center items-center h-[150px]">
                Reports
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="lg:text-6xl md:text-4xl text-4xl text-gray-700">
              A well designed solution to cater the needs of maintenance and
              services teams, to gain time and productivity
            </h2>
            <p className="py-14">
              Engineers at Spectra have taken special care in designing the
              right solution for your maintenance and services team, provide
              data insights that matter to them, saving them time and increase
              their productivity.
            </p>
            <p>
              Enabling even operations and management team with right
              information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AWellDesigned;
