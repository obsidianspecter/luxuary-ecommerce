import Link from "next/link"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock wishlist data
const wishlistItems = [
  {
    id: "w1",
    name: "Cashmere Sweater",
    price: 890,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3",
    colors: ["Ivory", "Camel", "Navy"],
    inStock: true,
  },
  {
    id: "m2",
    name: "Wool Coat",
    price: 2490,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    colors: ["Black", "Charcoal", "Camel"],
    inStock: true,
  },
  {
    id: "h1",
    name: "Cashmere Throw",
    price: 990,
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=3171&auto=format&fit=crop&ixlib=rb-4.0.3",
    colors: ["Ivory", "Gray", "Beige"],
    inStock: false,
  },
]

export default function WishlistPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-light">My Wishlist</h2>
        <p className="text-sm text-muted-foreground">{wishlistItems.length} items</p>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="space-y-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="relative h-32 w-24 flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <Link href={`/products/${item.id}`} className="font-medium hover:underline">
                          {item.name}
                        </Link>
                        <p className="text-muted-foreground">${item.price.toLocaleString()}</p>
                        <div className="flex gap-2 mt-1">
                          {item.colors.map((color) => (
                            <span key={color} className="text-sm text-muted-foreground">
                              {color}
                            </span>
                          ))}
                        </div>
                        <p className={`text-sm mt-2 ${item.inStock ? "text-green-600" : "text-red-600"}`}>
                          {item.inStock ? "In Stock" : "Out of Stock"}
                        </p>
                      </div>
                      <button className="text-muted-foreground hover:text-foreground transition-colors">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Remove from wishlist</span>
                      </button>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button className="w-full sm:w-auto" disabled={!item.inStock}>
                        Add to Bag
                      </Button>
                      <Button asChild variant="outline" className="w-full sm:w-auto">
                        <Link href={`/products/${item.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground mb-4">Your wishlist is empty.</p>
            <Button asChild>
              <Link href="/collections/women">Start Shopping</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

