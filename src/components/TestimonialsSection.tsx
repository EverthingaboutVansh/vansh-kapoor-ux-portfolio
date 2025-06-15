
export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-graybg dark:bg-primary transition-colors">
      <div className="container mx-auto">
        <h2 className="font-poppins text-3xl font-bold text-primary dark:text-accent mb-8 text-center">What Colleagues Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Placeholder testimonials */}
          <div className="bg-white dark:bg-background rounded-2xl shadow-card px-8 py-7 w-80 min-h-[180px] flex flex-col">
            <p className="text-base text-muted dark:text-white/80 mb-4">
              "Working with Vansh was a pleasure—he brings energy, creative ideas and practical solutions to every part of the process."
            </p>
            <span className="font-semibold text-accent">– Anjali Sharma, Project Manager</span>
          </div>
          <div className="bg-white dark:bg-background rounded-2xl shadow-card px-8 py-7 w-80 min-h-[180px] flex flex-col">
            <p className="text-base text-muted dark:text-white/80 mb-4">
              "Vansh’s attention to detail and understanding of user needs made a huge difference in project outcomes."
            </p>
            <span className="font-semibold text-accent">– Rohit Verma, Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
