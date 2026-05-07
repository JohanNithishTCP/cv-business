import { BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="relative w-full bg-[#f5f7fa] py-16 overflow-hidden">

      {/* Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/hex-pattern-light.png')] bg-repeat"></div>

      <div className="container relative  mx-auto px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Column 1 */}
          <div>
                    <div>
          <img src="/vectracor/VectraCor.png" className="w-48 h-16 md:w-60 md:h-20 object-contain lg:-ml-10" />
        </div>

            <p className="text-gray-600 text-base mt-4 leading-relaxed max-w-[300px]">
              VectraCor, Inc. is a medical device company with “Disruptive Early
              Detection Technology”...
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b border-gray-300 pb-2">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-base text-gray-600 mt-3">
              <a href="#">Home</a>
              <a href="#">Customer Care</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Products</a>
              <a href="#">Clinical Research</a>
              <a href="#">Veterinary Products</a>
              <a href="#">OEM</a>
              <a href="#">Software</a>
              <a href="#">Connect to a Technician</a>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>

            <div className=" text-gray-600 space-y-2 text-lg">
              <p>info@vectracor.com</p>
              <p>+1 973-904-0444</p>
              <p>785 Totowa Road Totowa, New Jersey 07512</p>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4 text-lg">
              Connect With Us
            </h3>
            <p className="text-base text-gray-600 mb-4">
              Smart Software for Better Diagnostics
            </p>

            <div className="flex gap-3">
              {[<BsTwitter/>, <BsLinkedin/>, <BsYoutube/>].map((item, i) => (
                <div
                  key={i}
                  className="w-10 h-10 cursor-pointer bg-red-500 text-white rounded-md flex items-center justify-center shadow-md"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-10 pt-4 text-center">
          <p className="text-base text-[#25477F]">
            All personal information collected by VectraCor is for internal use only...
          </p>

          <p className="text-base text-gray-500 mt-2">
            © Copyright Vectracor Medical 2026. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}