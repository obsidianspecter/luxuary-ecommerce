import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Collections",
      links: [
        { name: "Women", href: "/collections/women" },
        { name: "Men", href: "/collections/men" },
        { name: "Home", href: "/collections/home" },
        { name: "Gifts", href: "/gifts" },
        { name: "New Arrivals", href: "/new-arrivals" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Shipping & Returns", href: "/shipping-returns" },
        { name: "FAQs", href: "/faqs" },
        { name: "Store Locator", href: "/stores" },
        { name: "Size Guide", href: "/size-guide" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Accessibility", href: "/accessibility" },
      ],
    },
  ]

  return (
    <footer className="bg-[#f8f5f0] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Newsletter */}
        <div className="mb-16 max-w-md mx-auto text-center">
          <h3 className="text-xl font-light mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-muted-foreground mb-6">Stay updated with our latest collections and exclusive offers.</p>
          <div className="flex gap-2">
            <Input type="email" placeholder="Your email address" className="bg-white" />
            <Button>Subscribe</Button>
          </div>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-medium mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social and copyright */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <a
                href="#"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">© {currentYear} Luxe Fabrics. All rights reserved.</div>
          </div>
          <div className="text-sm text-muted-foreground mt-4 flex items-center justify-center">
            <a
              href="https://github.com/obsidianspecter"
              target="_blank"
              rel="noopener noreferrer"
              className="italic hover:text-foreground transition-colors"
            >
              by illusive man
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

