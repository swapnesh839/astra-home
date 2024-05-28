import Image from "next/image";
import ContactForm from "./contact-form";

const ContactUs = () => {
  return (
    <section className="py-14 pb-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-7 h-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
          <div className="">
            <h3 className="w-full lg:text-5xl md:text-3xl sm:text-2xl text-xl font-normal !leading-[60px]">
              Contact Us
            </h3>
            <h4 className="text-lg lg:text-lg font-normal text-purple-500 py-11">
              Help your team to give their best, contact us now
            </h4>
            <p className="text-lg font-normal text-gray-600">
              More than ever, service and support departments are at the
              forefront of a company’s success. Customer success depends on
              synergizing customer service representatives with the rest of the
              company.
            </p>
            <Image
              src="/img/contact.png"
              width={300}
              height={250}
              alt="Picture of the author"
              className="w-[300px] h-[200px]"
            />
          </div>
          <div className="bg-gray-100 rounded-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
