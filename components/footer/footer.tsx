"use client"
import Link from "next/link";
import axios from "axios"
import { useState } from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = [
  // { id: 0, linkName: "Login", url: "/login" },
  { id: 1, linkName: "Company", url: "/company" },
  // { id: 2, linkName: "Carrer", url: "/carrer" },
  { id: 3, linkName: "Partner", url: "/Partner" },
  { id: 4, linkName: "Contact", url: "/#ContactUs" },
  { id: 5, linkName: "Newsletter", url: "https://spectra-2.ck.page/profile" },
];

const Solutions = [
  { id: 0, linkName: "Workflow Management For Machines", url: "/Workflow" },
  { id: 1, linkName: "Preventive info/Virtual Bots", url: "/VirtualBots" },
  { id: 2, linkName: "Usecases", url: "/#Usecases" },
];

const Products = [
  { id: 0, linkName: "Spectra", url: "/spectra" },
  { id: 1, linkName: "Servy", url: "/servy" },
];

const Resources = [
  { id: 0, linkName: "Blog", url: "/blog" },
  { id: 1, linkName: "API Documentation", url: "/api-documentation" },
  { id: 2, linkName: "Try It", url: "/try-it" },
];

const SocialMedia = [
  { id: 0, url: "", icon: <FaTwitter className="text-xl" /> },
  { id: 1, url: "", icon: <FaLinkedin className="text-xl mx-5" /> },
  { id: 2, url: "", icon: <FaFacebookSquare className="text-xl" /> }
];




const Footer = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showExistingEmailError, setShowExistingEmailError] = useState(false);
  const isValidEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setErrorMessage("Invalid email address");
      setShowExistingEmailError(true);

      // After 3 seconds (3000 milliseconds), hide the error message
      setTimeout(() => {
        setShowExistingEmailError(false);
      }, 3000);

      return;
    }

    try {
      // Check if the email exists in the Airtable database
      const response = await axios.get(
        `https://api.airtable.com/v0/appDwI8UL4XREQrjo/Subscribers?filterByFormula=SEARCH("${email}", {Email})`,
        {
          headers: {
            Authorization: `Bearer keyc11lgyUiUWVOPe`,
          },
        }
      );

      if (response.data.records.length > 0) {
        setErrorMessage("Email already exists in the database");
        setShowExistingEmailError(true);

        // After 3 seconds (3000 milliseconds), hide the error message
        setTimeout(() => {
          setShowExistingEmailError(false);
        }, 3000); // Adjust the duration as needed (3000ms = 3 seconds)    
        return;
      }

      // Save the email to the Airtable database
      await axios.post(
        `https://api.airtable.com/v0/appDwI8UL4XREQrjo/Subscribers`,
        {
          records: [
            {
              fields: {
                Email: email,
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer keyc11lgyUiUWVOPe`,
            "Content-Type": "application/json",
          },
        }
      );

      // Reset the email and error message after successful submission
      setShowSuccessMessage(true);

      // After 3 seconds (3000 milliseconds), hide the success message
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
      setEmail("");
      setErrorMessage("");
    }
    catch (error) {
      setErrorMessage("An error occurred while saving the data");
      setShowExistingEmailError(true);

      // After 3 seconds (3000 milliseconds), hide the error message
      setTimeout(() => {
        setShowExistingEmailError(false);
      }, 3000);
    }
  };
  const submit = (e: any) => {
    e.preventDefault()
    console.log(e);

  }
  return (
    <section className="w-full bg-gray-600 pt-14 pb-6">
      <div className="container mx-auto px-7 h-full">
        <div className="grid grid-cols-1 gap-5 border-b-2 border-gray-700 pb-5">
          <div>
            <div className="lg:flex md:block sm:block block justify-between">
              {/* <div>
                <div className="flex-1">
                  <p className="text-2xl mb-3 text-[#FFFFFF] font-medium">
                    Subscribe to our newsletter
                  </p>
                  <p className="py-4 text-[#FFFFFF]">
                    The latest news, articles, and resources,
                    <br />
                    sent to yourinbox weekly.
                  </p>
                  <form onSubmit={(e: any) => submit(e)} className="flex flex-col sm:flex-row">
                    <input
                      className="w-auto p-2 mr-4 rounded-md mb-4 text-black focus:border-purple-600 focus:outline-none"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      // readOnly
                      placeholder="Enter email.."
                    />
                    <button
                      type="submit"
                      className="p-2 mb-4 border-2 rounded-full border-gray-200 text-gray-200 transform duration-300 ease-in-out hover:bg-purple-600 hover:border-transparent hover:text-white"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div> */}
              <div className="">
                <p className="text-2xl mb-3 text-[#FFFFFF] font-medium">
                  About
                </p>
                <ul>
                  {About.map((i) => (
                    <li key={i.id} className="mb-3">
                      <Link
                        className="text-[#FFFFFF] hover:text-purple-200"
                        href={i.url}
                      >
                        {i.linkName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="">
                <p className="text-2xl mb-3 text-[#FFFFFF] font-medium">
                  Solutions
                </p>

                <ul>
                  {Solutions.map((i) => (
                    <li key={i.id} className="mb-3">
                      <Link
                        className="text-[#FFFFFF] hover:text-purple-200"
                        href={i.url}
                      >
                        {i.linkName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <div className="">
                <p className="text-2xl mb-3 text-[#FFFFFF] font-medium">
                  Products
                </p>
                <ul>
                  {Products.map((i) => (
                    <li key={i.id} className="mb-3">
                      <Link
                        className="text-[#FFFFFF] hover:text-purple-200"
                        href={i.url}
                      >
                        {i.linkName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}


              {/* <div className="">
                <p className="text-2xl mb-3 text-[#FFFFFF] font-medium">
                  Resources
                </p>
                <ul>
                  {Products.map((i) => (
                    <li key={i.id} className="mb-3">
                      <Link
                        className="text-[#FFFFFF] hover:text-purple-200"
                        href={i.url}
                      >
                        {i.linkName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div> */}

            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-0 pt-5">
          <div>
            <p className="text-[#FFFFFF]">
              2024 Starlly Solutions pvt ltd. All rights reserved
            </p>
          </div>
          <div className="me-14">
            <ul className="flex justify-end">
              {SocialMedia.map((i) => (
                <li key={i.id} className="mb-3">
                  <Link
                    className="text-[#FFFFFF] hover:text-purple-200"
                    href={i.url}
                  >
                    {i.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
