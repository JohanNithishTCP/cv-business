"use client"

import { ArrowRight, ChevronRight, Sparkles } from "lucide-react"

export default function StayUpdated() {

  return (
    <section className="px-6 lg:px-16 py-20 bg-[#F5F6F7]">

      <div
        className="
        relative
        max-w-325
        mx-auto
        bg-[#0C3B5D]
        rounded-2xl
        overflow-hidden
        px-8
        py-20
        text-center
        text-white
        "
      >

        {/* Decorative circles */}
        <div className="
        absolute
        -top-32
        left-20
        w-[320px]
        h-80
        bg-white/5
        rounded-full
        " />

        <div className="
        absolute
        -bottom-25
        right-20
        w-65
        h-65
        bg-white/5
        rounded-full
        " />

        {/* Content */}
        <div className="relative z-10">

          {/* Title */}
          <div
            className="flex items-center justify-center gap-2 mb-4"
            data-aos="fade-up"
          >
            <Sparkles className="text-[#1AA5E0]" size={20}/>
            <h2 className="text-3xl font-semibold">
              Stay Up To Date
            </h2>
          </div>

          {/* Subtitle */}
          <p
            className="text-[#CFE7F3] mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Sign up to receive Linde share price, news and regulatory filing alerts.
          </p>


          {/* CTA BUTTON */}
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >

            <button
              className="
              relative
              bg-[#1AA5E0]
              text-white
              px-8
              py-4.5
              font-medium
              flex
              items-center
              cursor-pointer
              "
            >

              Register for Updates

              <span className="
              absolute
              -right-6
              w-12
              h-12
              bg-[#1AA5E0]
              rounded-full
              flex
              items-center
              justify-center
              shadow-lg
              border
              border-black
              ">
                <ChevronRight className="" size={22} />
              </span>

            </button>

          </div>

        </div>

      </div>

    </section>
  )
}