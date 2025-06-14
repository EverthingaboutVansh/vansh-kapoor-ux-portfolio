
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      toast({ title: "Message Sent", description: "Thank you for reaching out!" });
    }, 1200);
  }

  return (
    <section id="contact" className="py-20 bg-light">
      <div className="container mx-auto flex flex-col md:flex-row gap-16">
        <div className="flex-1">
          <h2 className="font-poppins text-3xl font-bold text-primary mb-4">Contact</h2>
          <p className="mb-6 text-base text-muted">
            Feel free to get in touch for project collaboration, questions, or just to say hello.
          </p>
          <div className="flex flex-col gap-4 mt-8">
            <a href="mailto:kapoorvansh070@gmail.com" className="flex items-center gap-3 text-primary hover:text-accent text-lg font-semibold">
              <Mail className="w-6 h-6" /> kapoorvansh070@gmail.com
            </a>
            <span className="flex items-center gap-3 text-primary text-lg font-semibold">
              <span className="inline-block w-6 h-6 bg-accent rounded-full flex items-center justify-center text-black font-bold text-base">📞</span> +91 7065316119
            </span>
            <a href="https://linkedin.com/in/vansh-kapoor-208491157" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:text-accent text-lg font-semibold">
              <Linkedin className="w-6 h-6" /> LinkedIn
            </a>
            <a href="https://github.com/EverthingaboutVansh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary hover:text-accent text-lg font-semibold">
              <Github className="w-6 h-6" /> GitHub
            </a>
          </div>
        </div>
        <form className="flex-1 bg-white rounded-2xl shadow-card p-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-primary" htmlFor="name">Name</label>
            <input
              required
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-accent"
              value={form.name}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-primary" htmlFor="email">Email</label>
            <input
              required
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-accent"
              value={form.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-primary" htmlFor="message">Message</label>
            <textarea
              required
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-accent"
              value={form.message}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent font-semibold text-black py-3 rounded-lg transition hover:bg-primary hover:text-white"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
