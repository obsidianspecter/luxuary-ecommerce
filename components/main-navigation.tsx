"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useCart } from "@/components/cart-provider"

export default function MainNavigation() {
  const pathname = usePathname()
  const { cartItems } = useCart()
  const [searchOpen, setSearchOpen] = useState(false)

  const mainCategories = [
    {
      name: "Women",
      href: "/collections/women",
      subcategories: [
        { name: "Clothing", href: "/collections/women/clothing" },
        { name: "Accessories", href: "/collections/women/accessories" },
        { name: "Shoes", href: "/collections/women/shoes" },
      ],
    },
    {
      name: "Men",
      href: "/collections/men",
      subcategories: [
        { name: "Clothing", href: "/collections/men/clothing" },
        { name: "Accessories", href: "/collections/men/accessories" },
        { name: "Shoes", href: "/collections/men/shoes" },
      ],
    },
    {
      name: "Home",
      href: "/collections/home",
      subcategories: [
        { name: "Textiles", href: "/collections/home/textiles" },
        { name: "Decor", href: "/collections/home/decor" },
      ],
    },
    { name: "Gifts", href: "/gifts" },
    { name: "About", href: "/about" },
    { name: "GitHub", href: "/github" },
  ]

  return (
    <header className="border-b border-gray-200">
      {/* Top announcement bar */}
      <div className="bg-[#f8f5f0] py-2 px-4 text-center text-sm">Complimentary shipping on all orders</div>

      {/* Main navigation */}
      <div className="px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-end py-4">
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-6 mt-4">
                  {mainCategories.map((category) => (
                    <div key={category.name}>
                      <Link href={category.href} className="text-lg font-light hover:text-gray-600 transition-colors">
                        {category.name}
                      </Link>
                      {category.subcategories && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {category.subcategories.map((subcategory) => (
                            <Link
                              key={subcategory.name}
                              href={subcategory.href}
                              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                              {subcategory.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="mt-auto py-6 border-t border-gray-200">
                  <div className="flex flex-col gap-4">
                    <Link href="/account" className="text-sm hover:text-gray-600 transition-colors">
                      Account
                    </Link>
                    <Link href="/stores" className="text-sm hover:text-gray-600 transition-colors">
                      Store Locator
                    </Link>
                    <Link href="/contact" className="text-sm hover:text-gray-600 transition-colors">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex-1 flex justify-start lg:justify-center lg:flex-none">
            <Link href="/" className="text-2xl font-light">
              LUXE FABRICS
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 flex-1">
            {mainCategories.map((category) => (
              <div key={category.name} className="relative group">
                {category.subcategories ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center text-sm font-light hover:text-gray-600 transition-colors focus:outline-none">
                        {category.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      <DropdownMenuItem asChild>
                        <Link href={category.href} className="w-full">
                          All {category.name}
                        </Link>
                      </DropdownMenuItem>
                      {category.subcategories.map((subcategory) => (
                        <DropdownMenuItem key={subcategory.name} asChild>
                          <Link href={subcategory.href} className="w-full">
                            {subcategory.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={category.href}
                    className={`text-sm font-light hover:text-gray-600 transition-colors ${
                      pathname === category.href ? "text-black" : "text-gray-600"
                    }`}
                  >
                    {category.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link href="/cart">
                <ShoppingBag className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-gray-200 py-4 px-4 md:px-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

