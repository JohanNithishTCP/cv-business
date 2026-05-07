export default function TeamSection() {
  const teamMembers = [
    { name: "Sasha Fichera", role: "Managing Director", img: "/future-med/home/team-1.svg" },
    { name: "Daniel Hinch", role: "Sales Director", img: "/future-med/home/team-1.svg" },
    { name: "Andreas Roeske - WA", role: "WA", img: "/future-med/home/team-2.svg" },
  ];

  return (
    <section className="w-full py-20 bg-primary relative overflow-hidden">
      {/* Decorative background pattern (Optional placeholder) */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/future-med/home/bg.png')] bg-no-repeat bg-cover opacity-30"></div>

      <div className="container relative z-10">
        <h2 className="heading text-white text-center mb-16" data-aos="fade-up">
          Our Dedicated Team at Future Meds
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-[#f0f0f0] rounded-xl overflow-hidden flex flex-col h-full items-center text-center shadow-lg" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="w-full bg-[#fcfcfc] py-6 border-b border-gray-100">
                <h3 className="font-bold text-black text-xl">{member.name}</h3>
                <p className="text-gray-500 para">{member.role}</p>
              </div>
              <div className="w-full grow flex items-center justify-center py-12 px-4 min-h-[200px]">
                {/* Image Placeholder for team member */}
                <div className="w-50 rounded-xl mask mask-hexagon flex items-center justify-center text-white/50 text-xs">
                  <img src={`${member.img}`} alt={member.name} className="w-50 object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <button className="bg-white text-primary hover:bg-gray-100 font-semibold px-12 py-2.5 rounded transition-colors text-[17px] shadow-md">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
