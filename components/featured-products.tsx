"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Mock product data with real images
const featuredProducts = [
  {
    id: "1",
    name: "Cashmere Sweater",
    price: 890,
    category: "women",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1608257735467-f69f7b339c8a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    colors: ["Ivory", "Camel", "Navy"],
  },
  {
    id: "2",
    name: "Wool Coat",
    price: 2490,
    category: "men",
    images: [
      "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=3036&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    colors: ["Black", "Charcoal", "Camel"],
  },
  {
    id: "3",
    name: "Silk Scarf",
    price: 450,
    category: "accessories",
    images: [
      "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    colors: ["Blue", "Red", "Green"],
  },
  {
    id: "4",
    name: "Cashmere Throw",
    price: 990,
    category: "home",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=3171&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1540730930991-a9286a5f5020?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    colors: ["Ivory", "Gray", "Beige"],
  },
]

export default function FeaturedProducts() {
  const { addToCart } = useCart()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  )
}

interface Product {
  id: string
  name: string
  price: number
  category: string
  images: string[]
  colors: string[]
}

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleMouseEnter = () => {
    if (product.images.length > 1) {
      setCurrentImageIndex(1)
    }
  }

  const handleMouseLeave = () => {
    setCurrentImageIndex(0)
  }

  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-0">
        <Link
          href={`/products/${product.id}`}
          className="block relative h-[400px] w-full overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={product.images[currentImageIndex] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-all duration-500"
          />
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col items-start pt-4 px-0">
        <Link href={`/products/${product.id}`} className="block mb-1">
          <h3 className="text-lg font-light">{product.name}</h3>
        </Link>
        <p className="text-muted-foreground mb-2">${product.price.toLocaleString()}</p>
        <div className="flex gap-2 mb-4">
          {product.colors.map((color) => (
            <span key={color} className="text-sm text-muted-foreground">
              {color}
            </span>
          ))}
        </div>
        <Button variant="outline" className="w-full" onClick={() => onAddToCart(product)}>
          Add to Bag
        </Button>
      </CardFooter>
    </Card>
  )
}

