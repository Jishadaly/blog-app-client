import { Button } from '@/components/ui/button'

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Blogging Journey?</h2>
        <p className="text-xl mb-8 text-primary-foreground/80">
          Join thousands of writers and creators who are already using Aura to share their stories with the world.
        </p>
        <Button size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
          Get Started for Free
        </Button>
      </div>
    </section>
  )
}

