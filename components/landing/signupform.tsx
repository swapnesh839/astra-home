"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import Select from "react-select";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MdGroupWork, MdMobileScreenShare } from "react-icons/md";
import { Target } from "lucide-react";
import { Label } from "@radix-ui/react-label";

const FormSchema = z.object({
    CompanyName: z.string().min(2, {
        message: "Company Name must be at least 2 characters.",
    }),
    AdminName: z.string().min(2, {
        message: "Admin Name must be at least 2 characters.",
    }),
    EmailAddress: z
        .string({ required_error: "Email is required" })
        .min(1, { message: "Email is required" })
        .email("Invalid email"),
    PhoneNumber: z
        .string({ required_error: "Invalid number" })
        .min(10, { message: "Phone Number should contain 10 digits" }),
    Password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long." })
        .refine((val) => /[A-Z]/.test(val), {
            message: "Password must contain at least one uppercase letter.",
        })
        .refine((val) => /[a-z]/.test(val), {
            message: "Password must contain at least one lowercase letter.",
        })
        .refine((val) => /[0-9]/.test(val), {
            message: "Password must contain at least one number.",
        })
        .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
            message: "Password must contain at least one special character.",
        }),
    Titleoftheperson: z.string().min(2, {
        message: "Title of the person must be at least 2 characters.",
    }),
    Firmtype: z.string().min(2, {
        message: "Firm type must be at least 2 characters.",
    }),
    AcceptTerms: z
        .boolean()
        .refine((val) => val === true, { message: "Please accept the terms." }),
});

