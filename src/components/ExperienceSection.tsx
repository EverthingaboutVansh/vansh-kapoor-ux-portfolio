
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
        <h2 className="font-poppins text-3xl font-bold text-primary mb-8 text-center">Experience</h2>
        <ol className="relative border-l-4 border-accent pl-8 max-w-2xl mx-auto">
          {experience.map((exp, idx) => (
            <li className="mb-12 ml-2 " key={exp.title}>
              <div className="absolute w-6 h-6 bg-accent border-4 border-white rounded-full -left-4 flex items-center justify-center shadow"></div>
              <div className="pl-4">
                <span className="block text-sm text-muted mb-1">{exp.date}</span>
                <h3 className="font-semibold text-xl text-black leading-tight">{exp.title}</h3>
                <p className="text-base text-primary">{exp.company}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
