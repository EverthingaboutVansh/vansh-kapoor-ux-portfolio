
import { Award } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "Professional Certificate in Agile & SCRUM",
    issuer: "Udemy",
    url: "https://www.udemy.com/certificate/UC-39c6b1c5-ef2e-43b6-8f37-86e9e9cb054f/",
  },
  {
    title: "Google Cloud Skill Boost - Prompt Design in Vertex Ai",
    issuer: "Google",
    url: "https://www.cloudskillsboost.google/public_profiles/a28f8805-505a-40dc-8bf7-ed071004d79c/badges/15362562",
  },
  {
    title: "Google Cloud Skill Boost - Build AI apps with Gemini",
    issuer: "Google",
    url: "https://www.cloudskillsboost.google/public_profiles/a28f8805-505a-40dc-8bf7-ed071004d79c/badges/15396742",
  },
  {
    title: "Google UX Design Professional Program",
    issuer: "Coursera",
    url: "https://github.com/EverthingaboutVansh/Google-UX-Design/blob/main/Google%20UX%20Design.pdf",
  },
  {
    title: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    url: "https://learn.deeplearning.ai/accomplishments/7190f44f-7ddc-4b33-a706-5e8074dabb89?usp=sharing",
  },
  {
    title: "MERN Stack",
    issuer: "Tech Explica",
    extra: "Credential ID TECH/012602",
    url: "",
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-graybg dark:bg-primary transition-colors">
      <div className="container mx-auto">
        <h2 className="font-poppins text-3xl font-bold text-primary dark:text-accent mb-8 text-center flex justify-center items-center gap-2">
          <Award className="w-7 h-7 text-accent" />
          Certifications
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="bg-white dark:bg-background rounded-2xl shadow-card px-8 py-7 w-80 min-h-[140px] flex flex-col hover:shadow-hover transition"
            >
              <h4 className="text-lg font-bold text-primary dark:text-accent mb-1">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline hover:text-primary/90 transition"
                  >
                    {cert.title}
                  </a>
                ) : (
                  cert.title
                )}
              </h4>
              <span className="text-base text-black dark:text-white font-medium mb-2">{cert.issuer}</span>
              {cert.extra && <span className="text-sm text-muted dark:text-accent">{cert.extra}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
