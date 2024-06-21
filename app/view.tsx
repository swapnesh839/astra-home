import AWellDesigned from "@/components/landing/a-well-designed";
import Banner from "@/components/landing/banner";
import Testimonial from "@/components/landing/testimonial";
import Businesses from "@/components/landing/businesses";
import ContactUs from "@/components/landing/contact-us";
import GivingYouTime from "@/components/landing/giving-you-time";
import HealthyMachines from "@/components/landing/healthy-machines";
import Pricing from "@/components/landing/pricing";
import TrustedCustomer from "@/components/landing/trusted-customer";
import UseCases from "@/components/landing/use-cases";
import Signup from "@/components/landing/signupform";
import WordsFromOurCustomers from "@/components/landing/words-from-0ur-customers";

const ViewPage = () => {
    return (
        <div className="scroll-smooth">
            <Banner />
            <HealthyMachines />
            <TrustedCustomer />
            {/* <Testimonial/> */}
            <Businesses />
            <GivingYouTime />
            <WordsFromOurCustomers />
            {/* <Signup/> */}
            <UseCases />
            <AWellDesigned />
            <ContactUs />
            <Pricing />            
        </div>
    );
}
export default ViewPage;