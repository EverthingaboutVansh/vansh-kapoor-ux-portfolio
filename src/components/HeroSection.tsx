import ScrollCue from "./ScrollCue";
import { ArrowRight, ArrowDown, ArrowUp, ArrowLeft, Linkedin } from "lucide-react";
const socialLinks = [{
  href: "https://github.com/EverthingaboutVansh",
  label: "GitHub",
  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44
        5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65
        5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.73c0 5.42 3.3 6.61 6.44
        7A3.37 3.37 0 0 0 9 21.13V23" />
      </svg>
}, {
  href: "https://www.linkedin.com/in/vansh-kapoor-208491157/",
  label: "LinkedIn",
  icon: <Linkedin className="w-6 h-6" strokeWidth={1.8} />
}, {
  href: "mailto:kapoorvansh070@gmail.com",
  label: "Email",
  icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="4" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
}];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-start py-14 min-h-[85vh] w-full overflow-hidden bg-background dark:bg-primary transition-colors"
    >
      {/* Modern geometric + blurred background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Diagonal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fca3111c] via-[#e5e5e5] to-white" />
        {/* Top left blurred circle */}
        <div className="absolute left-[-14vw] top-[-6vw] w-[28vw] h-[28vw] rounded-full bg-[#FCA311] opacity-20 blur-3xl" />
        {/* Bottom right blurred accent */}
        <div className="absolute right-[-8vw] bottom-[-8vw] w-[22vw] h-[22vw] rounded-full bg-[#14213D] opacity-10 blur-2xl" />
        {/* Accent geometric shape */}
        <svg className="absolute top-[20%] right-0 translate-x-1/2 opacity-5 z-0" width="220" height="220" viewBox="0 0 220 220" fill="none">
          <rect x="40" y="40" width="140" height="140" rx="40" fill="#FCA311" />
        </svg>
        {/* Accent lines */}
        <svg className="absolute bottom-0 left-[18vw] opacity-10 z-0 hidden md:block" width="160" height="44" viewBox="0 0 160 44" fill="none">
          <rect y="14" width="160" height="16" rx="8" fill="#14213D" />
        </svg>
      </div>
      {/* End background */}

      {/* Profile Image at the Top */}
      <div className="flex flex-col items-center mb-5 mt-2 z-20">
        <div className="relative group">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-accent/80 via-[#fff7d1] to-transparent blur-2xl opacity-90 group-hover:opacity-100 transition-all duration-300" />
          <div className="rounded-full overflow-hidden border-4 border-accent shadow-xl w-36 h-36 md:w-48 md:h-48 flex items-center justify-center bg-graybg relative z-10">
            <img src="https://i.postimg.cc/1tKWKdyF/Portfolio-image.jpg" alt="Vansh Kapoor Profile" className="object-cover w-full h-full" draggable={false} />
          </div>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-accent text-black rounded-full px-3 py-1 font-bold text-[11px] md:text-xs shadow-lg translate-y-1/2 whitespace-nowrap min-w-max z-20">
            1.5+ Years Experience
          </span>
        </div>
      </div>

      {/* Main Content Below Image */}
      <div className="flex flex-col gap-3 md:gap-5 max-w-xl items-center animate-fade-in z-10 mb-20">
        <span className="uppercase tracking-[.22em] text-accent font-semibold text-xs md:text-sm">
          Hello! I&apos;m
        </span>
        <h1 className="text-3xl md:text-5xl font-bold font-poppins text-primary mb-1 leading-tight drop-shadow-md text-center">
          Vansh Kapoor
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-black/85 font-poppins text-center">
          Junior <span className="text-accent">UX Designer</span> & Analyst
        </h2>
        <p className="text-sm md:text-lg text-muted max-w-lg font-inter mt-1 text-center">
          Transforming ideas into seamless digital experiences through
          <span className="font-bold text-accent px-1">design</span>
          and <span className="font-semibold px-1 text-primary">innovation</span>.
        </p>
        {/* Action Buttons */}
        <div className="flex gap-4 mt-2 flex-wrap justify-center">
          <a
            href="#projects"
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-white text-base shadow-lg shadow-primary/10 hover:bg-accent hover:text-black transition-all duration-200 hover:shadow-md hover:scale-105 flex items-center gap-2"
          >
            View Work
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary text-base hover:bg-primary hover:text-white transition-all duration-200 flex items-center gap-2"
          >
            Contact Me
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
        {/* Social Links */}
        <div className="flex gap-4 mt-3 mb-12 justify-center">
          {/* Added mb-12 for extra space below social links */}
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-graybg/70 border border-graybg hover:bg-accent hover:text-black hover:border-accent transition p-3 shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      {/* Move ScrollCue further down */}
      <div className="mb-3 md:mb-6" />
      <ScrollCue />
    </section>
  );
}
