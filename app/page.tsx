import Image from "next/image";
import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";

export default function HeroAbout() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 text-lg">
      {/* soft background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-amber-300/30 dark:bg-amber-500/15" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl bg-rose-300/30 dark:bg-rose-600/15" />
      </div>
      
      <section className="mx-auto max-w-5xl px-6 py-14 -ml-6 xl:-ml-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          {/* Left: Text */}
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl 
            text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-600">Nguyen Ngoc Thien Kim</h1>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              Electronics and Telecommunications student focused on <span className="font-medium">Robotics</span>, <span className="font-medium">Embedded Systems</span> and <span className="font-medium">Circuit Design</span>
            </p>

            <div className="mt-3 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <Globe className="h-4 w-4" aria-hidden />
              <span>Ho Chi Minh City, Vietnam</span>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="nntkim.work@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-700 px-3 py-2 text-sm shadow-sm transition hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
              <a
                href="tel:+84123456789"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-700 px-3 py-2 text-sm shadow-sm transition hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href="https://github.com/tkim-061203"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-700 px-3 py-2 text-sm shadow-sm transition hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kim-nguy%E1%BB%85n-ng%E1%BB%8Dc-thi%C3%AAn-0a4226310/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-700 px-3 py-2 text-sm shadow-sm transition hover:bg-zinc-50 dark:hover:bg-zinc-800"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Avatar */}
          <div className="mx-auto md:mx-0">
            <a>
            <Image
              src="/img/portrait.jpg"
              alt="Profile photo"
              className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:ml-5 sm:mb-5"
              unoptimized
              width={160}
              height={160}
              priority
            />
            </a>
          </div>
        </div>

        {/* About */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold">About</h2>
              <p className="mt-3 leading-7 text-zinc-700 text-justify dark:text-zinc-300">
                I am a final-year student majoring in Electronics and Telecommunications at 
                The University of Science, Vietnam National University Ho Chi Minh City, 
                with a strong focus on robotics, embedded systems, and circuit design. 
                My goal is to leverage my expertise in hardware design, motion control, 
                and embedded programming to develop innovative robotic solutions.
              </p>
            </div>
      </section>
    </main>
  );
}
