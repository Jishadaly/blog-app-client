'use client'

import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
import { Search, PlusCircle, Settings, LogOut, Menu } from 'lucide-react'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Sidebar from './Sidebar'
import { useAppDispatch } from '@/Redux/hooks'
import { logout } from '@/Redux/slice/authSlice'
import Cookies from 'js-cookie'
import { persister } from '@/Redux/store'
import { useNavigate } from 'react-router-dom'



export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const dispatch = useAppDispatch();
const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
  }

  const handleLogout = ()=>{
    console.log('working');
    
      dispatch(logout())
      Cookies.remove('token');
      persister.purge()
      navigate('/');
  }

  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden mr-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open categories</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <Sidebar />
            </SheetContent>
          </Sheet>
          <a href="/" className="text-2xl font-bold text-gray-800">
            Blog
          </a>
        </div>

        <form onSubmit={handleSearch} className="hidden sm:flex flex-1 max-w-md mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </form>

        <div className="flex items-center space-x-4">
          <a href="/createBlog" className="text-gray-600 hover:text-gray-800">
            <PlusCircle className="h-6 w-6" />
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full overflow-hidden">
                <img
                  src="/placeholder.svg?height=40&width=40&text=User"
                  alt="User"
                  width={40}
                  height={40}
                />
              </button>
              
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut  className="mr-2 h-4 w-4" />
                <span >Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

