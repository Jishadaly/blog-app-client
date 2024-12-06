// import Header from '@/components/header'
// import Hero from '@/components/hero'
// import Features from '@/components/features'
// import Testimonials from '@/components/testimonials'
// import CTA from '@/components/cta'
// import Footer from '@/components/footer'

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen flex flex-col bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground">
//       <Header />
//       <main className="flex-1 bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground">
//         <Hero />
//         <div className="h-16 bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground" aria-hidden="true" />
//         <Features />
//         <div className="h-1 bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground" aria-hidden="true" />
//         <Testimonials />
//         <div className="h-16 bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground" aria-hidden="true" />
//         <CTA />
//         <div className="h-16 bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground" aria-hidden="true" />
//       </main>
//       <Footer />
//     </div>
//   )
// }


import Header from '@/components/header';
import Hero from '@/components/hero';
import Features from '@/components/features';
import Testimonials from '@/components/testimonials';
import CTA from '@/components/cta';
import Footer from '@/components/footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="h-16" aria-hidden="true" />
        <Features />
        <div className="h-1" aria-hidden="true" />
        <Testimonials />
        <div className="h-16" aria-hidden="true" />
        <CTA />
        <div className="h-16" aria-hidden="true" />
      </main>
      <Footer />
    </div>
  );
}
