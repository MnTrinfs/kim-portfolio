export default function Footer() {
  return (
    <footer className="mt-20 mb-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 transition-colors">
      <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 text-center tracking-wide">
        © {new Date().getFullYear()} Nguyen Ngoc Thien Kim. All rights reserved.
      </p>
    </footer>
  )
}
