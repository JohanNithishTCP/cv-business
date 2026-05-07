"use client";

const blogs = [
  {
    title: "Advancing Cervical Screening and Diagnostics",
    date: "January 19, 2026",
    desc: "The New Standard As cancer screenings are advancing, guidelines evolve and...",
    img: "/lutech-medical/assets/lutech-blog1.jpg",
  },
  {
    title: "Reducing the Anxiety of Colposcopy Exams",
    date: "March 27, 2026",
    desc: "Understanding Exam Anxiety Patients often feel anxious before undergoing...",
    img: "/lutech-medical/assets/lutech-blog2.jpg",
  },
  {
    title: "HRT—Moving Beyond the Mirror",
    date: "December 04, 2025",
    desc: "How Digital Imaging Creates Better Outcomes, Better Education, and Better Care For...",
    img: "/lutech-medical/assets/lutech-blog3.jpg",
  },
  {
    title: "Accomplishing Incredible Milestones",
    date: "November 26, 2025",
    desc: "Advancing our Mission to Promote Global Health and Early Detection Lutech...",
    img: "/lutech-medical/assets/lutech-blog4.jpg",
  },
];

export default function LutechBlog() {
  return (
    <section className="bg-[#cfe3ea] py-20">
      <div className="max-w-380 mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3"
          >
            Lutech Blog
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-base text-gray-600 max-w-2xl mx-auto font-rubik"
          >
            Our blog explores the evolving landscape of women's health and digital
            colposcopy, highlighting advancements in early detection, patient care,
            and medical technology.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="font-rubik bg-white rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] p-3 hover:shadow-md transition flex flex-col"
            >

              {/* IMAGE */}
              <div className="w-full h-44 sm:h-56 lg:h-64 rounded-xl overflow-hidden mb-3 flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="px-1 flex flex-col flex-1">

                {/* TITLE */}
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>

                {/* DATE */}
                <p className="text-sm text-gray-500 mb-2">
                  {item.date}
                </p>

                {/* DESC */}
                <p className="text-base text-gray-600 leading-relaxed mb-3">
                  {item.desc}
                </p>

                {/* CTA */}
                <span className="text-[#0f6c86] text-base font-medium cursor-pointer underline hover:text-[#031e28] transition mt-auto">
                  Read More &gt;&gt;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}