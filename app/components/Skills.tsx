import { Code2, Cpu, Zap, PenTool, Sparkles } from "lucide-react";

export default function Skills() {
  const groups = [
    {
      title: "Programming & Software",
      icon: Code2,
      items: ["Python", "C/C++", "Android (Java)", "Pandas"],
    },
    {
      title: "EDA & Hardware Description",
      icon: Cpu,
      items: ["VHDL / Verilog", "Cadence Virtuoso", "Synopsys Custom Compiler"],
    },
    {
      title: "AI & Automation Research",
      icon: Sparkles,
      items: ["LLMs for VHDL", "AI Chatbots / Assistants", "RAG & Agents"],
    },
    {
      title: "Electrical & CAD",
      icon: Zap,
      items: ["Electrical Design", "Computer-Aided Design (CAD)"],
    },
  ];

  return (
    <section id="skills" className="flex flex-col gap-6 scroll-mt-20">
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
            className="rounded-xl border border-zinc-200/60 bg-white/40 p-5 shadow-xs backdrop-blur-xs
                       dark:border-zinc-800/50 dark:bg-zinc-900/10 hover:border-zinc-300 dark:hover:border-zinc-700
                       hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/60 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition duration-300">
                <Icon className="h-4.5 w-4.5 text-zinc-700 dark:text-zinc-300" />
              </div>
              <h3 className="font-serif text-base font-bold text-zinc-900 dark:text-zinc-50">{title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((t) => (
                <span
                  key={t}
                  className="font-sans px-2.5 py-1 text-xs font-medium rounded-lg 
                             bg-zinc-100/70 dark:bg-zinc-800/40 text-zinc-700 dark:text-zinc-300 
                             border border-zinc-200/45 dark:border-zinc-700/30
                             hover:bg-zinc-200/50 dark:hover:bg-zinc-800/80 transition-colors duration-200"
                >
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