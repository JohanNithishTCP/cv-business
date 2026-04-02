import { CheckIcon } from "./Icons";

export default function InfoBlocks() {
  return (
    <section className="w-full py-20 bg-white space-y-24">
      {/* Block 1 */}
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 text-left" data-aos="fade-right">
            <h2 className="heading text-black mb-2">We Source Innovative Manufacturers</h2>
            <p className="para text-gray-600 leading-relaxed mb-4 text-justify">
              FutureMeds partners with innovative manufacturers dedicated to enhancing
              healthcare through advanced technology and strict quality standards. By
              collaborating with progressive pharmaceutical, biotech, and medical device
              companies, we provide reliable and cost-effective solutions that adapt to market
              demands. Our focus on transparency and continuous improvement builds lasting
              relationships, empowering healthcare providers and patients with trustworthy
              products.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 para text-gray-700">
                <CheckIcon className="w-5 h-5 text-primary shrink-0" />
                <span>Partner with innovative healthcare manufacturers.</span>
              </li>
              <li className="flex items-center gap-3 para text-gray-700">
                <CheckIcon className="w-5 h-5 text-primary shrink-0" />
                <span>Committed to quality and compliance.</span>
              </li>
              <li className="flex items-center gap-3 para text-gray-700">
                <CheckIcon className="w-5 h-5 text-primary shrink-0" />
                <span>Deliver reliable medical solutions.</span>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="w-full aspect-4/3 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <video
                src="https://cdn.clinicalvisuals.com/medical/futuremeds/short_clips/ecostand_clips_01.webm"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </div>

      {/* Block 2 */}
      <div className="container">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 text-left" data-aos="fade-left">
            <h2 className="heading text-black mb-2">We Deliver Quality Medical Supplies</h2>
            <p className="para text-gray-600 leading-relaxed mb-4 text-justify">
              FutureMeds delivers quality medical supplies designed to meet the highest
              standards of safety, reliability, and performance. We work closely with trusted
              manufacturers and healthcare providers to ensure every product supports effective
              patient care and operational efficiency. From sourcing to distribution, our
              commitment to excellence ensures dependable solutions that healthcare
              professionals can rely on every day.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 para text-gray-700">
                <CheckIcon className="w-5 h-5 text-primary shrink-0" />
                <span>Reliable supplies</span>
              </li>
              <li className="flex items-center gap-3 para text-gray-700">
                <CheckIcon className="w-5 h-5 text-primary shrink-0" />
                <span>Trusted quality</span>
              </li>
              <li className="flex items-center gap-3 para text-gray-700">
                <CheckIcon className="w-5 h-5 text-primary shrink-0" />
                <span>Delivered with care</span>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="w-full aspect-4/3 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <video
                src="https://cdn.clinicalvisuals.com/medical/futuremeds/short_clips/ecostand_clips_03.webm"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
