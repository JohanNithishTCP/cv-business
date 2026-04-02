import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const stories = [
  {
    name: "Alex's Story",
    image: "/dm-orthotics/home/customer-1.png",
  },
  {
    name: "Charlotte's Story",
    image: "/dm-orthotics/home/customer-2.png",
  },
  {
    name: "Zach And River's Story",
    image: "/dm-orthotics/home/customer-3.png",
  }
];

export default function CustomerStories() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Decorative Pattern (Subtle wave/lines from reference) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img src="/dm-orthotics/home/bg.png" alt="Customer Background" className="object-cover w-full h-full opacity-20" />
      </div>

      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Title */}
        <div className="text-center mb-16 space-y-2" data-aos="fade-up">
          <span className="text-white/80 text-[13px] uppercase font-black tracking-[0.4em] block">Customer Stories</span>
          <h2 className="text-white!">
            Stories From Our Customers
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className="group overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              {/* Story Image Area */}
              <div className="aspect-4/3 relative overflow-hidden group bg-muted/20 rounded-2xl">
                <img
                  src={story.image}
                  alt={story.name}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 w-full h-full rounded-2xl"
                />
                {/* Visual gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              </div>

              {/* Story Footer Content */}
              <div className="p-2 py-4 flex justify-between items-center group-hover:bg-primary/5 transition-colors">
                <span className="text-white! text-[18px]! md:text-base tracking-tight">{story.name}</span>
                <div className="w-13 h-13 bg-white rounded-full flex items-center justify-center text-red scale-90 group-hover:scale-100 group-hover:bg-gray transition-all">
                  <ArrowUpRight size={20} strokeWidth={3} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center" data-aos="fade-up">
          <button className="bg-white hover:bg-dark text-primary hover:text-white px-12 py-4 text-xs font-black uppercase tracking-widest shadow-xl shadow-primary-dark/40 active:translate-y-1 transition-all">
            View All Stories
          </button>
        </div>
      </div>
    </section>
  );
}
