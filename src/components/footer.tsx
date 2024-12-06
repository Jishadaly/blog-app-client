// import Link from 'next/link'

// export default function Footer() {
//   return (
//     <footer className="py-12 px-4 md:px-6 lg:px-8 border-t border-border bg-secondary/30">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="font-semibold mb-4 text-primary">Product</h3>
//             <ul className="space-y-2">
//               <li><Link href="#" className="text-muted-foreground hover:text-primary">Features</Link></li>
//               <li><Link href="#" className="text-muted-foreground hover:text-primary">Pricing</Link></li>
//               <li><Link href="#" className="text-muted-foreground hover:text-primary">Tutorials</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-4 text-primary">Company</h3>
//             <ul className="space-y-2">
//               <li><Link href="#" className="text-muted-foreground hover:text-primary">About</Link></li>
//               <li><Link href="#" className="text-muted-foreground hover:text-primary">Careers</Link></li>
//               <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-4 text-primary">Resources</h3>
//             <ul className="space-y-2">
//               <li><Link href="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
//               <li><Link href="#" className="text-muted-foreground hover:text-primary">Documentation</Link></li>
//               <li><Link href="#" className="text-muted-foreground hover:text-primary">Community</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-4 text-primary">Legal</h3>
//             <ul className="space-y-2">
//               <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
//               <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
//               <li><Link href="#" className="text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-12 text-center text-muted-foreground">
//           <p>&copy; {new Date().getFullYear()} Aura Blog Platform. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }


export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 lg:px-8 border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-primary">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aura Blog Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
