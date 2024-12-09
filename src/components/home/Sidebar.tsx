import { useState, useEffect } from 'react'
// import { Button } from "@/components/ui/button"

const categories = [
  'All',
  'Technology',
  'Programming',
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Machine Learning',
  'Artificial Intelligence',
  'Blockchain',
  'Cybersecurity'
]

export default function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1500)
  }, [])

  if (loading) {
    return <SidebarSkeleton />
  }

  return (
    <div className="space-y-6 border border-gray-200 rounded-lg p-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`w-full text-left px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Python'].map((tag) => (
            <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function SidebarSkeleton() {
  return (
    <div className="space-y-6 animate-pulse border border-gray-200 rounded-lg p-6">
      <div>
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="space-y-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded w-full"></div>
          ))}
        </div>
      </div>
      <div>
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="flex flex-wrap gap-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-8 bg-gray-200 rounded w-16"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

