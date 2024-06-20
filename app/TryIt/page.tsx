"use client";

import React, { useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

const TryIt: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const router = useRouter();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_16zq8f8",
        "template_6ag0war",
        form.current,
        "Azmp7j5WTTgatug7i"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");

          router.push("/thankyou");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="container mx-auto text-center py-6 mb-12" id="Usecases">
      <div className="md:flex md:justify-center mb-6 font-bold leading-tight text-center text-black justify-center items-center">
        <form
          className="bg-white drop-shadow-2xl rounded-lg shadow-gray-600 px-8 pt-6 pb-8 mb-4 w-[600px]"
          onSubmit={sendEmail}
          ref={form}
        >
          <h2 className="text-3xl text-black font-normal text-center p-5">
            Checkout Spectra yourself, do share your details
          </h2>
          <div className="mb-4 mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="username"
              type="text"
              placeholder="enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="enter your mail"
              required
            />
          </div>
          <div>
            <button
              className="w-full py-4 my-4 bg-purple-200 text-purple-900 font-bold px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out shadow-xl"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TryIt;
