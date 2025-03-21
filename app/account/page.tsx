"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Heart, MapPin, CreditCard, Settings, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock user data
const user = {
  firstName: "Emma",
  lastName: "Wilson",
  email: "emma.wilson@example.com",
  joinDate: "January 2023",
}

// Mock recent orders
const recentOrders = [
  {
    id: "ORD-12345",
    date: "March 15, 2023",
    status: "Delivered",
    total: 1290,
    items: [
      {
        name: "Cashmere Sweater",
        image:
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3",
      },
    ],
  },
  {
    id: "ORD-12344",
    date: "February 28, 2023",
    status: "Delivered",
    total: 450,
    items: [
      {
        name: "Silk Scarf",
        image:
          "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      },
    ],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function AccountPage() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle>Account Overview</CardTitle>
            <CardDescription>Welcome back, {user.firstName}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Account Details</h3>
                <p className="text-muted-foreground">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-muted-foreground">{user.email}</p>
                <p className="text-muted-foreground text-sm mt-1">Member since {user.joinDate}</p>
                <Button asChild variant="link" className="px-0 mt-2">
                  <Link href="/account/settings">Edit Profile</Link>
                </Button>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Default Shipping Address</h3>
                <p className="text-muted-foreground">Emma Wilson</p>
                <p className="text-muted-foreground">123 Park Avenue</p>
                <p className="text-muted-foreground">New York, NY 10001</p>
                <p className="text-muted-foreground">United States</p>
                <Button asChild variant="link" className="px-0 mt-2">
                  <Link href="/account/addresses">Manage Addresses</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <h2 className="text-xl font-light mb-4">Recent Orders</h2>
        {recentOrders.length > 0 ? (
          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex gap-4 items-center">
                        <div className="relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0">
                          <Image
                            src={order.items[0].image || "/placeholder.svg"}
                            alt={order.items[0].name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                          <p className="text-sm">
                            <span
                              className={`inline-block px-2 py-0.5 rounded-full text-xs ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-2 md:mt-0">
                        <p className="font-medium">${order.total.toLocaleString()}</p>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/account/orders/${order.id}`}>View Order</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            <div className="text-center mt-6">
              <Button asChild variant="outline">
                <Link href="/account/orders">View All Orders</Link>
              </Button>
            </div>
          </div>
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-4">You haven&apos;t placed any orders yet.</p>
              <Button asChild>
                <Link href="/collections/women">Start Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </motion.div>

      <motion.div variants={item}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <ShoppingBag className="h-8 w-8 mb-2" />
                <h3 className="font-medium mb-1">Orders</h3>
                <p className="text-sm text-muted-foreground mb-4">View and track your orders</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/account/orders">View Orders</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Heart className="h-8 w-8 mb-2" />
                <h3 className="font-medium mb-1">Wishlist</h3>
                <p className="text-sm text-muted-foreground mb-4">Products you&apos;ve saved</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/account/wishlist">View Wishlist</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <MapPin className="h-8 w-8 mb-2" />
                <h3 className="font-medium mb-1">Addresses</h3>
                <p className="text-sm text-muted-foreground mb-4">Manage your addresses</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/account/addresses">Manage</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <CreditCard className="h-8 w-8 mb-2" />
                <h3 className="font-medium mb-1">Payment</h3>
                <p className="text-sm text-muted-foreground mb-4">Manage payment methods</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/account/payment">Manage</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Bell className="h-8 w-8 mb-2" />
                <h3 className="font-medium mb-1">Notifications</h3>
                <p className="text-sm text-muted-foreground mb-4">Manage your notifications</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/account/notifications">Manage</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Settings className="h-8 w-8 mb-2" />
                <h3 className="font-medium mb-1">Settings</h3>
                <p className="text-sm text-muted-foreground mb-4">Update your preferences</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/account/settings">Edit Settings</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

