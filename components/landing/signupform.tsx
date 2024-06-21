"use client"
import Image from "next/image";
import { Target } from "lucide-react";
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
    Firstname: z.string().min(2, {
        message: "First Name must be at least 2 characters.",
    }),
    LastName: z.string().min(2, {
        message: "Last Name must be at least 2 characters.",
    }),
    email: z.string({ required_error: "Email is required" }).min(1, { message: "Email is required" }).email("Invalid email"),
    phone: z.string({ required_error: "Invalid number", }).min(10, { message: 'Phone Number should contain 10 digit' }),
    yourTitle: z.string().min(2, {
        message: "Your Title must be at least 2 characters.",
    }),
    requirement: z.string().min(2, {
        message: "Requirement must be at least 2 characters.",
    }),
    password: z.string()
        .min(6, { message: "Password must be at least 6 characters long." })
        .refine((val) => /[A-Z]/.test(val), { message: "Password must contain at least one uppercase letter." })
        .refine((val) => /[a-z]/.test(val), { message: "Password must contain at least one lowercase letter." })
        .refine((val) => /[0-9]/.test(val), { message: "Password must contain at least one number." })
        .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), { message: "Password must contain at least one special character." })
});

import { MdGroupWork, MdMobileScreenShare } from "react-icons/md";

const SignupForm = () => {
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            businessName: "",
            Firstname: "",
            LastName: "",
            email: "",
            phone: "",
            yourTitle: "",
            requirement: "",
            password: ""
        },
    });

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        setLoading(true);
        // businessName: "",
        //   fullName:"",
        //   email:"",
        //   phone:"",
        //   yourTitle:"",
        //   requirement:""

        const formData = new FormData();
        // formData.append("firstName", data.fullName);
        // // formData.append("lastName", "");
        // formData.append("email", data.email);
        // formData.append("phone", data.phone);
        // formData.append("title", data.yourTitle);
        // formData.append("companyName", data.businessName);
        // formData.append("query", data.requirement || "");
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
        <section className=" py-20 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-800 text-white flex flex-col justify-center">
                    <div className="flex p-5 ">
                        <div className="p-4 bg-purple-500 flex my-auto me-6 ms-2"><Target size={20} className="m-auto" /></div>
                        <div className="p-4 mb-2">
                            Call Management Made Effortless
                            <ul className="text-sm mt-3" style={{ listStyle: "disc" }}>
                                <li>Manage multiple clients, bands and products seamlessly.</li>
                                <li>For multi-brand service don&apos;t juggle with various CRMs.</li>
                                <li>Effortlessly manage AMCs.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex p-5 ">
                        <div className="p-4 bg-purple-500 flex my-auto me-6 ms-2"><MdMobileScreenShare size={20} className="m-auto" /></div>
                        <div className="p-4 mb-2">
                            Mobile App for Field Technicians
                            <ul className="text-sm mt-3" style={{ listStyle: "disc" }}>
                                <li>Manage multiple clients, bands and products seamlessly.</li>
                                <li>Updates, inventory requests/returns, expense<br /> claims, and mileage recording are just a tap away.</li>
                                <li>Boost job satisfaction and retention of team.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex p-5 ">
                        <div className="p-4 bg-purple-500 flex my-auto me-6 ms-2"><MdGroupWork size={20} className="m-auto" /></div>
                        <div className="p-4 mb-2">
                            Measure and Improve
                            <ul className="text-sm mt-3" style={{ listStyle: "disc" }}>
                                <li>Measure productivity and identify your service heroes.</li>
                                <li>Keep an eye on costs and reduce them where possible</li>
                                <li>Enhance Turnaround Time (TAT) for superior service.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-12">
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
                                        name="Firstname"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>FIRST NAME</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                                                        placeholder="First Name"
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
                                        name="LastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>LAST NAME</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                                                        placeholder="Last Name"
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
                                                        placeholder="PHONE NUMBER"
                                                        type="number"
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
                                                        type="email"
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
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>PASSWORD</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                                                        placeholder="password"
                                                        type="password"
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
                                SIGNUP NOW
                            </Button>
                            {loading ? 'Submitting...' : ''}
                            <p className="text-sm"> By clicking &quot;SignUp&quot; you agree to receive email or phone
                            calls from us to handle the request!</p>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
};
export default SignupForm;
