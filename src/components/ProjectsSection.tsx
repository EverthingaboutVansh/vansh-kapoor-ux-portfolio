
import { Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Urban Property Management System",
    description: "Auth system with OTP & 2FA, tenant/landlord dashboard, Java AWT + MySQL backend.",
    link: "https://github.com/EverthingaboutVansh/urban-property-management",
    stack: ["Java", "MySQL", "AWT"],
  },
  {
    title: "Kapoor Di Hatti E-Commerce",
    description: "UI for customers/store managers, MERN stack, real-time inventory, 4km local delivery.",
    link: "https://github.com/EverthingaboutVansh/kapoor-di-hatti",
    stack: ["MERN", "Realtime", "Local Delivery"],
  },
  {
    title: "Croma Booking & Billing System",
    description: "Booking/purchase system, Java + MySQL, inventory catalog.",
    link: "https://github.com/EverthingaboutVansh/croma-billing-system",
    stack: ["Java", "MySQL"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-graybg">
      <div className="container mx-auto">
        <h2 className="font-poppins text-3xl font-bold text-primary mb-8 text-center">Projects & Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              className="bg-white rounded-2xl shadow-card hover:shadow-hover transition flex flex-col px-7 py-8 group"
            >
              <div className="flex flex-row justify-between items-center mb-3">
                <span className="font-semibold text-accent">{project.stack.join(", ")}</span>
                <Github className="w-6 h-6 text-primary opacity-70 group-hover:text-accent group-hover:opacity-100 transition" />
              </div>
              <h4 className="font-poppins text-xl font-bold text-primary mb-3 group-hover:underline">
                {project.title}
              </h4>
              <p className="flex-1 text-base text-muted">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
