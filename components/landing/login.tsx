"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
// import { useRouter } from "next/router";
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
import { Label } from "@radix-ui/react-label";

const LoginSchema = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email("Invalid email"),
    password: z
        .any()
    // .min(6, { message: "Password must be at least 6 characters long." }),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

const Login: React.FC = () => {
    const [error, setError] = useState("");
    //   const router = useRouter();
    const form = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const authorizeUser = async (data: LoginSchemaType) => {
        setError("")
        try {
            const response = await axios.post(`https://spectra.starlly.in/api/login`, data);
            if (response.data.isAuthenticated) {
                console.log("isAuthenticated");
                
                // Assuming you have a login context
                // login({ token: response.data.auth_bearer, tenantLogo: response.data.tenantLogo });
                // router.push("/dashboard");
            } else {
                setError(response.data.message);
            }
        } catch (err: any) {
            setError(err?.response?.data?.message || "Error while logging in");
        }
    };

    return (
        <div className="container mx-auto p-4 min-h-[100vh] h-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full ">
                <div className="bg-purple-800 text-white flex flex-col justify-center">
                    <div className="flex p-5">
                        {/* <div className="p-4 bg-purple-500 flex my-auto me-6 ms-2">
                            <img src="/powered-by.png" alt="powered by" className="w-6 h-6" />
                        </div> */}
                        <div className="p-4 mb-2">
                            <h1 className="text-2xl">Login</h1>
                            <p className="text-sm mt-3">
                                Welcome back! Please login to your account.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-12 flex ">
                    <div className=" my-auto w-full">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(authorizeUser)}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 gap-6">
                                    {error && (
                                        <div className="text-red-700" role="alert">
                                            {error}
                                        </div>
                                    )}
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email Address</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="bg-gray-200 text-gray-700 border focus:outline-none focus:bg-white h-11"
                                                        placeholder="Email Address"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
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
                                </div>
                                <Button
                                    type="submit"
                                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Login
                                </Button>
                                <div className="text-center mt-3">
                                    <span>
                                        Don&apos;t Have an Account?
                                        <Link className="ms-2" href="/Signup">
                                            Sign Up
                                        </Link>
                                    </span>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
