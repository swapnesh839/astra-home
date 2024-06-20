"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { useState } from "react";

const FormSchema = z.object({
  businessName: z.string().min(2, {
    message: "Business Name must be at least 2 characters.",
  }),
  fullName: z.string().min(2, {
    message: "full Name must be at least 2 characters.",
  }),
  email: z.string({ required_error: "Email is required" }).min(1, { message: "Email is required" }).email("Invalid email"),
  phone: z.string({ required_error: "Invalid number", }).min(10, { message: 'Phone Number should contain 10 digit' }),
  yourTitle: z.string().min(2, {
    message: "Your Title must be at least 2 characters.",
  }),
  requirement: z.string().min(2, {
    message: "Requirement must be at least 2 characters.",
  }),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      businessName: "",
      fullName: "",
      email: "",
      phone: "",
      yourTitle: "",
      requirement: ""
    },
  });

  // function onSubmit(data: z.infer<typeof FormSchema>) {
  //   console.log(data);
  // }
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);
    // businessName: "",
    //   fullName:"",
    //   email:"",
    //   phone:"",
    //   yourTitle:"",
    //   requirement:""

    const formData = new FormData();
    formData.append("firstName", data.fullName);
    // formData.append("lastName", "");
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("title", data.yourTitle);
    formData.append("companyName", data.businessName);
    formData.append("query", data.requirement || "");
    try {
      const response = await fetch('https://servybackdev.starlly.in/api/leads/leadCustomer/', {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // },
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.status === 'success') {
          alert('Successfully Submited');
        } else {
          alert('Error while Submitting try later');
        }
      } else {
        alert('Error while Submitting try later');
      }
      alert('Error while Submitting try later');
    } catch (error) {
      console.error('Error while Submitting try later:', error);
    }
    finally {
      setLoading(false);
      form.reset();
    }
  };


  return (
    <section className="">
      <div className="grid grid-cols-1 gap-0">
        <div className="w-full relative p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-0">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>BUSINESS NAME</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                          placeholder="Business Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-9">
                <div>
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>FULL NAME</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                            placeholder="Full Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>EMAIL</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                            placeholder="Email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-9">
                <div>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PHONE NUMBER</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                            placeholder="+91-"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="yourTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>YOUR TITLE</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                            placeholder="your Title"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-0">
                <FormField
                  control={form.control}
                  name="requirement"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>RQUIREMENT</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                          placeholder="requirement"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit Enquiry
              </Button>
              {loading ? 'Submitting...' : ''}
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
