// import Link from 'next/link'
// import { Button } from '@/components/ui/Button'

// export default function Header() {
//   return (
//     <header className="py-4 px-4 md:px-6 lg:px-8 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b border-border">
//       <div className="flex items-center space-x-4">
//         <Link href="/" className="flex items-center space-x-2">
//           <span className="font-bold text-2xl text-primary">Aura</span>
//         </Link>
//         <nav className="hidden md:flex space-x-4">
//           <Link href="#features" className="text-sm font-medium hover:text-primary">Features</Link>
//           <Link href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>
//           <Link href="#" className="text-sm font-medium hover:text-primary">Pricing</Link>
//         </nav>
//       </div>
//       <div className="flex items-center space-x-4">
//         <Button variant="ghost" className="hidden md:inline-flex hover:bg-primary/10">Log in</Button>
//         <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
//       </div>
//     </header>
//   )
// }

// import { useState } from "react";
import { Button } from "../ui/button";
import { useAppSelector } from "@/Redux/hooks";


export default function Header() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   const root = document.documentElement;
  //   root.classList.toggle("dark", !isDarkMode); // Toggle 'dark' class
  //   setIsDarkMode(!isDarkMode); // Update state
  // };

  const user = useAppSelector((state) => state.auth.user)


  return (
    <header className="py-4 px-4 md:px-6 lg:px-8 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b border-border">
      <div className="flex items-center space-x-4">
        <a href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-primary">Aura</span>
        </a>
        <nav className="hidden md:flex space-x-4">
          <a href="#features" className="text-sm font-medium hover:text-primary">Features</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</a>
          <a href="#" className="text-sm font-medium hover:text-primary">Pricing</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        {/* <Button onClick={toggleTheme} variant="default">{!isDarkMode ? 'dark' : 'light'}  </Button> */}

        {
         user ? (<Button variant="outline" className="rounded-lg" >
            <a href="/login">Sign up</a>
          </Button>) : (<Button variant="outline" className="rounded-lg" >
            <a href="/login">Log in</a>
          </Button>)
        }

        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
          <a href="/home"> Get Started</a>
        </Button>
      </div>
    </header>
  );
}
