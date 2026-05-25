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
    <section id="skills" className="flex flex-col gap-6">
      {/* Heading */}
      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-2xl font-bold text-zinc-900 dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          Technical Skills
        </h2>
        <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400">
          Some of the essential technologies I use in my academic and engineering projects.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map(({ title, icon: Icon, items }) => (
          <div
            key={title}
            className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm
                       dark:border-zinc-800 dark:bg-zinc-900/20"
          >
            <div className="flex items-center gap-2.5">
              <Icon className="h-4.5 w-4.5 text-zinc-700 dark:text-zinc-300" />
              <h3 className="font-serif text-base font-bold text-zinc-900 dark:text-zinc-50">{title}</h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
              {items.map((t) => (
                <span key={t} className="font-sans text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}