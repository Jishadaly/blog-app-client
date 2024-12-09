import Header from "@/components/home/Header";
import Footer from "./footer";

// export default function Layout({ children }: { children: React.ReactNode }) {
//     return (
//         <div className="min-h-screen bg-white flex flex-col">
//             <Header />
//             <main className="flex-grow">{children}</main>
//             <Footer />
//         </div>
//     );
// }


// import React from 'react'

import { Outlet } from 'react-router-dom'



function Layout() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            {/* <main className="flex-grow flex relative"> */}
                <Outlet />
            {/* </main> */}
            <Footer/>
        </div>
  )
}

export default Layout