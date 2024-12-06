// import { Button } from '@/components/ui/button'
// import Image from 'next/image'

// export default function Hero() {
//   return (
//     <section className="py-20 px-4 md:px-6 lg:px-8 text-center bg-gradient-to-b from-background to-secondary/30">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
//           Unleash Your Creativity with Aura
//         </h1>
//         <p className="text-xl md:text-2xl text-muted-foreground mb-8">
//           The ultimate blogging platform for writers, thinkers, and creators. Share your stories, ideas, and passions with the world.
//         </p>
//         <div className="flex justify-center space-x-4 mb-12">
//           <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Start Writing</Button>
//           <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">Learn More</Button>
//         </div>
//       </div>
//       <div className="mt-12 max-w-5xl mx-auto">
//         <Image
//           src="/placeholder.svg"
//           alt="Aura Blog Platform"
//           width={1000}
//           height={500}
//           className="rounded-lg shadow-xl"
//         />
//       </div>
//     </section>
//   )
// }

export default function Hero() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 text-center bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Unleash Your Creativity with Aura
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          The ultimate blogging platform for writers, thinkers, and creators. Share your stories, ideas, and passions with the world.
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <button className="px-6 py-3 text-lg bg-primary text-primary-foreground rounded-lg hover:bg-primary/90">
            Start Writing
          </button>
          <button className="px-6 py-3 text-lg border border-primary text-primary rounded-lg hover:bg-primary/10">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-12 max-w-5xl mx-auto">
        <img
          src="/placeholder.svg"
          alt="Aura Blog Platform"
          width="1000"
          height="500"
          className="rounded-lg shadow-xl"
        />
      </div>
    </section>
  );
}