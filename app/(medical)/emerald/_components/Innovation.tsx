"use client";

import React from "react";
import Button from "./Button";
import { ShoppingCart, Users, Truck, Headphones, ShieldCheck } from "lucide-react";

const innovationCards = [
  {
    title: "Ecommerce",
    description: "Not only do we dropship, we offer quick ship times to ensure that your orders reach your customers promptly. If you're interested in a partnership, please click the 'Message Us' button below to explore partnership opportunities.",
    icon: <ShoppingCart size={24} className="text-[#059347]" />,
    buttonText: "View Products",
    href: "#ecommerce"
  },
  {
    title: "Service",
    description: "Emerald is more than a manufacturer we value our partnerships to a degree unmatched in this industry. When it comes to your business's success, its milestones, and its logistical issues, we are here, and we are here for all of it.",
    icon: <Users size={24} className="text-[#059347]" />,
    buttonText: "Learn More",
    href: "#service"
  },
  {
    title: "Strong Distribution Capabilities",
    description: "We have the infrastructure, resources, and processes that allow us to offer a variety of DME supply solutions tailored to meet the unique demands of your business. Whether you require bulk orders by the container or customized shipments.",
    icon: <Truck size={24} className="text-[#059347]" />,
    buttonText: "View Products",
    href: "#distribution"
  },
  {
    title: "Customer Care",
    description: "At Emerald Supply, we stand behind our products. Each one thoughtfully designed with the end user in mind. We will stand alongside you and your business post purchase and assist you with whatever we can to ensure your customers remain satisfied.",
    icon: <Headphones size={24} className="text-[#059347]" />,
    buttonText: "Learn More",
    href: "#care"
  },
  {
    title: "Quality Assurance",
    description: "We take pride in our unwavering commitment to delivering the highest standards of quality in our products. Our rigorous quality assurance processes are embedded at every stage of production, ensuring that our equipment not only meets but exceeds industry benchmarks.",
    icon: <ShieldCheck size={24} className="text-[#059347]" />,
    buttonText: "Learn More",
    href: "#quality"
  }
];

const Innovation = () => {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="w-[95%] mx-auto bg-[#014D65] lg:rounded-[3rem] rounded-[2rem] p-4 md:p-16 lg:p-20 relative overflow-hidden">
        {/* Hexagonal Pattern Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('/emerald/images/bg-frame.jpg')] bg-center bg-cover opacity-40"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Content Cell */}
          <div data-aos="fade-right" className="space-y-4 pr-4">
            <span className="text-white font-semibold lg:text-[17px] text-[16px] tracking-wider">The Ever-evolving DME Market</span>
            <h2 className="text-[28px] lg:text-[32px] font-semibold text-white mt-1">
              Innovation and Growth
            </h2>
            <p className="text-white lg:text-[17px] text-[16px] leading-relaxed text-justify">
              In the ever-evolving landscape of the durable medical equipment market, innovation and growth are constant driving forces. At Emerald Supply, we are poised to capitalize on these opportunities. With an unwavering commitment to staying at the forefront of industry advancements, we are continuously exploring ways to update our equipment and provide cutting-edge solutions to meet the evolving needs of healthcare providers and patients.
            </p>
          </div>

          {/* Feature Cards */}
          {innovationCards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-[2rem] p-8 flex flex-col justify-between shadow-xl transition-all duration-500"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full shadow-[1.95px_1.95px_2.6px_0px_#00000026] flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <h3 className="text-[22px] font-bold text-[#014D65] font-albert leading-tight">{card.title}</h3>
                </div>
                <p className="text-[#333333] lg:text-[17px] text-[16px] leading-relaxed line-clamp-4 text-justify">
                  {card.description}
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#dddddd] my-6"></div>

              <div className="">
                <Button
                  href={card.href}
                  variant="primary"
                  size="md"
                  rounded="full"
                  className="group !bg-[#014D65] !px-8 hover:!bg-[#013b4d]"
                  hasArrow={true}
                >
                  {card.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovation;
