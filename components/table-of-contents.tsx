"use client"

import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  sections: { id: string; title: string }[]
  activeSection: string
  className?: string
}

export function TableOfContents({ sections, activeSection, className }: TableOfContentsProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={cn("space-y-4", className)}>
      <h3 className="text-lg font-semibold tracking-tight">On This Page</h3>
      <nav>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "text-sm transition-colors hover:text-white w-full text-left flex items-center py-1",
                  activeSection === section.id ? "text-white font-medium" : "text-gray-400",
                )}
              >
                <div
                  className={cn(
                    "mr-2 h-1 w-1 rounded-full",
                    activeSection === section.id ? "bg-rose-400" : "bg-gray-600",
                  )}
                />
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
