// import Image from 'next/image'

import { MoreVertical } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

interface BlogPost {
  id: number
  title: string
  content: string
  author: string
  publishedAt: Date
  imageUrl: string
  tags: string[]
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 flex space-x-4">
      <div className="flex-shrink-0">
        <img
          src={post.imageUrl}
          alt={post.title}
          width={100}
          height={100}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-2 line-clamp-2">{post.content}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>{post.author}</span>
          <span>{formatDistanceToNow(post.publishedAt, { addSuffix: true })}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
          <a href={`/blog/${post.id}`} className="text-blue-600 hover:underline text-sm">
            Read More
          </a>
        </div>
      </div>
      <div >
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="h-5 w-5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

