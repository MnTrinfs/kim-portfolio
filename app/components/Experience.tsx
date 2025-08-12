export default function Experience() {
  const items = [
    { range: "2018–2021", title: "Ernst Thalmann High School, HCM City", subtitle: "" },
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
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight">
          My{" "}
          <span className="bg-gradient-to-r from-amber-500 to-rose-600 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <span className="mx-auto mt-3 block h-1 w-28 rounded-full bg-gradient-to-r from-amber-500 to-rose-600" />
      </div>

      {/* Timeline */}
      <ol
        role="list"
        className="
          relative mt-12 pl-10
          [--tl:theme(spacing.6)] sm:[--tl:theme(spacing.7)]
          before:absolute before:left-[var(--tl)] before:top-0 before:h-full before:w-px
          before:bg-zinc-200 dark:before:bg-zinc-700
        "
      >
        {items.map((it, i) => (
          <li key={i} className="relative mb-10">
            {/* dot centered on the line */}
            <span
              aria-hidden
              className="
                absolute left-[var(--tl)] top-2 h-3 w-3 -translate-x-1/2 rounded-full
                bg-gradient-to-r from-amber-500 to-rose-600
                ring-2 ring-white dark:ring-zinc-900 shadow
              "
            />
            {/* content */}
            <div className="pl-8">
              <p className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {it.range}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {it.title}
              </h3>
              {it.subtitle && (
                <p className="mt-1 text-zinc-600 dark:text-zinc-300">{it.subtitle}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}