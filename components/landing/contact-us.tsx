import Image from "next/image";
import ContactForm from "./contact-form";
import img from "../../public/img/contact.png"

const ContactUs = () => {
  return (
    <section id="ContactUs" className="py-20 md:container mx-auto bg-[#FFFFFF]">
      <div className="mx-auto px-7 h-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
          <div className="">
            <h3 style={{fontSize:"60px"}} className="w-full lg:text-6xl md:text-4xl text-4xl !leading-[60px]">
              Contact Us
            </h3>
            <h4 className="text-lg lg:text-lg font-normal text-purple-500 py-11">
              Help your team to give their best, contact us now
            </h4>
            <p className="text-sm  font-normal text-gray-600">
              More than ever, service and support departments are at the
              forefront of a company’s success. Customer success depends on
              synergizing customer service representatives with the rest of the
              company.
            </p>
            <Image
              src={img}
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
