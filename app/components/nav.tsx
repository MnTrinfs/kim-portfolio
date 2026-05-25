import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-zinc-950/90 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors">
      <div className="flex items-center justify-between py-4">
        <Link href="/" className="font-serif text-lg font-bold text-zinc-900 dark:text-zinc-50 hover:opacity-85 transition-opacity">
          Nguyen Ngoc Thien Kim
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6" id="nav">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="font-serif text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors py-1 px-0.5"
              >
                {name}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
