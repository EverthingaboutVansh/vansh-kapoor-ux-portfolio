
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-graybg dark:bg-[#1a1a22] transition-colors">
      <div className="container mx-auto flex flex-col md:flex-row gap-14 items-center">
        <div className="w-44 h-44 rounded-full border-4 border-primary overflow-hidden bg-white dark:bg-[#23232a] flex-shrink-0 shadow-md">
          <img alt="Profile" className="object-cover w-full h-full" src="https://i.postimg.cc/1tKWKdyF/Portfolio-image.jpg" />
        </div>
        <div className="flex-1">
          <h2 className="font-poppins text-3xl font-bold text-primary dark:text-yellow-200 mb-2">About Me</h2>
          <h3 className="font-montserrat text-xl font-semibold mb-4 text-black/90 dark:text-white/90">Designing Solutions, Not Just Visuals</h3>
          <p className="mb-6 text-base max-w-2xl text-primary dark:text-gray-200">
            Dynamic and results-driven professional with <b>1.5+ years</b> of hands-on experience as a <b>Junior UX Designer</b> and <b>Critical Incident Response Analyst</b>. Demonstrated success in accelerating revenue growth, enhancing operational efficiency, and driving cross-functional process improvements. <br /><br />
            Adept at leveraging <b>Figma, Prompt Engineering, and the MERN Stack</b> to design and implement innovative, user-centric solutions to complex business challenges. Effectively utilized Generative AI to predict trends by analyzing historical data and performance metrics—enabling project scalability, cost optimization, and seamless integration of AI-powered workflows to boost throughput and strategic impact.
          </p>
          <div>
            <h4 className="font-semibold text-lg text-primary dark:text-yellow-300 mb-1">Education</h4>
            <ul className="text-base text-primary dark:text-white/90">
              <li>
                <strong>BCA</strong>, Jagan Institute of Management Studies, GGSIPU (2020–23) – <span className="text-accent font-bold">88.4%</span>
              </li>
              <li>
                <strong>12th</strong>, Neo Convent Sr. Sec. School, CBSE (2020) – <span className="text-accent font-bold">88.6%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
