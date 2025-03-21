"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Package, Truck, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock order data
const orderData = {
  id: "ORD-12345",
  date: "March 15, 2023",
  status: "Delivered",
  total: 1290,
  subtotal: 1290,
  shipping: 0,
  tax: 103.2,
  discount: 0,
  paymentMethod: "Visa •••• 4242",
  shippingAddress: {
    name: "Emma Wilson",
    line1: "123 Park Avenue",
    line2: "Apt 4B",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "United States",
  },
  billingAddress: {
    name: "Emma Wilson",
    line1: "123 Park Avenue",
    line2: "Apt 4B",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "United States",
  },
  items: [
    {
      id: "w1",
      name: "Cashmere Sweater",
      price: 890,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3",
      color: "Ivory",
    },
    {
      id: "w6",
      name: "Cashmere Scarf",
      price: 400,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      color: "Camel",
    },
  ],
  timeline: [
    {
      status: "Order Placed",
      date: "March 15, 2023 - 10:23 AM",
      completed: true,
    },
    {
      status: "Processing",
      date: "March 15, 2023 - 11:45 AM",
      completed: true,
    },
    {
      status: "Shipped",
      date: "March 16, 2023 - 2:30 PM",
      completed: true,
    },
    {
      status: "Delivered",
      date: "March 18, 2023 - 11:15 AM",
      completed: true,
    },
  ],
}

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("details")
  const { id } = params

  // In a real app, you would fetch the order data based on the ID
  const order = orderData

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

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
            href="/account/orders"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Orders
          </Link>
          <h2 className="text-xl font-light">Order {order.id}</h2>
          <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm ${
              order.status === "Delivered"
                ? "bg-green-100 text-green-800"
                : order.status === "Shipped"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {order.status}
          </span>
          <Button variant="outline" size="sm">
            Track Order
          </Button>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="details">Order Details</TabsTrigger>
            <TabsTrigger value="tracking">Tracking</TabsTrigger>
            <TabsTrigger value="invoice">Invoice</TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Items</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {order.items.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex gap-4"
                        >
                          <div className="relative h-24 w-20 flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <Link href={`/products/${item.id}`} className="font-medium hover:underline">
                              {item.name}
                            </Link>
                            <p className="text-sm text-muted-foreground">Color: {item.color}</p>
                            <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                            <p>${item.price.toLocaleString()}</p>
                          </div>
                          <div className="flex flex-col items-end justify-between">
                            <Button asChild variant="ghost" size="sm">
                              <Link href={`/products/${item.id}`}>View Product</Link>
                            </Button>
                            <Button variant="outline" size="sm">
                              Buy Again
                            </Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Shipping Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1 text-muted-foreground">
                        <p>{order.shippingAddress.name}</p>
                        <p>{order.shippingAddress.line1}</p>
                        {order.shippingAddress.line2 && <p>{order.shippingAddress.line2}</p>}
                        <p>
                          {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}
                        </p>
                        <p>{order.shippingAddress.country}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Billing Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1 text-muted-foreground">
                        <p>{order.billingAddress.name}</p>
                        <p>{order.billingAddress.line1}</p>
                        {order.billingAddress.line2 && <p>{order.billingAddress.line2}</p>}
                        <p>
                          {order.billingAddress.city}, {order.billingAddress.state} {order.billingAddress.postalCode}
                        </p>
                        <p>{order.billingAddress.country}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${order.subtotal.toLocaleString()}</span>
                      </div>
                      {order.discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount</span>
                          <span>-${order.discount.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>{order.shipping === 0 ? "Free" : `$${order.shipping.toLocaleString()}`}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>${order.tax.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between font-medium pt-4 border-t border-gray-200">
                        <span>Total</span>
                        <span>${order.total.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-medium mb-2">Payment Method</h4>
                      <p className="text-muted-foreground">{order.paymentMethod}</p>
                    </div>

                    <div className="mt-6 flex flex-col gap-2">
                      <Button variant="outline" size="sm">
                        Return Items
                      </Button>
                      <Button variant="outline" size="sm">
                        Download Invoice
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tracking">
            <Card>
              <CardHeader>
                <CardTitle>Order Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  <div className="space-y-8">
                    {order.timeline.map((event, index) => (
                      <motion.div
                        key={event.status}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-10"
                      >
                        <div className="absolute left-0 top-1 flex items-center justify-center h-8 w-8 rounded-full bg-white border border-gray-200">
                          {event.status === "Order Placed" && <Package className="h-4 w-4 text-blue-500" />}
                          {event.status === "Processing" && <Clock className="h-4 w-4 text-yellow-500" />}
                          {event.status === "Shipped" && <Truck className="h-4 w-4 text-purple-500" />}
                          {event.status === "Delivered" && <CheckCircle className="h-4 w-4 text-green-500" />}
                        </div>
                        <div>
                          <h4 className="font-medium">{event.status}</h4>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="invoice">
            <Card>
              <CardHeader>
                <CardTitle>Invoice</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center p-8">
                  <p className="text-muted-foreground mb-4">
                    You can download your invoice or print it for your records.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button>Download PDF</Button>
                    <Button variant="outline">Print Invoice</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}

