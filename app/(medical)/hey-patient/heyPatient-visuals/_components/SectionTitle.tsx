
"use client";

import React from "react";

interface HeaderSectionProps {
  label?: string;
  title: string;
  highlight?: string;
  className?: string;
}

const SectionTitle: React.FC<HeaderSectionProps> = ({
  label,
  title,
  highlight,
  className = "",
}) => {
  return (
    <div className={`w-full text-center space-y-3 ${className}`}>
      {/* Small Label */}
      {label && (
        <div className="flex justify-center items-center gap-2" data-aos="fade-down" data-aos-delay="200">
          <span className={`text-sm text-gray-600 ${className}`}>{label}</span>
          <span className="w-8 h-1 bg-secondary rounded-full"></span>
        </div>)}

      {/* Title */}
      <h2 className={`max-w-[600px] mx-auto text-2xl md:text-3xl leading-snug text-primary font-bold ${className}`} data-aos="fade-up" >
        {title}
      </h2>
      {highlight && (
        <p className="max-w-[700px] m-0 mx-auto" data-aos="fade-up" data-aos-delay="100">{highlight}</p>
      )}
    </div>
  );
};

export default SectionTitle;
