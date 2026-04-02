const cards = [
  {
    title: "LungFit® Technology",
    desc: "LungFit products use patented Ionizer™ technology that generates unlimited, on-demand nitric oxide using room air. No cylinders and no hassle.",
    cta: "View Our Products",
    image: "https://plus.unsplash.com/premium_photo-1678310819897-edfe9b9def64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVkaWNhbCUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Revolutionizing Nitric Oxide Therapy",
    desc: "Unlocking access to more treatment options from hospital to home.",
    cta: "See Active Pipeline",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNhbCUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Latest News",
    desc: "Beyond Air, Inc. Announces Resignation of Steve Lisi, CEO, and Appointment of Robert Goodman, Chief Commercial Officer, as CEO",
    cta: "Get the Latest",
    image: "https://images.unsplash.com/photo-1578496480240-32d3e0c04525?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVkaWNhbCUyMGRldmljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function BeyondChooseUs() {

  return (
    <section className="w-full bg-[#159ec9] py-20 px-6">
      <div className="max-w-380 mx-auto text-center">
        
        {/* Small Heading */}
        <p
          className="text-white/80 text-2xl mb-3"
          data-aos="fade-up"
        >
          Why Choose us
        </p>

        {/* Main Heading */}
        <h2
          className="text-white text-2xl md:text-3xl font-medium mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Your Trusted Partner For Industrial Manufacturing Excellence
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md group py-8"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Background Image */}
              <img
                src={card.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay (important for readability) */}
              <div className="absolute inset-0  bg-[#898888c7] group-hover:bg-[#989898c3] transition duration-300" />

              {/* Content */}
              <div className="relative z-10 p-6 text-left h-full flex flex-col justify-between">
                
                <div>
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {card.title}
                  </h3>

                  <p className="text-white text-base leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6">
                  <a className="text-white text-base font-medium hover:underline cursor-pointer">
                    {card.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}