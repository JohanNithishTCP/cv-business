"use client";

import React from "react";
import Button from "./Button";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Newsletter() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side: Need help? */}
                    <div className="flex flex-col gap-6 md:gap-10">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Need help?
                            <span className="text-[#7C2B83] font-extrabold border-b-2 border-[#7C2B83]">(888-486-4644)</span>
                        </h2>
                        <div className="flex gap-4">
                            {[Facebook, Linkedin, Instagram, Twitter].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-12 h-12 rounded-full flex items-center justify-center text-gray-600 hover:text-[#7C2B83] border border-gray-200 hover:border-[#7C2B83] transition-all bg-[#f1f1f1] shadow-md">
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Subscribe Form */}
                    <div className="w-full">
                        <h3 className="text-xl lg:text-3xl !font-bold mb-4">Get our emails for info on new items, sales and more!</h3>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Sign up for Newsletter"
                                className="flex-1 px-5 py-3 border border-[#7C2B83] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#7C2B83]"
                            />
                            <Button type="submit" className="shrink-0 px-8 py-3">
                                Subscribe
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
