import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="py-6 sm:py-10">
      <h1 className="font-serif text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 pb-2">
        My Blog
      </h1>
      <BlogPosts />
    </section>
  )
}
