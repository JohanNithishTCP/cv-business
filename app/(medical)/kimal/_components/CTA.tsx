import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function CTA() {
  return (
    <section className="py-28 lg:py-36 bg-[url('/kimal/images/healthcare.jpg')] bg-cover bg-center relative z-0 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Heavy Blue / Subdued Mask Background per Screenshot */}
      <div className="absolute inset-0 bg-[#407EC9C4]/80 z-[-1]"></div>

      {/* Background Graphic Simulation */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-cover bg-center z-[-1]"></div>

      <div className="relative z-50 max-w-6xl mx-auto w-full" data-aos="fade-up">
        <h2 className="text-xl lg:text-4xl leading-[1.2] font-bold! text-white! mb-10 tracking-wider!">
          Passionate about delivering healthcare innovation
        </h2>
        <div className="flex justify-center">
          <Button text="Get in Touch" variant="white" />
        </div>
      </div>
    </section>
  );
}
