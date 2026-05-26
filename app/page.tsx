import Image from "next/image";
import { Mail, Phone, Github, Linkedin, Globe, FileText } from "lucide-react";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

export default function HeroAbout() {
  return (
    <div className="flex flex-col gap-10 py-6 sm:py-10">
      {/* Hero Section */}
      <section className="grid gap-8 md:grid-cols-[220px_1fr] md:items-start pb-10 border-b border-zinc-200 dark:border-zinc-800">
        {/* Left: Avatar with modern border glow */}
        <div className="relative group flex justify-center md:justify-start">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-200 to-zinc-400 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl blur-xs opacity-50 group-hover:opacity-75 transition duration-500" />
          <div className="relative">
            <Image
              src="/img/portrait.jpg"
              alt="Nguyen Ngoc Thien Kim"
              className="rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-950 object-cover shadow-md group-hover:scale-[1.02] transition duration-500"
              unoptimized
              width={220}
              height={220}
              priority
            />
          </div>
        </div>

        {/* Right: Text & Bio */}
        <div className="flex flex-col">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Nguyen Ngoc Thien Kim
          </h1>
          <p className="mt-2 font-serif text-lg italic text-zinc-600 dark:text-zinc-400">
            Electronics and Telecommunications Student focused on Robotics, Embedded Systems and Circuit Design
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <Globe className="h-4 w-4 text-zinc-400 dark:text-zinc-500" aria-hidden />
            <span>Ho Chi Minh City, Vietnam</span>
          </div>

          {/* Action links with premium styling */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/30 px-4 py-2 text-xs font-bold tracking-wide text-zinc-800 dark:text-zinc-200 transition hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:-translate-y-0.5 duration-200 shadow-xs"
            >
              <FileText className="h-3.5 w-3.5 text-zinc-500" /> CV
            </a>
            <a
              href="mailto:nntkim.work@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/30 px-4 py-2 text-xs font-bold tracking-wide text-zinc-800 dark:text-zinc-200 transition hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:-translate-y-0.5 duration-200 shadow-xs"
            >
              <Mail className="h-3.5 w-3.5 text-zinc-500" /> Email
            </a>
            <a
              href="tel:+84123456789"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/30 px-4 py-2 text-xs font-bold tracking-wide text-zinc-800 dark:text-zinc-200 transition hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:-translate-y-0.5 duration-200 shadow-xs"
            >
              <Phone className="h-3.5 w-3.5 text-zinc-500" /> Call
            </a>
            <a
              href="https://github.com/tkim-061203"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/30 px-4 py-2 text-xs font-bold tracking-wide text-zinc-800 dark:text-zinc-200 transition hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:-translate-y-0.5 duration-200 shadow-xs"
            >
              <Github className="h-3.5 w-3.5 text-zinc-500" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kim-nguy%E1%BB%85n-ng%E1%BB%8Dc-thi%C3%AAn-0a4226310/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/30 px-4 py-2 text-xs font-bold tracking-wide text-zinc-800 dark:text-zinc-200 transition hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:-translate-y-0.5 duration-200 shadow-xs"
            >
              <Linkedin className="h-3.5 w-3.5 text-zinc-500" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex flex-col gap-3 scroll-mt-20">
        <h2 className="font-serif text-2xl font-bold text-zinc-900 dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          About
        </h2>
        <p className="leading-relaxed text-zinc-700 dark:text-zinc-300 text-justify">
          I am a final-year student majoring in Electronics and Telecommunications at 
          The University of Science, Vietnam National University Ho Chi Minh City, 
          focusing on robotics, embedded systems, and circuit design. Currently, my research 
          interests extend to AI-assisted hardware engineering, specifically developing 
          AI chatbots to automate and optimize VHDL code generation. My goal is to leverage 
          my expertise in hardware design, motion control, and intelligent systems to build 
          innovative robotics and automation solutions.
        </p>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <section id="contact" className="flex flex-col gap-4 scroll-mt-20 border-t border-zinc-200 dark:border-zinc-800 pt-10">
        <h2 className="font-serif text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Get in Touch
        </h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-zinc-200/60 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-900/10 px-5 py-4 backdrop-blur-xs shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition duration-300">
          <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400">
            Let's connect for opportunities, collaborations, or questions.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <a
              href="mailto:nntkim.work@gmail.com"
              className="inline-flex items-center gap-2 font-sans text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <Mail className="h-4 w-4 text-zinc-400" /> nntkim.work@gmail.com
            </a>
            <span className="hidden sm:inline text-zinc-200 dark:text-zinc-800">|</span>
            <a
              href="tel:+84123456789"
              className="inline-flex items-center gap-2 font-sans text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <Phone className="h-4 w-4 text-zinc-400" /> +84 123 456 789
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
