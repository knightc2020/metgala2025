import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface LookCard {
  id: number
  image: string
  celebrity: string
  designer: string
  description: string
  likes: number
  trending?: boolean
}

export function TrendingLooks() {
  const looks: LookCard[] = [
    {
      id: 1,
      image: "/images/teyana-taylor-ruth-e-carter-met-gala-2025.webp",
      celebrity: "Teyana Taylor",
      designer: "Ruth E. Carter",
      description: "Crimson pinstripe couture suit with sculptural shoulder and feathered hat",
      likes: 41200,
      trending: true,
    },
    {
      id: 2,
      image: "/images/emma-chamberlain-met-gala-2025.webp",
      celebrity: "Emma Chamberlain",
      designer: "Custom Designer",
      description: "Navy pinstripe cutout gown with asymmetrical neckline and sleek silhouette",
      likes: 39300,
      trending: true,
    },
    {
      id: 3,
      image: "/images/colman-domingo-valentino-met-gala-2025.webp",
      celebrity: "Colman Domingo",
      designer: "Valentino",
      description: "Regal cape look in pleated blue with sequined shoulder armor by Valentino",
      likes: 36700,
    },
    {
      id: 4,
      image: "/images/rihanna-marc-jacobs-met-gala-2025.webp",
      celebrity: "Rihanna",
      designer: "Marc Jacobs",
      description: "Tailored pinstripe corset gown with oversized jacket and wide-brim hat by Marc Jacobs",
      likes: 52100,
    },
    {
      id: 5,
      image: "/placeholder.svg?height=600&width=400",
      celebrity: "Dua Lipa",
      designer: "Balenciaga",
      description: "Avant-garde silhouette with architectural elements and holographic accents",
      likes: 36500,
    },
    {
      id: 6,
      image: "/placeholder.svg?height=600&width=400",
      celebrity: "A$AP Rocky",
      designer: "Rick Owens",
      description: "Deconstructed streetwear with couture techniques and unexpected material combinations",
      likes: 33800,
    },
    {
      id: 7,
      image: "/placeholder.svg?height=600&width=400",
      celebrity: "Billie Eilish",
      designer: "Iris van Herpen",
      description: "Sustainable creation using innovative biomaterials and 3D-printed elements",
      likes: 39200,
    },
    {
      id: 8,
      image: "/placeholder.svg?height=600&width=400",
      celebrity: "Chadwick Boseman",
      designer: "Louis Vuitton",
      description: "Tribute piece honoring the actor's legacy with Afrofuturistic elements",
      likes: 47600,
      trending: true,
    },
    {
      id: 9,
      image: "/placeholder.svg?height=600&width=400",
      celebrity: "Lady Gaga",
      designer: "Schiaparelli",
      description: "Multi-layered performance piece with dramatic transformations on the red carpet",
      likes: 43500,
    },
    {
      id: 10,
      image: "/placeholder.svg?height=600&width=400",
      celebrity: "Jared Leto",
      designer: "Maison Margiela",
      description: "Boundary-pushing ensemble with surrealist elements and unexpected accessories",
      likes: 31200,
    },
    {
      id: 11,
      image: "/placeholder.svg?height=600&width=400",
      celebrity: "Lizzo",
      designer: "Thom Browne",
      description: "Body-positive statement piece with intricate handcrafted details and musical motifs",
      likes: 35700,
    },
    {
      id: 12,
      image: "/placeholder.svg?height=600&width=400",
      celebrity: "Kendall Jenner",
      designer: "Givenchy",
      description: "Minimalist silhouette with maximalist embellishments and optical illusion elements",
      likes: 40300,
    },
  ]

  return (
    <section id="trending" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 tracking-tight">Trending Looks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {looks.map((look) => (
          <Card key={look.id} className="bg-gray-900 border-gray-800 overflow-hidden group">
            <div className="relative aspect-[2/3] overflow-hidden">
              <Image
                src={look.image || "/placeholder.svg"}
                alt={`${look.celebrity} wearing ${look.designer}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {look.trending && (
                <Badge className="absolute top-2 right-2 bg-rose-500 hover:bg-rose-600">Trending</Badge>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{look.celebrity}</h3>
                <span className="text-sm text-gray-400">{look.likes.toLocaleString()} likes</span>
              </div>
              <p className="text-sm text-gray-400 mb-2">by {look.designer}</p>
              <p className="text-sm line-clamp-2 text-gray-300">{look.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
