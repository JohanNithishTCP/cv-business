import Link from "next/link";

export default function News() {
  const newsItems = [
    {
      title: "Kimal Celebrates Living Wage Accreditation",
      date: "August 12, 2025",
      excerpt: "We are delighted to announce that Kimal has achieved a critical milestone and is now an accredited Living Wage Employer!...",
    },
    {
      title: "Closure of Kimal's Uxbridge Site",
      date: "December 31, 2024",
      excerpt: "After 39 years, we've made the decision to close our Uxbridge site to support the continued growth of the organisation. Stock holding at Uxbridge has now been...",
    },
    {
      title: "Launch of IC-Flow Imaging System",
      date: "August 19, 2024",
      excerpt: "We're pleased to announce this week the launch of Diagnostic Green's IC-Flow Imaging System, which Kimal is the exclusive distribution partner for in the UK...",
    },
    {
      title: "Launching the Year of the Penguin",
      date: "September 27, 2023",
      excerpt: "Supporting our local communities is extremely important to Kimal, so we're delighted to announce that we'll be supporting the Great Waddle of...",
    },
  ];

  return (
    <section className="pt-16 lg:pt-20 pb-16 lg:pb-28 bg-white relative overflow-hidden">
      {/* Absolute Header Background Strip */}
      <div className="absolute top-0 left-0 w-full h-[400px] lg:h-[450px] bg-[#407EC9] bg-[url('/kimal/images/bg.jpg')] bg-cover bg-center z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto mb-12 lg:mb-16 text-white" data-aos="fade-up">
          <h2 className="text-xl lg:text-3xl leading-[1.2] font-bold mb-4 tracking-tight text-white!">News and Events</h2>
          <p className="text-base lg:text-lg leading-relaxed">
            Stay updated with the latest news, innovations, and upcoming events, bringing you insights and developments from across our organisation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {newsItems.map((item, i) => (
            <div 
              key={i} 
              data-aos="fade-up" 
              data-aos-delay={i * 100}
              className="bg-white rounded-3xl p-8 flex flex-col h-full shadow-2xl transition-transform hover:-translate-y-1"
            >
              <h4 className="font-bold text-[#407EC9]! text-base lg:text-xl mb-2 leading-snug">{item.title}</h4>
              <p className="text-sm md:text-base font-semibold mb-5 pb-5 border-b border-gray-200 tracking-wide">{item.date}</p>
              <p className=" text-base lg:text-[17px] leading-relaxed mb-6 flex-grow text-justify">{item.excerpt}</p>
              <Link href="#" className="font-bold text-[#407EC9] text-sm md:text-base hover:underline hover:text-[#356ab0] transition-colors self-start mt-auto">
                Read More...
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Background Pattern Simulation */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
    </section>
  );
}
