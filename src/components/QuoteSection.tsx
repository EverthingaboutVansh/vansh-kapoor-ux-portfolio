
import React from "react";

export default function QuoteSection() {
  return (
    <section
      className="w-full py-10 flex justify-center items-center"
      style={{
        background:
          "linear-gradient(90deg, #E60E77 0%, #E60E77 12%, #9946AD 31%, #9946AD 55%, #462DAC 76%, #462DAC 86%, #3C1BC2 100%)",
      }}
    >
      <blockquote className="text-center max-w-2xl mx-auto px-6 text-white text-lg md:text-2xl font-semibold font-montserrat drop-shadow-md animate-fade-in">
        “If you can dream it, you can do it.<span className="font-normal"> - Enzo Ferrari.</span>
        ”
      </blockquote>
    </section>
  );
}
