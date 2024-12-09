import { useState, useEffect } from 'react'
import BlogCard from './BlogCard'
import { useInView } from 'react-intersection-observer'

// Mock data for blog posts
const mockBlogPosts = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post ${i + 1}`,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  author: 'John Doe',
  publishedAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
  imageUrl: `/placeholder.svg?height=200&width=400&text=Blog+${i + 1}`,
  tags: ['Technology', 'Programming', 'Web Development'].sort(() => 0.5 - Math.random()).slice(0, 2)
}))

export default function BlogList() {
  const [posts, setPosts] = useState(mockBlogPosts.slice(0, 10))
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(true)
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasMore) {
      loadMorePosts()
    }
    // Simulate loading
    setTimeout(() => setLoading(false), 1500)
  }, [inView])

  const loadMorePosts = () => {
    const nextPosts = mockBlogPosts.slice(posts.length, posts.length + 10)
    if (nextPosts.length > 0) {
      setPosts([...posts, ...nextPosts])
    } else {
      setHasMore(false)
    }
  }

  if (loading) {
    return <BlogListSkeleton />
  }

  return (
    <div className="space-y-6 w-full">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
      {hasMore && (
        <div ref={ref} className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
    </div>
  )
}

function BlogListSkeleton() {
  return (
    <div className="space-y-6">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="border border-gray-200 rounded-lg p-4 flex space-x-4 animate-pulse">
          <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-lg"></div>
          <div className="flex-grow space-y-2">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

