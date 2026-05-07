import { ArrowRight } from "lucide-react";

// components/Software.tsx
export default function Software() {
  const data = [
    {
      title: "VectraplexECG",
      desc: "VectraplexECG software comes with our innovative CEB® technology.The Cardiac Electrical Biomarker, CEB®, is our smartest ECG technology! It can detect ECG changes suggestive of a heart attack. ",
      img: "/vectracor/CEB.png",
    },
    {
      title: "Office Medic",
      desc: "Office Medic software improves workflow by having one platform for ECG and Spirometry testing. Office Medic allows you to acquire, store and review diagnostic data using an off-the-shelf laptop, desktop or tablet.",
      img: "/vectracor/Office-Medic-2.png",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-red-500 px-4 py-1 rounded-full  text-[18px] mb-4 font-medium">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Software
          </div>

          <h2 className="text-3xl font-semibold text-gray-900">
            Smart Software for Better Diagnostics
          </h2>

          <p className="text-gray-600 max-w-[1150px] mx-auto mt-3">
            Advanced ECG and spirometry software designed to streamline workflow, improve diagnostic accuracy, and deliver secure point-of-care access across laptops, desktops, and tablets.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">

          {data.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 "
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >

              {/* Image Box */}
              <div className=" rounded-xl p-2 relative  shadow-md border border-[#e9e9e9] flex items-center justify-center">

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-90 object-contain"
                />

                {/* Arrow */}
                <div className="absolute top-4 cursor-pointer right-4 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md">
                 <ArrowRight />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-center mt-4">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-600 text-md text-center mt-2 max-w-[600px] mx-auto">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}