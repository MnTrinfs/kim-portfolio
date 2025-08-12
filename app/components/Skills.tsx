// components/Skills.tsx
import { Code2, Cpu, Zap, PenTool } from "lucide-react";

export default function Skills() {
  const groups = [
    {
      title: "Programming",
      icon: Code2,
      items: ["Python", "Pandas", "C/C++", "Android (Java)"],
    },
    {
      title: "EDA & IC Design",
      icon: Cpu,
      items: ["Cadence Virtuoso", "Synopsys Custom Compiler"],
    },
    {
      title: "Electrical Engineering",
      icon: Zap,
      items: ["Electrical Design", "Electrical Products"],
    },
    {
      title: "CAD & Drafting",
      icon: PenTool,
      items: ["Computer-Aided Design (CAD)"],
    },
  ];

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Technical{" "}
          <span className="bg-gradient-to-r from-amber-500 via-pink-500 to-rose-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <span className="mx-auto mt-3 block h-1 w-28 rounded-full bg-gradient-to-r from-amber-500 to-rose-600" />
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Some of the essential technologies I use when building projects.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {groups.map(({ title, icon: Icon, items }) => (
          <div
            key={title}
            className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 shadow-sm
                       dark:border-zinc-800 dark:bg-zinc-900/40"
          >
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-zinc-700 dark:text-zinc-300">
              {items.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}