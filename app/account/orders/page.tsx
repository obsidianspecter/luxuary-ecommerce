import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock orders data
const orders = [
  {
    id: "ORD-12345",
    date: "March 15, 2023",
    status: "Delivered",
    total: 1290,
    items: [
      {
        id: "w1",
        name: "Cashmere Sweater",
        price: 890,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3",
      },
      {
        id: "w6",
        name: "Cashmere Scarf",
        price: 400,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
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
        id: "w6",
        name: "Silk Scarf",
        price: 450,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      },
    ],
  },
  {
    id: "ORD-12343",
    date: "January 15, 2023",
    status: "Delivered",
    total: 3280,
    items: [
      {
        id: "w4",
        name: "Cashmere Coat",
        price: 2290,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      },
      {
        id: "w5",
        name: "Silk Dress",
        price: 990,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2783&auto=format&fit=crop&ixlib=rb-4.0.3",
      },
    ],
  },
]

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-light">Order History</h2>
        <div className="w-full sm:w-auto">
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="recent">Recent Orders</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id} className="overflow-hidden">
              <div className="bg-muted p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Processing"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                  <p className="font-medium">${order.total.toLocaleString()}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative h-20 w-16 flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
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
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-6">
                  <Button asChild variant="outline">
                    <Link href={`/account/orders/${order.id}`}>Order Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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
    </div>
  )
}

