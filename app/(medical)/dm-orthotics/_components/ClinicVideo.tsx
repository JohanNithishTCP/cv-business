"use client"

export default function ClinicVideo() {
  return (
    <section className="py-24 bg-[#F5F5F7] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">

          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8" data-aos="fade-right">
            <h2 className="text-dark leading-[1.2] text-3xl md:text-4xl lg:text-[28px]">
              Visit One Of Our UK Clinics For An Initial Assessment
            </h2>

            <div className="space-y-6 text-muted/80 text-sm md:text-base leading-relaxed text-left md:text-justify">
              <p>
                Our Clinical Consultation Process Starts With One Of Our Trained Clinical Specialists
                Assessing The Patient To See If A DMO® Product Could Assist In The Management Of
                Symptoms Associated With Their Condition. If A DMO® Is Deemed Suitable And The
                Patient Wishes To Go Ahead, The Clinician Will Measure And Prescribe An Orthoses
                And Send The Information To The Administration Team In Redruth, Cornwall.
              </p>
              <p>
                The Cost Of Booking An Assessment Online Is Currently £75 But This Will Be
                Deducted From The Cost Of Any Further Consultation Fees Should The Patient Wish
                To Proceed.
              </p>
            </div>

            <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-4 text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 active:translate-y-1 transition-all rounded-sm" data-aos="fade-up" data-aos-delay="300">
              Book Assessment
            </button>
          </div>

          {/* Right: Video Placeholder Area */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="w-full relative mx-auto shadow-2xl rounded-2xl md:rounded-[32px] overflow-hidden bg-[#F0F0F0]">
              <div className="aspect-video">
                <video src="https://cdn.clinicalvisuals.com/medical/DM-Orthotics/short_clips/orthotics_2.webm" autoPlay loop muted className="w-full h-full object-cover"></video>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
