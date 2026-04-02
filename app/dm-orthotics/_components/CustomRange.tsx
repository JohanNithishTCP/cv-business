"use client"
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

interface TabContent {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  footer?: string;
  subHeader?: string;
  bottomDescription?: string;
}

export default function CustomRange() {
  const [activeTab, setActiveTab] = useState("DMO® Custom");

  const tabs = ["DMO® Custom", "DMO® Essentials", "DMO® Sensory"];

  const tabContent: Record<string, TabContent> = {
    "DMO® Custom": {
      title: "Since 2005 Our DMO® Custom Product Range Has Provided Patients Worldwide With Made-To-Measure And Bespoke Dynamic Movement Orthoses® (DMO®).",
      paragraphs: [
        "Dynamic Movement Orthoses® Use A Specially Designed Compression Fabric Which Is Soft, Flexible And Strong.",
        "Our Orthoses Utilize Strategically Placed Powernet Reinforcement Panels To Enhance Postural Alignment, This Biomechanical Adjustment Train Muscles For Better Tone, Strength, And Performance."
      ]
    },
    "DMO® Essentials": {
      title: "",
      paragraphs: [
        "Our DMO® Essentials range was designed to offer similar benefits to our DMO® Custom range, but in a variety of pre-determined sizes with pre-set panels and reinforcements. This product range consists of both adult and child dynamic movement orthoses and requires only one measurement to be taken."
      ],
      bullets: [
        "Cerebral Palsy",
        "Multiple Sclerosis",
        "Developmental Delay",
        "Stroke",
        "Ehlers-Danlos Syndromes"
      ],
    },
    "DMO® Sensory": {
      title: "",
      paragraphs: [
        "The DMO® Sensory made-to-measure range, is designed to improve sensory proprioceptive feedback and core stability which is facilitated by the application of deep pressure. This is exerted through the skin by the compression force applied by the fabric. This product range is available as a suit, vest or leggings."
      ],
      subHeader: "Suitable For:",
      bottomDescription: "Adults and children requiring compression to improve body awareness and reduce overactivity, this can provide a calming effect and improve core stability and midline orientation."
    }
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="py-24 bg-white overflow-hidden min-h-[700px]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-10 md:mb-16" data-aos="fade-up">
          <h2 className="text-dark leading-[1.2] text-3xl md:text-4xl lg:text-[28px]">
            Discover the DMO® Product Range
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-10 order-2 lg:order-1" data-aos="fade-right">

            {/* Sub-navigation Tabs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 md:px-8 py-2.5 md:py-3 text-[10px] md:text-xs font-medium uppercase tracking-widest rounded-full transition-all border-2 ${activeTab === tab
                    ? 'bg-white border-primary text-primary shadow-lg shadow-primary/20 scale-105'
                    : 'bg-white border-border text-dark hover:border-primary/40'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="space-y-6">
              <h3 className="text-base md:text-lg font-semibold text-dark/90 leading-snug text-left md:text-justify max-w-xl mx-auto lg:mx-0">
                {currentContent.title}
              </h3>

              <div className="space-y-4 text-muted/80 text-sm md:text-base leading-relaxed text-left md:text-justify max-w-xl mx-auto lg:mx-0">
                {currentContent.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Essentials Bullets */}
              {activeTab === "DMO® Essentials" && currentContent.bullets && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-2">
                  {currentContent.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <Check size={12} className="text-white" strokeWidth={4} />
                      </div>
                      <span className="text-[14px] md:text-[16px] text-dark/80 font-medium tracking-tight">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Essentials Footer */}
              {activeTab === "DMO® Essentials" && currentContent.footer && (
                <p className="text-sm font-medium text-dark/70 pt-4 italic">
                  {currentContent.footer}
                </p>
              )}

              {/* Sensory SubHeader & Description */}
              {activeTab === "DMO® Sensory" && (
                <div className="space-y-4 pt-2">
                  <h4 className="text-base font-bold text-dark">{currentContent.subHeader}</h4>
                  <p className="text-muted/80 text-sm md:text-base leading-relaxed text-left md:text-justify max-w-xl mx-auto lg:mx-0">
                    {currentContent.bottomDescription}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Video Placeholder Area */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2" data-aos="fade-left">
            <div className="w-full relative mx-auto shadow-2xl rounded-2xl md:rounded-[32px] overflow-hidden bg-[#F0F0F0]">
              <div className="aspect-video">
                <video src="https://cdn.clinicalvisuals.com/medical/DM-Orthotics/short_clips/orthotics_1.webm" autoPlay loop muted className="w-full h-full object-cover"></video>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
