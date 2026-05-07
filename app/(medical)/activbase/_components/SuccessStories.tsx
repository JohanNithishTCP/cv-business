import React from "react";

const stories = [
  { name: "Binu David", image: "/activbase/home/stories-1.png" },
  { name: "Anoop Krishnan", image: "/activbase/home/stories-2.png" },
  { name: "Barathi", image: "/activbase/home/stories-3.png" },
  { name: "Sreekuttan M S", image: "/activbase/home/stories-4.png" },
];

export default function SuccessStories() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto">
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span data-aos="fade-up" className="text-gray-800 font-bold text-xs tracking-wider uppercase mb-3 block">
            Our Success Stories
          </span>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-[36px] font-bold mb-4 text-gray-900">
            Success Stories That Inspire
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-[16px] text-gray-600 leading-relaxed">
            Watch real patient recovery journeys and discover how expert physiotherapy and personalized care have transformed lives.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, idx) => (
            <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 150} className="border border-gray-200 rounded-t-full rounded-b-xl p-6 flex flex-col items-center hover:shadow-xl transition-shadow bg-white">
              {/* Image Circle  */}
              <div className="w-full aspect-square rounded-full overflow-hidden mb-6 relative bg-gray-100">
                <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
              </div>

              <h4 className="font-bold text-[#141549] hover:text-primary transition-colors cursor-pointer mb-5 text-[16px]">{story.name}</h4>

              {/* Social Icons */}
              <div className="flex gap-2 justify-center">
                <a href="#" className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary bg-primary/5 hover:bg-primary hover:text-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary bg-primary/5 hover:bg-primary hover:text-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center text-primary bg-primary/5 hover:bg-primary hover:text-white transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
