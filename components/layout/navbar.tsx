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
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-12">
      <nav className="flex items-center justify-between max-w-7xl mx-auto py-4 px-8 border-b border-[#f5f5f5]">
        <Link href="/" className=" text-text-light  text-[2rem] font-black font-['wegato']" prefetch={false}>
          DecorCo
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-light hover:text-[#1a1a1a] transition-colors duration-300 text-lg font-medium"
              prefetch={false}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-text-light [&_svg]:size-8 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="w-8 h-8"/> :<Menu className="w-8 h-8" />}
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
      </div>
    </header>
  )
}
