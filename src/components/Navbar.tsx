
import { Github, Linkedin, Mail } from "lucide-react";

const NAV_LINKS = [{
  label: "Home",
  href: "#home"
}, {
  label: "About",
  href: "#about"
}, {
  label: "Experience",
  href: "#experience"
}, {
  label: "Skills",
  href: "#skills"
}, {
  label: "Projects",
  href: "#projects"
}, {
  label: "Contact",
  href: "#contact"
}];
export default function Navbar() {
  return <nav className="sticky top-0 z-40 flex justify-between items-center w-full px-8 h-20 bg-white shadow backdrop-blur-md transition-colors">
      <a href="#home" className="font-poppins font-bold text-xl tracking-wider text-primary">
        Vansh Kapoor
      </a>
      <div className="flex-1 flex items-center justify-center gap-2">
        {NAV_LINKS.map(link => <a key={link.label} href={link.href} className="text-primary px-3 py-2 transition-colors rounded-lg font-medium hover:bg-accent hover:text-white">
            {link.label}
          </a>)}
      </div>
      <div className="flex items-center gap-3">
        {/* Removed ThemeToggle */}
        <a href="https://github.com/EverthingaboutVansh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="text-primary hover:text-accent w-6 h-6 transition" />
        </a>
        <a href="https://linkedin.com/in/vansh-kapoor-208491157" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="text-primary hover:text-accent w-6 h-6 transition" />
        </a>
        <a href="#contact" aria-label="Contact">
          <Mail className="text-primary hover:text-accent w-6 h-6 transition" />
        </a>
      </div>
    </nav>;
}
