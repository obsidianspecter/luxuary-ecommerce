import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import FeaturedProducts from "@/components/featured-products"
import CategoryBanner from "@/components/category-banner"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <MainNavigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Luxury fabric closeup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-light mb-4 text-center">Timeless Elegance</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center font-light">
            Crafted with the world's finest materials for those who appreciate quality
          </p>
          <div className="flex gap-4">
            <Button asChild className="bg-white text-black hover:bg-white/90">
              <Link href="/collections/women">Women's Collection</Link>
            </Button>
            <Button asChild className="bg-white text-black hover:bg-white/90">
              <Link href="/collections/men">Men's Collection</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-light mb-6">Our Heritage</h2>
            <p className="text-lg text-muted-foreground mb-6">
              For over a century, we have been dedicated to creating the world's finest fabrics and garments. Our
              commitment to quality, craftsmanship, and sustainability defines everything we do.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">Discover Our Story</Link>
            </Button>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1594761051656-153faa4ea454?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Artisan crafting fabric"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Category Banners */}
      <section className="py-12 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">Explore Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryBanner
              title="Women"
              href="/collections/women"
              imageSrc="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3"
            />
            <CategoryBanner
              title="Men"
              href="/collections/men"
              imageSrc="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3"
            />
            <CategoryBanner
              title="Home"
              href="/collections/home"
              imageSrc="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-light mb-12 text-center">Featured Products</h2>
        <FeaturedProducts />
      </section>

      {/* Sustainability Section */}
      <section className="py-20 px-4 md:px-8 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1532413992378-f169ac26fff0?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Sustainable materials"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light mb-6">Our Commitment to Sustainability</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe in responsible luxury. From sourcing the finest natural materials to implementing
                eco-friendly manufacturing processes, sustainability is at the heart of our philosophy.
              </p>
              <Button asChild variant="outline">
                <Link href="/sustainability">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

