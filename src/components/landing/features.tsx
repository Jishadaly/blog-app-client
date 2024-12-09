import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Pen, Image, Share2, Zap } from 'lucide-react'

const features = [
  {
    title: "Intuitive Editor",
    description: "Write and format your posts with ease using our powerful, yet simple editor.",
    icon: Pen
  },
  {
    title: "Rich Media Support",
    description: "Embed images, videos, and other media to create engaging content.",
    icon: Image
  },
  {
    title: "Social Sharing",
    description: "Share your posts across multiple platforms with a single click.",
    icon: Share2
  },
  {
    title: "Lightning Fast",
    description: "Optimized for speed, ensuring your blog loads quickly for readers.",
    icon: Zap
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Powerful Features for Modern Bloggers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col bg-background border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-2 text-primary" />
                <CardTitle className="text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

