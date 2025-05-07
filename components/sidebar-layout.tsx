"use client"

import { useState, useEffect } from "react"
import { TrendingLooks } from "@/components/trending-looks"
import { TableOfContents } from "@/components/table-of-contents"
import { useMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SidebarLayout() {
  const isMobile = useMobile()
  const [activeSection, setActiveSection] = useState("trending")

  // Sections for the table of contents
  const sections = [
    { id: "trending", title: "Trending Looks" },
    { id: "celebrities", title: "Celebrity Spotlights" },
    { id: "themes", title: "Gala Themes" },
    { id: "designers", title: "Featured Designers" },
    { id: "history", title: "Met Gala History" },
    { id: "tickets", title: "Tickets & Access" },
  ]

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      for (const { id, element } of sectionElements) {
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <div id="content" className="container mx-auto">
      {isMobile ? (
        <>
          <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-sm p-4 border-b border-gray-800">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="ml-auto">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-gray-950 border-gray-800 text-white">
                <TableOfContents sections={sections} activeSection={activeSection} className="mt-8" />
              </SheetContent>
            </Sheet>
          </div>
          <div className="px-4 py-8">
            <TrendingLooks />
          </div>
        </>
      ) : (
        <div className="flex gap-8 py-12">
          <div className="w-64 shrink-0">
            <div className="sticky top-8">
              <TableOfContents sections={sections} activeSection={activeSection} />
            </div>
          </div>
          <div className="flex-1">
            <TrendingLooks />

            {/* Placeholder sections for other content */}
            {sections.slice(1).map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="min-h-[50vh] mb-16 border border-gray-800 rounded-lg p-8 flex items-center justify-center"
              >
                <h2 className="text-2xl font-bold text-gray-400">{section.title} Content</h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
