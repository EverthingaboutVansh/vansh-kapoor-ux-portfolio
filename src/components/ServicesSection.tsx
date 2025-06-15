import { Pen, Sparkles, Palette } from "lucide-react";
export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-light transition-colors">
      <div className="container mx-auto">
        <h2 className="font-poppins text-3xl font-bold text-primary mb-8 text-center">What I Offer</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white rounded-2xl shadow-card px-8 py-7 w-80 min-h-[180px] hover:shadow-hover transition flex flex-col items-center text-center">
            <div className="bg-accent/80 rounded-full p-3 mb-4 shadow">
              <Pen className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-xl mb-2 text-primary font-poppins">UX Design</h4>
            <p className="text-base text-muted">
              Creating intuitive, seamless user interfaces by applying UX principles, user research, and natural human behavior models.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-card px-8 py-7 w-80 min-h-[180px] hover:shadow-hover transition flex flex-col items-center text-center">
            <div className="bg-accent/80 rounded-full p-3 mb-4 shadow">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-xl mb-2 text-primary font-poppins">Generative AI Services</h4>
            <p className="text-base text-muted">
              Effectively utilized Generative AI with prompt design and engineering to build apps and AI image generation. Performed Natural Language Processing tasks. Deploying apps on Vertex AI using Gemini &amp; Imagen models.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-card px-8 py-7 w-80 min-h-[180px] hover:shadow-hover transition flex flex-col items-center text-center">
            <div className="bg-accent/80 rounded-full p-3 mb-4 shadow">
              <Palette className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-xl mb-2 text-primary font-poppins">Prompt Engineering</h4>
            <p className="text-base text-muted">
              Created visually appealing UI with the help of prompt design and engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
