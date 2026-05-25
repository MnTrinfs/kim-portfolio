import Image from "next/image";
import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

export default function HeroAbout() {
  return (
    <div className="flex flex-col gap-10 py-6 sm:py-10">
      {/* Hero Section */}
      <section className="grid gap-8 md:grid-cols-[220px_1fr] md:items-start pb-10 border-b border-zinc-200 dark:border-zinc-800">
        {/* Left: Avatar */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/img/portrait.jpg"
            alt="Nguyen Ngoc Thien Kim"
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 object-cover shadow-sm"
            unoptimized
            width={220}
            height={220}
            priority
          />
        </div>

        {/* Right: Text & Bio */}
        <div className="flex flex-col">
          <p className="font-sans text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-2">
            Welcome to my portfolio
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Nguyen Ngoc Thien Kim
          </h1>
          <p className="mt-2 font-serif text-lg italic text-zinc-600 dark:text-zinc-400">
            Electronics and Telecommunications Student focused on Robotics, Embedded Systems and Circuit Design
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <Globe className="h-4 w-4" aria-hidden />
            <span>Ho Chi Minh City, Vietnam</span>
          </div>

          {/* Action links */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:nntkim.work@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-zinc-800 dark:text-zinc-200 transition hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-xs"
            >
              <Mail className="h-3.5 w-3.5" /> Email
            </a>
            <a
              href="tel:+84123456789"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-zinc-800 dark:text-zinc-200 transition hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-xs"
            >
              <Phone className="h-3.5 w-3.5" /> Call
            </a>
            <a
              href="https://github.com/tkim-061203"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-zinc-800 dark:text-zinc-200 transition hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-xs"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kim-nguy%E1%BB%85n-ng%E1%BB%8Dc-thi%C3%AAn-0a4226310/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-zinc-800 dark:text-zinc-200 transition hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-xs"
            >
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col gap-3">
        <h2 className="font-serif text-2xl font-bold text-zinc-900 dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          About
        </h2>
        <p className="leading-relaxed text-zinc-700 dark:text-zinc-300 text-justify">
          I am a final-year student majoring in Electronics and Telecommunications at 
          The University of Science, Vietnam National University Ho Chi Minh City, 
          with a strong focus on robotics, embedded systems, and circuit design. 
          My goal is to leverage my expertise in hardware design, motion control, 
          and embedded programming to develop innovative robotic solutions.
        </p>
      </section>

      {/* Experience Section */}
      <Experience />

      {/* Skills Section */}
      <Skills />
    </div>
  );
}
