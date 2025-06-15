
const SKILLS = [
  {
    category: "UI/UX Design",
    skills: ["Figma", "Prompt Design", "Wireframing", "Prototyping", "User Flows"],
  },
  {
    category: "Web/Mobile Design",
    skills: ["Aesthetic UI", "Intuitive Navigation"],
  },
  {
    category: "Graphic Design",
    skills: ["Branding", "Illustrations"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-graybg transition-colors">
      <div className="container mx-auto">
        <h2 className="font-poppins text-3xl font-bold text-primary mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {SKILLS.map(group => (
            <div
              key={group.category}
              className="bg-white rounded-2xl shadow-card px-8 py-6 w-72 min-h-[160px] hover:shadow-hover transition"
            >
              <h4 className="font-semibold text-lg text-accent mb-2">{group.category}</h4>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <li
                    key={skill}
                    className="bg-graybg rounded-full px-4 py-1 text-primary font-medium text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
