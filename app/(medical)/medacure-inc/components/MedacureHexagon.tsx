"use client";

export default function MedacureHexagon({ src, className }: any) {
  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        clipPath:
          "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
      }}
    >
      {src ? (
        <img
          src={src}
          alt="hex"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-purple-800" />
      )}
    </div>
  );
}