
import React from "react";
export default function QuoteSection() {
  return (
    <section
      className="w-full py-10 flex justify-center items-center bg-light dark:bg-[#23234a] transition-colors"
    >
      <blockquote className="text-center max-w-2xl mx-auto px-6 text-lg md:text-2xl font-semibold font-montserrat drop-shadow-md animate-fade-in">
        <span
          className="bg-gradient-to-r from-[#E60E77] via-[#9946AD] via-60% to-[#3C1BC2] bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-yellow-200 dark:via-yellow-300 dark:to-yellow-100"
        >
          “If you can dream it, you can do it.
          <span className="font-normal"> - Enzo Ferrari.</span>
          ”
        </span>
      </blockquote>
    </section>
  );
}
