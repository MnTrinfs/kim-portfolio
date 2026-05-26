export default function Experience() {
  const items = [
    {
      range: "October 2021 – October 2026",
      title: "Ho Chi Minh City University of Science (VNU-HCMUS)",
      subtitle: "Electronics & Telecommunications major (GPA: 8.4)",
    },
    {
      range: "April 2023 – Now",
      title:
        "DESLab Laboratories – Faculty of Electronics and Telecommunications (VNU-HCMUS)",
      subtitle: "Undergraduate Student Researcher",
    },
    {
      range: "April 2025 – September 2025",
      title: "The University of Electro-Communications",
      subtitle: "Short-term Exchange Study Program JUSST",
      description: [
        "Fully funded by the JASSO scholarship.",
        "Courses: Japanese Language, science & engineering courses, academic skills, lab work.",
      ],
    },
  ];

  return (
    <section id="experience" className="flex flex-col gap-6 scroll-mt-20">
      {/* Heading */}
      <h2 className="font-serif text-2xl font-bold text-zinc-900 dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-2">
        Education & Experience
      </h2>

      {/* Timeline */}
      <ol
        role="list"
        className="
          relative pl-6 sm:pl-8 mt-2
          before:absolute before:left-0 before:top-2 before:h-[95%] before:w-px
          before:bg-gradient-to-b before:from-zinc-200 before:to-zinc-200/20 
          dark:before:from-zinc-800 dark:before:to-zinc-800/10
        "
      >
        {items.map((it, i) => (
          <li key={i} className="relative mb-8 last:mb-2 pl-6 group">
            {/* Interactive styled dot centered on the line */}
            <span
              aria-hidden
              className="
                absolute left-0 top-2.5 h-3.5 w-3.5 -translate-x-1/2 rounded-full
                border-2 border-zinc-900 dark:border-zinc-50 bg-white dark:bg-zinc-900
                flex items-center justify-center
                group-hover:border-emerald-500 dark:group-hover:border-emerald-400 transition-colors duration-300
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-zinc-50 group-hover:bg-emerald-500 dark:group-hover:bg-emerald-400 transition-colors duration-300" />
            </span>

            {/* content */}
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                {it.range}
              </span>
              <h3 className="font-serif text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-1">
                {it.title}
              </h3>
              {it.subtitle && (
                <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  {it.subtitle}
                </p>
              )}
              {it.description && (
                <ul className="mt-2 list-disc pl-4 space-y-1">
                  {it.description.map((desc, idx) => (
                    <li key={idx} className="font-sans text-xs text-zinc-500 dark:text-zinc-400">
                      {desc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
