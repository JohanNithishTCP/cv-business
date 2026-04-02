export default function Affiliations() {
  const placeholders = ["paticipate-1.png", "paticipate-2.png", "paticipate-3.png", "paticipate-4.png"];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container text-center">
        <h2 className="heading text-black mb-16" data-aos="fade-up">
          We Participate in
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {placeholders.map((src, idx) => (
            <div key={idx} className="w-36 p-3 h-full bg-[#fafafa] flex items-center justify-center rounded border border-gray-100" data-aos="fade-up" data-aos-delay={idx * 100}>
              <img src={`/future-med/home/${src}`} className="w-24 h-24 object-cover" alt="Affiliation" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
