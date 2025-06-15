
import { Clock } from "lucide-react";

const experience = [
  {
    date: "Dec 2023",
    title: "Graduate Trainee (Critical Incident Response)",
    company: "HCL Tech",
  },
  {
    date: "Sept 2024",
    title: "Analyst (Design Trainee)",
    company: "HCL Tech",
  },
  {
    date: "April 2025",
    title: "Analyst (Junior UX Designer)",
    company: "HCL Tech",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-light">
      <div className="container mx-auto">
        <h2 className="font-poppins text-3xl font-bold text-primary mb-8 text-center">Work Experience</h2>
        <div className="relative max-w-2xl mx-auto">
          {/* vertical journey line */}
          <span
            className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/80 via-accent/30 to-accent/0 rounded-full z-0 "
            aria-hidden="true"
          />
          <ol className="relative pl-16">
            {experience.map((exp, idx) => (
              <li key={exp.title} className="mb-14 relative">
                {/* Timeline dot */}
                <span className="absolute left-2.5 top-1.5 z-10 flex items-center justify-center">
                  <span
                    className={`w-5 h-5 rounded-full border-4 border-white shadow-lg
                      ${idx === 0
                        ? "bg-accent/90 animate-scale-in"
                        : idx === experience.length - 1
                        ? "bg-primary/80 animate-fade-in"
                        : "bg-accent/70 animate-fade-in"
                      }
                    `}
                  />
                </span>
                {/* The content */}
                <div className="pl-7">
                  <span className="flex items-center gap-1.5 mb-1 text-sm text-muted font-semibold">
                    <Clock size={14} className="inline-block text-accent" />
                    {exp.date}
                  </span>
                  <h3 className="font-semibold text-lg sm:text-xl text-black leading-tight mb-0.5">
                    {exp.title}
                  </h3>
                  <p className="text-base text-primary">{exp.company}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
