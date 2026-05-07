"use client";

import { Send } from "lucide-react";
import { BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";

export default function MedasFooter() {
  return (
    <footer className="w-full">
      
      <div className="grid md:grid-cols-2">
        
        {/* LEFT SECTION */}
        <div
          data-aos="fade-right"
          className="bg-gray-100 px-6 md:px-10 lg:px-36 py-12 flex flex-col justify-center"
        >

            <img src="/medas-innovation/assets/medas-logo.png" alt="logo" className="w-32 mb-6" />

          {/* Description */}
          <p className="mt-4 text-gray-600 text-base max-w-sm">
            MEDAS , company dedicated manufacture and distribution of medical
            material devices
          </p>

          {/* Input */}
          <div className="mt-4 flex items-center max-w-sm">
            <input
              type="email"
              placeholder="Please enter your email"
              className="flex-1 px-4 py-2 rounded-l-md border text-black placeholder:text-gray-500 border-gray-300 outline-none text-sm"
            />
            <button className="bg-[#0287C3] text-white px-4 py-2 rounded-r-md hover:bg-[#006AB1] cursor-pointer transition">
             <Send className="" />
            </button>
          </div>

          {/* Social dots */}
          <div className="flex gap-3 mt-4">
            {[<BsInstagram />, <FaSquareFacebook />, <BsLinkedin/>, <BsYoutube/>].map((item, i) => (
              <div
                key={i}
                className=" cursor-pointer w-8 h-8 flex items-center justify-center bg-[#0287C3] rounded-full"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <p className="mt-6 text-base text-gray-500">
            © Copyright <span className="font-semibold">Medadv</span> Medical
            2026. All Rights Reserved.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div
          data-aos="fade-left"
          className="bg-[#0287C3] text-white px-6 md:px-10 lg:px-16 py-12"
        >
          <div className="grid sm:grid-cols-2 gap-12">
            
            {/* QUICK LINKS */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-base text-white/80">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">Products</li>
                <li className="hover:text-white cursor-pointer">Company</li>
                <li className="hover:text-white cursor-pointer">Services</li>
                <li className="hover:text-white cursor-pointer">News</li>
                <li className="hover:text-white cursor-pointer">Download</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact</h4>

              <div className="space-y-4 text-base text-white/80">
                
                <div>
                  <p className="font-medium text-white">Visit Our Location</p>
                  <p>20855 NE, 16th Avenue, Miami, FL 33179</p>
                </div>

                <div>
                  <p className="font-medium text-white">Email Address</p>
                  <p>sales@medasusa.com</p>
                  <p>info@medasusa.com</p>
                </div>

                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p>+1 786 787-0396</p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

    </footer>
  );
}