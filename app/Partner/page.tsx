"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50, { message: "Name must not exceed 50 characters." }).nonempty("Name is required."),
  email: z.string().email("Invalid email").min(1, { message: "Email is required." }).max(100, { message: "Email must not exceed 100 characters." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }).max(15, { message: "Phone number must not exceed 15 digits." }).nonempty("Phone number is required."),
  explain: z.string().min(2, { message: "Explanation must be at least 2 characters." }).max(500, { message: "Explanation must not exceed 500 characters." }).nonempty("Explanation is required."),
  domain: z.string(),
});

interface FormData {
  name: string;
  email: string;
  phone: string;
  domain: string;
  explain: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    domain: "",
    explain: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showExistingEmailError, setShowExistingEmailError] = useState<boolean>(false);
  const [type, setType] = useState<string>("Machine/Equipment");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(
        "https://api.airtable.com/v0/appDwI8UL4XREQrjo/Form",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer keyc11lgyUiUWVOPe",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  Name: data.name,
                  Email: data.email,
                  Phone: data.phone,
                  Domain: data.domain,
                  Explanation: data.explain,
                  Business_type: type,
                },
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("An error occurred while saving the data");
      }

      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

      setFormData({
        name: "",
        email: "",
        phone: "",
        domain: "",
        explain: "",
      });
      setErrorMessage("");
      setShowExistingEmailError(false);
      reset();
    } catch (error) {
      setErrorMessage("An error occurred while saving the data");
      setShowExistingEmailError(true);

      setTimeout(() => {
        setShowExistingEmailError(false);
      }, 3000);
    }
  };

  const [showHide, setShowHide] = useState<string>("yes");

  const handleShow = (e: React.MouseEvent<HTMLButtonElement>) => {
    setType(e.currentTarget.id);
    if (type === "Gateway/Logger/sensor") {
      setFormData({ ...formData, domain: "-" });
    }
    setShowHide(e.currentTarget.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  return (
    <div className="container mx-auto px-12">
      <div className="w-full py-5 pt-[100px] pb-[100px]" id="Partner">
      {/* <img src={bvimg} alt="" className="w-full h-[200px] pt-0" /> */}
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-center">
          
          <div className="mx-auto">
          <p className="leading-normal text-xl mb-8 text-justify">
            If you are a machine/equipment manufacturer or gateway/sensor/logger
            producer, we would want to partner with you. Please let us know your
            details below and we will get in touch.
          </p>
          <button
            id="Machine/Equipment"
            className={`mx-auto lg:mx-0 hover:bg-white hover:text-blue-800 hover:shadow-xl hover:border-2 text-purple-900 font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out w-[300px] ${showHide === "yes"
                ? "scale-105 bg-white text-blue-800 shadow-xl border-2"
                : "bg-purple-200"
              }`}
            onClick={handleShow}
            value="yes"
          >
            Machine/Equipment
          </button>
          <button
            id="Gateway/Logger/sensor"
            className={`mx-auto lg:mx-0 text-purple-900 font-bold my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out w-[300px] ${showHide === "no"
                ? "scale-105 bg-white text-blue-800 shadow-xl border-2"
                : "bg-purple-200"
              }`}
            onClick={handleShow}
            value="no"
          >
            Gateway/Logger/sensor
          </button>
          </div>
        </div>

        <div className="w-full md:w-3/5 py-6 text-center lg:pl-40">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="g-white shadow-2xl shadow-gray-600 px-8 pt-6 pb-8 mb-4 max-w-2xl w-auto"
          >
            <h2 className="text-3xl text-black font-bold text-center p-5">
              Fill the form
            </h2>
            <div className="mb-4">
              <input
                {...register("name")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="name"
                type="text"
                value={formData.name}
                placeholder="Full name"
                onChange={handleInputChange}
              />
              <span className="text-red-600">{errors.name?.message}</span>
            </div>
            <div className="mb-6">
              <input
                {...register("phone")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="phone"
                id="phone"
                value={formData.phone}
                placeholder="Phone number"
                onChange={handleInputChange}
              />
              <span className="text-red-600">{errors.phone?.message}</span>
            </div>
            <div className="mb-6">
              <input
                {...register("email")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Email id"
                onChange={handleInputChange}
              />
              <span className="text-red-600">{errors.email?.message}</span>
            </div>

            {showHide === "yes" && (
              <div className="mb-6">
                <input
                  {...register("domain")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="domain"
                  placeholder="Domain being served"
                  value={formData.domain}
                  onChange={handleInputChange}
                />
                <span className="text-red-600">{errors.domain?.message}</span>
              </div>
            )}
            <div className="mb-6">
              <textarea
                {...register("explain")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Explain the needs, looking forward to work together"
                name="explain"
                value={formData.explain}
                onChange={handleInputChange}
              />
              <span className="text-red-600">{errors.explain?.message}</span>
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full hover:text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
            {showSuccessMessage && (
              <div id="success">Thank you for filling the form</div>
            )}
            {showExistingEmailError && (
              <div id="error">{errorMessage}</div>
            )}
          </form>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Form;
