import { HeroSection } from "@/components/hero-section"
import { SidebarLayout } from "@/components/sidebar-layout"
import VideoHero from "./components/VideoHero"
import Image from "next/image"

type ImageTags = 'red-carpet' | 'celebrity' | 'fashion' | 'runway'

export default function Home() {
  const imageTags: ImageTags[] = ['red-carpet', 'celebrity', 'fashion', 'runway']
  const images: Record<ImageTags, string> = {
    'red-carpet': 'https://images.pexels.com/photos/2225298/pexels-photo-2225298.jpeg',
    'celebrity': 'https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg',
    'fashion': 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
    'runway': 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg'
  }
  
  return (
    <main className="min-h-screen">
      <section id="hero" className="aspect-video w-full max-w-4xl mx-auto">
        <VideoHero />
      </section>
      <HeroSection />
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto p-4">
        {imageTags.map((tag) => (
          <div key={tag} className="relative w-full h-64">
            <Image
              src={images[tag]}
              alt={tag}
              fill
              className="object-cover rounded-lg shadow"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </section>
      <SidebarLayout />
    </main>
  )
}