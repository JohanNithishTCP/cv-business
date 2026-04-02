import { Send } from "lucide-react"
import Image from "next/image"
export default function Footer() {

  return (
    <footer className="bg-[#F5F6F7] px-6 lg:px-16 py-16">

      <div className="max-w-300 mx-auto">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* LOGO */}
          <div
            className="lg:col-span-3"
            data-aos="fade-up"
          >
            <img
              src={`/noxbox/assets/logo.png`}
              alt="logo"
              width={100}
              height={100}
            />

            <p className="text-gray-600 text-base mt-6">
              Making our world more productive
            </p>
          </div>


          {/* QUICK LINKS */}
          <div
            className="lg:col-span-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="font-semibold text-[#0C3B5D] mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-600 text-base cursor-pointer">
              <li>About Us</li>
              <li>Products</li>
              <li>Technical Support</li>
              <li>Contact Us</li>
            </ul>
          </div>


          {/* COMPANY */}
          <div
            className="lg:col-span-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="font-semibold text-[#0C3B5D] mb-3">
              Company
            </h3>

            <ul className="space-y-2 text-gray-600 text-base cursor-pointer">
              <li>Careers</li>
              <li>Linde Corporate</li>
              <li>Global Locations</li>
              <li>FAQ</li>
            </ul>
          </div>


          {/* OTHER LINKS */}
          <div
            className="lg:col-span-2"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="font-semibold text-[#0C3B5D] mb-3">
              Other Links
            </h3>

            <ul className="space-y-2 text-gray-600 text-base cursor-pointer ">
              <li>Cookie Settings</li>
              <li>Privacy Notice</li>
              <li>Imprint</li>
              <li>Terms of Use</li>
            </ul>
          </div>


          {/* NEWSLETTER */}
          <div
            className="lg:col-span-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="font-semibold text-[#0C3B5D] mb-3">
              Stay up to date
            </h3>

            <div className="relative">

              <input
                type="email"
                placeholder="Your email address"
                className="
                w-full
                bg-gray-600
                rounded-md
                py-2.5
                pl-4
                pr-10
                text-sm
                border
                placeholder-gray-50
                focus:outline-none
                focus:ring-2
                focus:ring-[#1AA5E0]
                "
              />

              <Send
                size={18}
                className="
                absolute
                right-3
                top-1/2
                cursor-pointer
                -translate-y-1/2
                text-gray-50
                "
              />

            </div>
          </div>

        </div>


        {/* DIVIDER */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-base text-gray-500">

          © Linde PLC 2018 - 2026

        </div>

      </div>

    </footer>
  )
}