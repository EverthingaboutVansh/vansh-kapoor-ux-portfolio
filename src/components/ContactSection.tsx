
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";
export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // EmailJS integration
    try {
      await emailjs.send(
        "service_6jjfqhm",        // Service ID
        "template_22z8c4j",       // Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "paaiJXcQhl3NjF9dL"       // Public key
      );
      setForm({ name: "", email: "", message: "" });
      toast({ title: "Message Sent", description: "Thank you for reaching out!" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or use another contact option.",
      });
    }
    setLoading(false);
  }
  return (
    <section id="contact" className="py-20 bg-light dark:bg-primary transition-colors">
      <div className="container mx-auto flex flex-col md:flex-row gap-16">
        <div className="flex-1">
          <h2 className="font-poppins text-3xl font-bold text-primary dark:text-accent mb-4">Contact</h2>
          <p className="mb-6 text-base text-muted dark:text-white/80">
            Feel free to get in touch for project collaboration, questions, or just to say hello.
          </p>
          <div className="flex flex-col gap-4 mt-8">
            <a href="mailto:kapoorvansh070@gmail.com" className="flex items-center gap-3 text-primary dark:text-accent hover:text-accent text-lg font-semibold">
              <Mail className="w-6 h-6" /> kapoorvansh070@gmail.com
            </a>
            <span className="flex items-center gap-3 text-primary dark:text-accent text-lg font-semibold">
              <span className="inline-block w-6 h-6 bg-accent rounded-full flex items-center justify-center text-black font-bold text-base">📞</span> +91 7065316119
            </span>
            <a href="https://linkedin.com/in/vansh-kapoor-208491157" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary dark:text-accent hover:text-accent text-lg font-semibold">
              <Linkedin className="w-6 h-6" /> LinkedIn
            </a>
            <a href="https://github.com/EverthingaboutVansh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary dark:text-accent hover:text-accent text-lg font-semibold">
              <Github className="w-6 h-6" /> GitHub
            </a>
          </div>
        </div>
        <form className="flex-1 bg-white dark:bg-background rounded-2xl shadow-card p-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-primary dark:text-accent" htmlFor="name">Name</label>
            <input
              required
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-primary rounded-lg outline-accent bg-background dark:bg-primary/30 text-primary dark:text-accent"
              value={form.name}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-primary dark:text-accent" htmlFor="email">Email</label>
            <input
              required
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-primary rounded-lg outline-accent bg-background dark:bg-primary/30 text-primary dark:text-accent"
              value={form.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-primary dark:text-accent" htmlFor="message">Message</label>
            <textarea
              required
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-primary rounded-lg outline-accent bg-background dark:bg-primary/30 text-primary dark:text-accent"
              value={form.message}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent font-semibold text-black py-3 rounded-lg transition hover:bg-primary hover:text-white dark:hover:bg-accent/80 dark:hover:text-black"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
