import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col gap-4 mt-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col gap-1 py-2 border-b border-zinc-100 dark:border-zinc-900/60 hover:opacity-80 transition-opacity"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="font-serif text-base font-bold text-zinc-900 dark:text-zinc-50">
                {post.metadata.title}
              </span>
              <span className="font-sans text-xs text-zinc-400 dark:text-zinc-500 tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </span>
            </div>
          </Link>
        ))}
    </div>
  )
}
