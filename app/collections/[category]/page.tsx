import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock product data with real images
const products = {
  women: [
    {
      id: "w1",
      name: "Cashmere Sweater",
      price: 890,
      images: [
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["Ivory", "Camel", "Navy"],
    },
    {
      id: "w2",
      name: "Silk Blouse",
      price: 690,
      images: [
        "https://images.unsplash.com/photo-1551163943-3f7aefc47fe9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["White", "Black", "Blue"],
    },
    {
      id: "w3",
      name: "Wool Trousers",
      price: 790,
      images: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["Black", "Navy", "Gray"],
    },
    {
      id: "w4",
      name: "Cashmere Coat",
      price: 2290,
      images: [
        "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["Camel", "Black", "Gray"],
    },
    {
      id: "w5",
      name: "Silk Dress",
      price: 1290,
      images: [
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2783&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["Black", "Navy", "Burgundy"],
    },
    {
      id: "w6",
      name: "Cashmere Scarf",
      price: 450,
      images: [
        "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["Camel", "Gray", "Red"],
    },
  ],
  men: [
    {
      id: "m1",
      name: "Cashmere Sweater",
      price: 890,
      images: [
        "https://images.unsplash.com/photo-1614975059251-992f11792b9f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["Gray", "Navy", "Black"],
    },
    {
      id: "m2",
      name: "Wool Coat",
      price: 2490,
      images: [
        "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["Black", "Charcoal", "Camel"],
    },
    {
      id: "m3",
      name: "Cotton Shirt",
      price: 390,
      images: [
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["White", "Blue", "Striped"],
    },
    {
      id: "m4",
      name: "Wool Trousers",
      price: 790,
      images: [
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["Navy", "Gray", "Black"],
    },
    {
      id: "m5",
      name: "Leather Belt",
      price: 350,
      images: [
        "https://images.unsplash.com/photo-1624005340901-e6cffc4e3a32?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["Black", "Brown"],
    },
    {
      id: "m6",
      name: "Cashmere Scarf",
      price: 450,
      images: [
        "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["Navy", "Gray", "Burgundy"],
    },
  ],
  home: [
    {
      id: "h1",
      name: "Cashmere Throw",
      price: 990,
      images: [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=3171&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["Ivory", "Gray", "Beige"],
    },
    {
      id: "h2",
      name: "Linen Bedding Set",
      price: 790,
      images: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["White", "Natural", "Gray"],
    },
    {
      id: "h3",
      name: "Wool Cushion",
      price: 290,
      images: [
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["Ivory", "Gray", "Navy"],
    },
    {
      id: "h4",
      name: "Cashmere Blanket",
      price: 1290,
      images: [
        "https://images.unsplash.com/photo-1600369672770-985fd30004eb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3",
      ],
      colors: ["Beige", "Gray", "Blue"],
    },
  ],
}

interface PageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: PageProps) {
  const { category } = params

  // Check if category exists
  if (!products[category as keyof typeof products]) {
    notFound()
  }

  const categoryProducts = products[category as keyof typeof products]
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)

  // Category banner images
  const categoryBanners = {
    women:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    men: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    home: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3",
  }

  return (
    <main className="flex min-h-screen flex-col">
      <MainNavigation />

      {/* Hero Banner */}
      <section className="relative h-[40vh] w-full">
        <Image
          src={categoryBanners[category as keyof typeof categoryBanners] || "/placeholder.svg?height=800&width=1600"}
          alt={`${categoryTitle} collection`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-light mb-4">{categoryTitle} Collection</h1>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Filter
            </Button>
            <div className="text-sm text-muted-foreground">{categoryProducts.length} products</div>
          </div>
          <div className="w-full sm:w-auto">
            <Select defaultValue="featured">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {categoryProducts.map((product) => (
              <div key={product.id}>
                <Link href={`/products/${product.id}`} className="block relative h-[400px] w-full overflow-hidden mb-4">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-all duration-500 hover:scale-105"
                  />
                </Link>
                <Link href={`/products/${product.id}`} className="block mb-1">
                  <h3 className="text-lg font-light">{product.name}</h3>
                </Link>
                <p className="text-muted-foreground mb-2">${product.price.toLocaleString()}</p>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <span key={color} className="text-sm text-muted-foreground">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

