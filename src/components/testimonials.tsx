import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Travel Blogger",
    content: "Aura has transformed the way I share my travel experiences. The platform is intuitive, and the support is fantastic!",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Tech Reviewer",
    content: "As a tech enthusiast, I love how Aura makes it easy to embed rich media in my posts. It's a game-changer for my blog.",
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Food Critic",
    content: "The SEO tools in Aura have significantly increased my blog's visibility. My readership has grown exponentially!",
    avatar: "ER"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col bg-background border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder-avatar.jpg`} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/20 text-primary">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-primary">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

