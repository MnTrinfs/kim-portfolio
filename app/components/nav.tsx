import Link from 'next/link'

const navItems = {
  '#about': {
    name: 'About',
  },
  '#experience': {
    name: 'Experience',
  },
  '#skills': {
    name: 'Skills',
  },
  '#contact': {
    name: 'Contact',
  },
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-serif text-lg font-bold text-zinc-900 dark:text-zinc-50 hover:opacity-85 transition-opacity">
            Thien Kim
          </Link>
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-green" />
            Available for internships
          </span>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6" id="nav">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <a
                key={path}
                href={path}
                className="font-sans text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors py-1"
              >
                {name}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
