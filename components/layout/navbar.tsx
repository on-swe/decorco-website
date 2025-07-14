"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Media", href: "/media" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark bg-opacity-80 backdrop-blur-sm py-4 px-6 md:px-12 shadow-lg">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-serif text-text-light tracking-wider" prefetch={false}>
          DecorCo
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-light hover:text-accent-gold transition-colors duration-300 text-lg font-medium"
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-text-light"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-primary-dark bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-text-light text-3xl font-serif hover:text-accent-gold transition-colors duration-300"
            onClick={() => setIsOpen(false)}
            prefetch={false}
          >
            {link.name}
          </Link>
        ))}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-6 right-6 text-text-light"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation"
        >
          <X className="h-8 w-8" />
        </Button>
      </div>
    </header>
  )
}
