import Header from '@/components/home/Header'
import BlogList from '@/components/home/BlogList'
import Sidebar from '@/components/home/Sidebar'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* <Header /> */}
      <main className="flex-grow flex relative">
        <div className="w-full lg:w-[70%] p-4 lg:p-8">
          <BlogList />
        </div>
        <div className="hidden lg:block w-[30%] p-4 lg:p-8">
          <div className="sticky top-24">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  )
}

