"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { User, ShoppingBag, Heart, MapPin, CreditCard, Settings, LogOut, ChevronRight, Bell } from "lucide-react"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface AccountLayoutProps {
  children: React.ReactNode
}

export default function AccountLayout({ children }: AccountLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  // Check if user is logged in
  useEffect(() => {
    setIsMounted(true)
    // In a real app, you would check authentication status here
  }, [])

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    router.push("/login")
  }

  const navigationItems = [
    { name: "Account Overview", href: "/account", icon: User },
    { name: "Orders", href: "/account/orders", icon: ShoppingBag },
    { name: "Wishlist", href: "/account/wishlist", icon: Heart },
    { name: "Addresses", href: "/account/addresses", icon: MapPin },
    { name: "Payment Methods", href: "/account/payment", icon: CreditCard },
    { name: "Notifications", href: "/account/notifications", icon: Bell },
    { name: "Account Settings", href: "/account/settings", icon: Settings },
  ]

  if (!isMounted) {
    return null // Prevent hydration errors
  }

  return (
    <main className="flex min-h-screen flex-col">
      <MainNavigation />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-12 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-light"
            >
              My Account
            </motion.h1>

            {/* Mobile navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  Menu <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-2 mt-8">
                  <AnimatePresence>
                    {navigationItems.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className={`flex items-center py-2 px-3 rounded-md ${
                              pathname === item.href ? "bg-muted font-medium" : "hover:bg-muted/50"
                            }`}
                          >
                            <Icon className="mr-3 h-5 w-5" />
                            {item.name}
                          </Link>
                        </motion.div>
                      )
                    })}
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: navigationItems.length * 0.05 }}
                      onClick={handleLogout}
                      className="flex items-center py-2 px-3 rounded-md text-red-600 hover:bg-red-50 mt-4"
                    >
                      <LogOut className="mr-3 h-5 w-5" />
                      Sign Out
                    </motion.button>
                  </AnimatePresence>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block">
              <motion.nav
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-1 sticky top-24"
              >
                <AnimatePresence>
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center py-2 px-3 rounded-md ${
                            pathname === item.href ? "bg-muted font-medium" : "hover:bg-muted/50"
                          }`}
                        >
                          <Icon className="mr-3 h-5 w-5" />
                          {item.name}
                        </Link>
                      </motion.div>
                    )
                  })}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: navigationItems.length * 0.05 }}
                    onClick={handleLogout}
                    className="flex items-center py-2 px-3 rounded-md text-red-600 hover:bg-red-50 w-full text-left mt-8"
                  >
                    <LogOut className="mr-3 h-5 w-5" />
                    Sign Out
                  </motion.button>
                </AnimatePresence>
              </motion.nav>
            </aside>

            {/* Main content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={pathname}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  )
}

