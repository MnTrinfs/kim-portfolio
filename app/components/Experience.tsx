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
  ];

  return (
    <section id="experience" className="flex flex-col gap-6">
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
          before:bg-zinc-200 dark:before:bg-zinc-800
        "
      >
        {items.map((it, i) => (
          <li key={i} className="relative mb-8 last:mb-2 pl-6">
            {/* dot centered on the line */}
            <span
              aria-hidden
              className="
                absolute left-0 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full
                bg-zinc-900 dark:bg-zinc-50 ring-4 ring-white dark:ring-zinc-950
              "
            />
            {/* content */}
            <div className="flex flex-col">
              <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
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
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}