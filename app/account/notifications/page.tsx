"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Mail, Tag, Package, CreditCard, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock notifications data
const notifications = [
  {
    id: "1",
    title: "Your order has been shipped",
    message: "Order #ORD-12345 has been shipped and is on its way to you.",
    date: "2 hours ago",
    read: false,
    type: "order",
    icon: Package,
  },
  {
    id: "2",
    title: "Payment successful",
    message: "Your payment for order #ORD-12345 has been successfully processed.",
    date: "1 day ago",
    read: true,
    type: "payment",
    icon: CreditCard,
  },
  {
    id: "3",
    title: "New collection available",
    message: "Our Spring/Summer collection is now available. Discover the latest styles.",
    date: "3 days ago",
    read: true,
    type: "marketing",
    icon: Tag,
  },
  {
    id: "4",
    title: "Account security alert",
    message: "We noticed a login from a new device. Please verify it was you.",
    date: "1 week ago",
    read: false,
    type: "security",
    icon: AlertTriangle,
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

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [notificationsList, setNotificationsList] = useState(notifications)

  const markAllAsRead = () => {
    setNotificationsList(
      notificationsList.map((notification) => ({
        ...notification,
        read: true,
      })),
    )
  }

  const clearAll = () => {
    setNotificationsList([])
  }

  const filteredNotifications =
    activeTab === "all"
      ? notificationsList
      : activeTab === "unread"
        ? notificationsList.filter((n) => !n.read)
        : notificationsList.filter((n) => n.type === activeTab)

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-light">Notifications</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={markAllAsRead}>
            Mark all as read
          </Button>
          <Button variant="outline" size="sm" onClick={clearAll}>
            Clear all
          </Button>
        </div>
      </motion.div>

      <motion.div variants={item}>
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="order">Orders</TabsTrigger>
            <TabsTrigger value="payment">Payments</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            {filteredNotifications.length > 0 ? (
              <div className="space-y-4">
                {filteredNotifications.map((notification, index) => {
                  const Icon = notification.icon
                  return (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <Card className={notification.read ? "" : "border-l-4 border-l-primary"}>
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex gap-4">
                            <div
                              className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                                notification.type === "order"
                                  ? "bg-blue-100 text-blue-600"
                                  : notification.type === "payment"
                                    ? "bg-green-100 text-green-600"
                                    : notification.type === "marketing"
                                      ? "bg-purple-100 text-purple-600"
                                      : "bg-red-100 text-red-600"
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                <h4 className="font-medium">{notification.title}</h4>
                                <span className="text-xs text-muted-foreground">{notification.date}</span>
                              </div>
                              <p className="text-muted-foreground mt-1">{notification.message}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No notifications to display.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </motion.div>

      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Manage how you receive notifications.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground">
                        Receive email notifications about your account, orders, and promotions.
                      </p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <Package className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">Order Updates</h4>
                      <p className="text-sm text-muted-foreground">Receive notifications about your order status.</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <Tag className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">Promotional Emails</h4>
                      <p className="text-sm text-muted-foreground">
                        Receive emails about sales, new arrivals, and special offers.
                      </p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">Security Alerts</h4>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications about security-related activities on your account.
                      </p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

