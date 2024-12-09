'use client'

import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
import { Search, PlusCircle, NotebookPenIcon, Settings, LogOut, Menu, User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Sidebar from './Sidebar'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import { logout } from '@/Redux/slice/authSlice'
import Cookies from 'js-cookie'
import { persister } from '@/Redux/store'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'




export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.auth?.user) ?? null;


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
  }

  const handleLogout = () => {

    toast('Are you sure you want to Logout now?', {
      action: {
        label: 'Yes',
        onClick:()=> confirmLogout()
      },
      cancel: {
        label: 'No',
        onClick: () => ''
      },
      duration: 4000,
    });


  }

  const confirmLogout = ()=>{
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
          <a href="/home" className="text-2xl font-sans font-extrabold text-gray-800">
            Aura
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

        <div className="flex items-center space-x-8">
          <a href="/createBlog" className="text-gray-600 hover:text-gray-800">
            <NotebookPenIcon className="h-6 w-6 text-gray-800" />
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full overflow-hidden">
                <User className="h-7 w-6 "
                // src="/placeholder.svg?height=40&width=40&text=User"
                // alt="User"
                // width={40}
                // height={40}
                />
              </button>

            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>{user?.name}</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4 text-red-700" />
                <span className="mr-2 h-4 w-4 text-red-700" >Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

