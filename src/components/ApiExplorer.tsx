import { useEffect, useMemo, useState } from 'react'
import Button from './Button'
import Card from './Card'

interface Post {
  id: number
  title: string
  body: string
}

const PAGE_SIZE = 8

const ApiExplorer = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasMore, setHasMore] = useState(true)
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    const loadPosts = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${PAGE_SIZE}&_page=${page}`,
          { signal: controller.signal }
        )
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        const data: Post[] = await response.json()
        setPosts((prev) => (page === 1 ? data : [...prev, ...data]))
        setHasMore(data.length === PAGE_SIZE)
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setError((err as Error).message)
        }
      } finally {
        setLoading(false)
      }
    }

    loadPosts()

    return () => controller.abort()
  }, [page, refreshKey])

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts
    return posts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [posts, searchQuery])

  const resetResults = () => {
    setPage(1)
    setPosts([])
    setHasMore(true)
    setRefreshKey((prev) => prev + 1)
  }

  return (
    <section className="space-y-6">
      <header>
        <p className="text-sm uppercase tracking-wide text-slate-500">Resource Library</p>
        <h2 className="mt-1 text-3xl font-bold">Dental wellness articles</h2>
        <p className="mt-2 text-slate-500 dark:text-slate-300">
          Demonstrates live data fetching with loading & error states, pagination, and a search filter. For this demo we
          read from the public{' '}
          <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noreferrer">
            JSONPlaceholder
          </a>{' '}
          API and treat the posts as bite-sized dental tips.
        </p>
      </header>

      <div className="flex flex-col gap-3 rounded-2xl bg-white/90 p-4 shadow-card backdrop-blur dark:bg-slate-800/70 md:flex-row">
        <input
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search resources by title..."
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-inner focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900/60"
        />

        <div className="flex gap-3">
          <Button
            variant="secondary"
            type="button"
            onClick={() => {
              setSearchQuery('')
              resetResults()
            }}
          >
            Reset
          </Button>
        </div>
      </div>

      {error && (
        <Card className="border border-rose-200 text-rose-600 dark:border-rose-500/40 dark:text-rose-300">
          <p>{error}</p>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <Card key={post.id} title={post.title} className="h-full">
            <p>{post.body}</p>
          </Card>
        ))}
      </div>

      {loading && <p className="text-center text-slate-500">Loading oral-health resources...</p>}
      {!loading && filteredPosts.length === 0 && (
        <p className="text-center text-slate-500">No articles match your search just yet.</p>
      )}
      {!loading && hasMore && (
        <div className="text-center">
          <Button type="button" onClick={() => setPage((prev) => prev + 1)} disabled={loading}>
            Load more results
          </Button>
        </div>
      )}
      {!hasMore && (
        <p className="text-center text-slate-400 text-sm">You have reached the end of the demo dataset.</p>
      )}
    </section>
  )
}

export default ApiExplorer

