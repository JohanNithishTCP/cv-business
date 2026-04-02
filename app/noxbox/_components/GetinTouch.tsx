import { Mail, Phone } from "lucide-react"
import Image from "next/image"
export default function GetInTouch() {

  return (
    <section className="bg-[#F5F6F7] py-24 px-6 lg:px-16">

      <div className="max-w-325 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-6">

          {/* Title */}
          <div
            className="flex items-center gap-3 mb-4"
            data-aos="fade-up"
          >
            <img
              src={`/noxbox/assets/gemini_logo_blue.png`}
              width={34}
              height={34}
              alt="gemini logo"
            />
            <h2 className="text-3xl font-semibold text-[#0C3B5D]">
              Looking To Get In Touch?
            </h2>
          </div>


          <h3
            className="font-semibold text-gray-800 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get Connected With Our Global Distributor & Support Network
          </h3>


          <p
            className="text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The NOxBOX® system is distributed and supported globally through an
            authorized distributor network. To connect with your local
            distributor, please contact us via our general inquiries phone
            or email.
          </p>


          <p
            className="text-gray-600 leading-relaxed mt-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            To connect with your nearest authorized distributor or to receive
            more information about the NOxBOX® system, please reach out to us
            through our general inquiries phone number or email, and our team
            will assist you promptly.
          </p>


          {/* CONTACT BAR */}
          <div
            className="mt-10 flex flex-col md:flex-row overflow-hidden rounded-md "
            data-aos="fade-up"
            data-aos-delay="400"
          >

            {/* CTA */}
            <div className="
              bg-[#1AA5E0]
              text-white
              px-6
              font-medium
              relative
              flex items-center
            ">
              General Inquiries

              {/* arrow */}
              <span className="
                absolute
                -right-3
                top-1/2
                -translate-y-1/2
                w-0 h-0
                border-y-12
                border-y-transparent
                border-l-12
                border-l-[#1AA5E0]
              "></span>
            </div>


            {/* EMAIL */}
            <div className="
              flex items-center gap-3
              px-6 py-4
              bg-white
              text-gray-700
            ">
              <Mail size={18} className="text-[#1AA5E0]" />
              ask@noxboxltd.com
            </div>


            {/* PHONE */}
            <div className="
              flex items-center gap-3
              px-6 py-4
              bg-white
              border-l
              text-gray-700
            ">
              <Phone size={18} className="text-[#1AA5E0]" />
              +44(0)1795 859430
            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div
          className="lg:col-span-6"
          data-aos="fade-left"
        >

          <div className="rounded-md overflow-hidden shadow-sm">

            <img
              src={`/noxbox/assets/world_network.png`}
              alt="contact"
              width={700}
              height={500}
              className="w-full h-95 object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  )
}