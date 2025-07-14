import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary-dark text-text-light py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
        <div className="space-y-4">
          <Link href="/" className="text-3xl font-serif tracking-wider" prefetch={false}>
            DecorCo
          </Link>
          <p className="text-gray-400 text-sm">Elevating spaces with timeless design and unparalleled craftsmanship.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-accent-gold transition-colors" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-accent-gold transition-colors" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-accent-gold transition-colors" aria-label="Twitter">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-accent-gold transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-accent-gold transition-colors" prefetch={false}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent-gold transition-colors" prefetch={false}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-accent-gold transition-colors" prefetch={false}>
                  Media
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-gold transition-colors" prefetch={false}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-accent-gold transition-colors" prefetch={false}>
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent-gold transition-colors" prefetch={false}>
                  Furniture Sourcing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent-gold transition-colors" prefetch={false}>
                  Space Planning
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent-gold transition-colors" prefetch={false}>
                  Renovation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-400">
            123 Design Street, Suite 456
            <br />
            City, State 12345
            <br />
            United States
          </p>
          <p className="text-gray-400">
            Email: info@decorco.com
            <br />
            Phone: (123) 456-7890
          </p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} DecorCo. All rights reserved.
      </div>
    </footer>
  )
}
