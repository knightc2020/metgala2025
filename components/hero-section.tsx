"use client"

import { useEffect, useRef } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error)
      })
    }
  }, [])

  const scrollToContent = () => {
    const contentElement = document.getElementById("content")
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/placeholder.svg?height=1080&width=1920"
      >
        <source src="/met-gala-video.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Met Gala 2025"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </video>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tighter">
          <span className="block">MET GALA</span>
          <span className="block text-rose-400">2025</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-200">
          Fashion's most anticipated night returns with a celebration of timeless elegance and avant-garde innovation
        </p>
        <Button
          onClick={scrollToContent}
          variant="outline"
          size="lg"
          className="rounded-full border-white/20 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white"
        >
          Explore <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