const SignupForm = () => {
    const [loading, setLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            CompanyName: "",
            AdminName: "",
            EmailAddress: "",
            PhoneNumber: "",
            Password: "",
            Titleoftheperson: "",
            Firmtype: "",
            AcceptTerms: true,
        },
    });
    const firmTypes = [
        { value: 'Sole Proprietorship', label: 'Sole Proprietorship' },
        { value: 'Partnership', label: 'Partnership' },
        {
            value: 'Limited Liability Partnership (LLP)',
            label: 'Limited Liability Partnership (LLP)',
        },
        { value: 'Private Limited Company', label: 'Private Limited Company' },
        { value: 'Public Limited Company', label: 'Public Limited Company' },
        { value: 'One-Person Company', label: 'One-Person Company' },
        { value: 'Joint-Venture Company', label: 'Joint-Venture Company' },
        {
            value: 'Non-Government Organization (NGO)',
            label: 'Non-Government Organization (NGO)',
        },
        { value: 'Other', label: 'Other' },
    ]
    const titleOptions = [
        { value: 'Founder or Leadership Team', label: 'Founder or Leadership Team' },
        { value: 'Operations', label: 'Operations' },
        { value: 'Service', label: 'Service' },
        { value: 'Sales', label: 'Sales' },
        { value: 'Field Service Executive', label: 'Field Service Executive' },
        { value: 'Other', label: 'Other' },
    ]

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        console.log(data);

        // setLoading(true);

        // const formData = new FormData();
        // formData.append("CompanyName", data.CompanyName);
        // formData.append("AdminName", data.AdminName);
        // formData.append("EmailAddress", data.EmailAddress);
        // formData.append("PhoneNumber", data.PhoneNumber);
        // formData.append("Password", data.Password);
        // formData.append("Titleoftheperson", data.Titleoftheperson);
        // formData.append("Firmtype", data.Firmtype);
        // formData.append("AcceptTerms", data.AcceptTerms.toString());

        // try {
        //     const response = await fetch(
        //         "https://servybackdev.starlly.in/api/leads/leadCustomer/",
        //         {
        //             method: "POST",
        //             body: formData,
        //         }
        //     );

        //     if (response.ok) {
        //         const responseData = await response.json();
        //         if (responseData.status === "success") {
        //             alert("Successfully Submitted");
        //         } else {
        //             alert("Error while Submitting, please try again later");
        //         }
        //     } else {
        //         alert("Error while Submitting, please try again later");
        //     }
        // } catch (error) {
        //     console.error("Error while Submitting, please try again later:", error);
        // } finally {
        //     setLoading(false);
        //     form.reset();
        // }
    };

    return (
        <section className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-purple-800 text-white flex flex-col justify-center">
                    <div className="flex p-5 ">
                        <div className="p-4 bg-purple-500 flex my-auto me-6 ms-2">
                            <Target size={20} className="m-auto" />
                        </div>
                        <div className="p-4 mb-2">
                            Call Management Made Effortless
                            <ul className="text-sm mt-3" style={{ listStyle: "disc" }}>
                                <li>Manage multiple clients, bands, and products seamlessly.</li>
                                <li>
                                    For multi-brand service, don&apos;t juggle with various CRMs.
                                </li>
                                <li>Effortlessly manage AMCs.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex p-5 ">
                        <div className="p-4 bg-purple-500 flex my-auto me-6 ms-2">
                            <MdMobileScreenShare size={20} className="m-auto" />
                        </div>
                        <div className="p-4 mb-2">
                            Mobile App for Field Technicians
                            <ul className="text-sm mt-3" style={{ listStyle: "disc" }}>
                                <li>Manage multiple clients, bands, and products seamlessly.</li>
                                <li>
                                    Updates, inventory requests/returns, expense
                                    <br /> claims, and mileage recording are just a tap away.
                                </li>
                                <li>Boost job satisfaction and retention of the team.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex p-5 ">
                        <div className="p-4 bg-purple-500 flex my-auto me-6 ms-2">
                            <MdGroupWork size={20} className="m-auto" />
                        </div>
                        <div className="p-4 mb-2">
                            Measure and Improve
                            <ul className="text-sm mt-3" style={{ listStyle: "disc" }}>
                                <li>Measure productivity and identify your service heroes.</li>
                                <li>Keep an eye on costs and reduce them where possible.</li>
                                <li>Enhance Turnaround Time (TAT) for superior service.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-12">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6">
                                <FormField
                                    control={form.control}
                                    name="CompanyName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>COMPANY NAME</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                                                    placeholder="Company Name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="AdminName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>ADMIN NAME</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                                                    placeholder="Admin Name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="EmailAddress"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>EMAIL ADDRESS</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                                                    placeholder="Email Address"
                                                    type="email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="PhoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>PHONE NUMBER</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                                                    placeholder="Phone Number"
                                                    type="tel"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="Password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>PASSWORD</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                                                    placeholder="Password"
                                                    type="password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="Titleoftheperson"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>TITLE OF THE PERSON</FormLabel>
                                            <FormControl>
                                                <Select
                                                    {...field}
                                                    options={titleOptions}
                                                    classNamePrefix='react-select'
                                                    value={titleOptions.find(option => option.value === field.value)}
                                                    onChange={(selectedOption) => field.onChange(selectedOption?.value)}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="Firmtype"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>FIRM TYPE</FormLabel>
                                            <FormControl>
                                                <Select
                                                    {...field}
                                                    options={firmTypes}
                                                    classNamePrefix='react-select'
                                                    value={firmTypes.find(option => option.value === field.value)}
                                                    onChange={(selectedOption) => field.onChange(selectedOption?.value)}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Label htmlFor='Terms' className='fw-lighter'>
                                    <Controller
                                        name='AcceptTerms'
                                        control={form.control}
                                        rules={{
                                            required: 'Please accept the Terms and Conditions',
                                        }}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type='checkbox'
                                                className="me-auto"
                                                required
                                                name='AcceptTerms'
                                                value={field.value.toString()}
                                            />
                                        )}

                                    />
                                    {' '}
                                    I accept the Terms and Conditions
                                    <FormMessage />
                                </Label>
                            </div>
                            <Button
                                type="submit"
                                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                SIGNUP NOW
                            </Button>
                            {loading && <p className="text-sm">Submitting...</p>}
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default SignupForm;
