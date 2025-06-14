
import ScrollCue from "./ScrollCue";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between py-20 md:py-28 min-h-[75vh] w-full"
      style={{ background: "linear-gradient(90deg, #FCA31115 0%, #FFFFFF 80%)" }}
    >
      <div className="flex flex-col gap-6 md:gap-8 max-w-xl animate-fade-in">
        <span className="uppercase tracking-wider text-accent font-bold text-sm">Hello! I&apos;m</span>
        <h1 className="text-4xl md:text-5xl font-bold font-poppins text-primary mb-2 leading-tight">
          Vansh Kapoor
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-black/80">
          Junior UX Designer & Analyst
        </h2>
        <p className="text-base md:text-lg text-muted max-w-lg">
          Transforming ideas into seamless digital experiences through <span className="font-semibold text-accent">design</span> and <span className="font-semibold">innovation</span>.
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href="#projects"
            className="rounded-lg bg-primary px-5 py-2 font-semibold text-white shadow-lg hover:bg-accent hover:text-black transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border-2 border-primary px-5 py-2 font-semibold text-primary hover:bg-primary hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center mb-10 md:mb-0 mr-0 md:mr-8">
        <div className="rounded-full overflow-hidden border-4 border-accent shadow-lg w-48 h-48 flex items-center justify-center bg-graybg">
          <img
            src="https://ui-avatars.com/api/?name=Vansh+Kapoor&background=E5E5E5&color=14213D&size=300"
            alt="Vansh Kapoor Profile"
            className="object-cover w-full h-full"
            draggable={false}
          />
        </div>
        <span className="mt-4 bg-accent text-black rounded-full px-4 py-1 font-semibold text-xs shadow-lg">
          1.5+ Years Experience
        </span>
      </div>
      <ScrollCue />
    </section>
  );
}
