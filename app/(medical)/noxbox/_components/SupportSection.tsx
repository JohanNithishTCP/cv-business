import { ShieldCheck, GaugeCircle, HandCoins, Sparkles } from "lucide-react";
import Image from "next/image";

export default function SupportSection() {
  return (
    <section className="w-full bg-[#F5F6F7] py-24 px-6 lg:px-16">

      <div className="max-w-300 mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-200 mx-auto">

          <div
            className="flex items-center justify-center gap-3 mb-4"
            data-aos="fade-up"
          >
            <img
              src={`/noxbox/assets/gemini_logo.png`}
              alt="gemini logo"
              width={34}
              height={34}
            />
            <h2 className="text-3xl font-semibold text-[#0E3B66]">
              Technical Support
            </h2>
          </div>

          <h3
            className="text-lg font-semibold text-gray-800"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Support & Annual Preventative Maintenance Benefits
          </h3>

          <p
            className="mt-4 text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The NOxBOX® system is distributed and supported globally through an
            authorized distributor network. The NOxBOX Ltd range of products
            must be subjected to regular service inspection and maintenance
            routines as defined by NOxBOX Ltd. A faulty or defective system
            should not be used.
          </p>

        </div>


        {/* CARDS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          <SupportCard
            icon={<img src={`/noxbox/assets/improved_safety.png`} alt="Improved Safety" width={38} height={38} />}
            title="Improved Safety"
            text="Regular maintenance and routine inspections ensure medical devices operate safely by identifying potential issues early, reducing the risk of malfunction, and protecting both patients and medical staff."
            delay={300}
          />

          <SupportCard
            icon={<img src={`/noxbox/assets/efficient_running.png`} alt="Efficient Running" width={38} height={38} />}
            title="Efficient Running"
            text="Routine maintenance improves operational efficiency by allowing hospitals and surgical facilities to proactively schedule equipment servicing and plan for downtime with minimal disruption."
            delay={400}
          />

          <SupportCard
            icon={<img src={`/noxbox/assets/cost_savings.png`} alt="Cost Savings" width={38} height={38} />}
            title="Cost Savings"
            text="Preventive maintenance reduces costs by avoiding expensive emergency repairs and replacements, keeps equipment operating at peak efficiency, extends its lifespan, and improves long-term return on investment."
            delay={500}
          />

        </div>

      </div>

    </section>
  );
}


function SupportCard({
  icon,
  title,
  text,
  delay
}: {
  icon: React.ReactNode
  title: string
  text: string
  delay: number
}) {
  return (

    <div
      className="relative bg-white border border-gray-200 rounded-lg pt-16 pb-8 px-8 text-center shadow-sm"
      data-aos="fade-up"
      data-aos-delay={delay}
    >

      {/* Floating Icon */}
      <div className="
        absolute
        -top-10
        left-1/2
        -translate-x-1/2
        w-20
        h-20
        bg-[#0E3B66]
        rounded-full
        flex
        items-center
        justify-center
        text-white
        shadow-lg
      ">
        {icon}
      </div>

      <h4 className="text-xl font-semibold text-[#0E3B66] mb-4">
        {title}
      </h4>

      <p className="text-gray-600 text-base leading-relaxed">
        {text}
      </p>

    </div>

  )
}