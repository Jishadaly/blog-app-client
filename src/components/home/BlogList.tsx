import { useState, useEffect } from 'react'
import BlogCard from './BlogCard'
// import { useInView } from 'react-intersection-observer'
import { getBlogs, removeBlog } from '@/api/servies/userService'
import { IBlogPost } from '@/types/Blogtype'
import BlogListSkeleton from './BlogListSkeleton'



export default function BlogList() {

  const [posts, setPosts] = useState<IBlogPost[]>([])
  // const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(true)
  // const { ref, inView } = useInView()

  useEffect(() => {
    // if (inView && hasMore) {
    //   // loadMorePosts()
    // }
    // Simulate loading
    const fetchBlogs = async () => {
      try {

        const { blogs } = await getBlogs('/getBlogs');
        console.log(blogs);
        setPosts(blogs)
        setLoading(false)
      } catch (error) {
        console.log(error);

      }
    }

    const delayFetch = setTimeout(() => {
      fetchBlogs();
    }, 1000);


    return () => clearTimeout(delayFetch);
  }, [setPosts])




  // const loadMorePosts = () => {
  //   const nextPosts = mockBlogPosts.slice(posts.length, posts.length + 10)
  //   if (nextPosts.length > 0) {
  //     setPosts([...posts, ...nextPosts])
  //   } else {
  //     setHasMore(false)
  //   }
  // }

  const deleteBlog = async (id: string) => {
    try {
      const res = await removeBlog(`/deleteBlog?blogId=${id}`);
      console.log(res);

      setPosts((prevPost) => prevPost.filter((post) => post._id !== id))
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <BlogListSkeleton />
  }

  return (
    <div className="space-y-6 w-full">
      {posts.map((post, index) => (
        <BlogCard key={index} post={post} deleteBlog={deleteBlog} />
      ))}
      {/* {hasMore && (
        <div ref={ref} className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )} */}
    </div>
  )
}


