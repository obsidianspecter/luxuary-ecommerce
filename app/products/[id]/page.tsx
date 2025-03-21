"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Minus, Plus } from "lucide-react"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useCart } from "@/components/cart-provider"

// Mock product data with real images
const allProducts = [
  {
    id: "w1",
    name: "Cashmere Sweater",
    price: 890,
    description:
      "Crafted from the finest cashmere, this sweater offers exceptional softness and warmth. The relaxed silhouette ensures a comfortable fit for everyday elegance.",
    details: ["100% cashmere", "Relaxed fit", "Ribbed crew neck, cuffs and hem", "Dry clean only", "Made in Italy"],
    care: "Dry clean only. Store folded in a drawer or on a shelf. For longer storage periods, we recommend using a garment bag to protect from dust.",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1608257735467-f69f7b339c8a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1624136362266-d4e6fac1b4a3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    colors: ["Ivory", "Camel", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "women",
    relatedProducts: ["w2", "w3", "w6"],
  },
  {
    id: "m1",
    name: "Men's Cashmere Sweater",
    price: 890,
    description:
      "This luxurious cashmere sweater combines timeless design with exceptional comfort. The premium cashmere provides natural temperature regulation and a soft touch against the skin.",
    details: ["100% cashmere", "Regular fit", "Ribbed crew neck, cuffs and hem", "Dry clean only", "Made in Italy"],
    care: "Dry clean only. Store folded in a drawer or on a shelf. For longer storage periods, we recommend using a garment bag to protect from dust.",
    images: [
      "https://images.unsplash.com/photo-1614975059251-992f11792b9f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1614975058789-64200b3096d4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1614975058787-e4ff5f2f1fc0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1614975058962-f03cb4dc0713?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    colors: ["Gray", "Navy", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "men",
    relatedProducts: ["m2", "m3", "m6"],
  },
  {
    id: "h1",
    name: "Cashmere Throw",
    price: 990,
    description:
      "Add a touch of luxury to your home with this sumptuous cashmere throw. Perfect for draping over a sofa or bed, it provides warmth and comfort while elevating your interior décor.",
    details: ["100% cashmere", "Dimensions: 130 x 180 cm", "Fringed edges", "Dry clean only", "Made in Italy"],
    care: "Dry clean only. Store in a cool, dry place. Avoid direct sunlight to prevent fading.",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=3171&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1540730930991-a9286a5f5020?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600369672770-985fd30004eb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=3171&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
    colors: ["Ivory", "Gray", "Beige"],
    sizes: ["One Size"],
    category: "home",
    relatedProducts: ["h2", "h3", "h4"],
  },
]

interface PageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: PageProps) {
  const { id } = params
  const product = allProducts.find((p) => p.id === id)

  // If product not found
  if (!product) {
    notFound()
  }

  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    })
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  // Get related products
  const relatedProducts = product.relatedProducts.map((id) => allProducts.find((p) => p.id === id)).filter(Boolean)

  return (
    <main className="flex min-h-screen flex-col">
      <MainNavigation />

      {/* Product Details */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative h-[500px] md:h-[600px] w-full">
                <Image
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative h-24 w-full border-2 ${
                      index === currentImageIndex ? "border-black" : "border-transparent"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-light mb-2">{product.name}</h1>
              <p className="text-xl mb-6">${product.price.toLocaleString()}</p>

              <p className="text-muted-foreground mb-8">{product.description}</p>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Color: {selectedColor}</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`h-10 px-4 border ${
                        selectedColor === color ? "border-black" : "border-gray-300 hover:border-gray-400"
                      }`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium">Size: {selectedSize}</h3>
                  <Button variant="link" className="text-sm p-0 h-auto">
                    Size Guide
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`h-10 w-10 flex items-center justify-center border ${
                        selectedSize === size ? "border-black" : "border-gray-300 hover:border-gray-400"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex gap-4 mb-8">
                <div className="flex items-center border border-gray-300">
                  <button className="w-10 h-12 flex items-center justify-center" onClick={decrementQuantity}>
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-10 h-12 flex items-center justify-center">{quantity}</span>
                  <button className="w-10 h-12 flex items-center justify-center" onClick={incrementQuantity}>
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button className="flex-1" onClick={handleAddToCart}>
                  Add to Bag
                </Button>
              </div>

              {/* Product Details Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="details">
                  <AccordionTrigger>Details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.details.map((detail, index) => (
                        <li key={index} className="text-muted-foreground">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="care">
                  <AccordionTrigger>Care</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{product.care}</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Free standard shipping on all orders. Delivery within 3-5 business days.
                    </p>
                    <p className="text-muted-foreground mt-2">
                      Returns accepted within 30 days of delivery. Items must be unworn, unwashed, and with original
                      tags attached.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 px-4 md:px-8 bg-[#f8f5f0]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-light mb-10 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct?.id}>
                  <a
                    href={`/products/${relatedProduct?.id}`}
                    className="block relative h-[400px] w-full overflow-hidden mb-4"
                  >
                    <Image
                      src={relatedProduct?.images[0] || ""}
                      alt={relatedProduct?.name || ""}
                      fill
                      className="object-cover transition-all duration-500 hover:scale-105"
                    />
                  </a>
                  <a href={`/products/${relatedProduct?.id}`} className="block mb-1">
                    <h3 className="text-lg font-light">{relatedProduct?.name}</h3>
                  </a>
                  <p className="text-muted-foreground">${relatedProduct?.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}

