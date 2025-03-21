import Image from "next/image"
import Link from "next/link"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <MainNavigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1594761051656-153faa4ea454?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Artisan crafting fabric"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-light mb-4 text-center">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-2xl text-center font-light">
            A century of craftsmanship and dedication to quality
          </p>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6">Our Heritage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 1924, Luxe Fabrics began as a small family-owned textile mill in the heart of the
                countryside. For nearly a century, we have been dedicated to creating the world's finest fabrics and
                garments, combining traditional craftsmanship with innovative techniques.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our commitment to quality, craftsmanship, and sustainability defines everything we do. We work directly
                with farmers and artisans around the world to source the finest raw materials, ensuring both exceptional
                quality and ethical practices.
              </p>
            </div>
            <div className="relative h-[400px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1558304970-abd589baebe5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Historic photo of our original mill"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light mb-6">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At the heart of our brand are the values that have guided us for generations. These principles shape every
            decision we make and every product we create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-8">
            <h3 className="text-xl font-light mb-4">Craftsmanship</h3>
            <p className="text-muted-foreground mb-6">
              We honor traditional techniques passed down through generations, combined with modern innovation to create
              products of exceptional quality.
            </p>
          </div>
          <div className="bg-white p-8">
            <h3 className="text-xl font-light mb-4">Sustainability</h3>
            <p className="text-muted-foreground mb-6">
              We are committed to responsible practices that respect both people and the planet, from ethical sourcing
              to eco-friendly manufacturing processes.
            </p>
          </div>
          <div className="bg-white p-8">
            <h3 className="text-xl font-light mb-4">Timelessness</h3>
            <p className="text-muted-foreground mb-6">
              We create enduring designs that transcend trends, focusing on quality and style that stands the test of
              time.
            </p>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1594761051656-153faa4ea454?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Artisan at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-light mb-6">Our Craftsmanship</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every Luxe Fabrics product is the result of meticulous attention to detail and expert craftsmanship. Our
                artisans, many of whom have been with us for decades, bring their passion and expertise to each piece
                they create.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From selecting the finest raw materials to the final finishing touches, we maintain the highest
                standards at every stage of production. This dedication to quality ensures that each product not only
                looks beautiful but is built to last.
              </p>
              <Button asChild variant="outline">
                <Link href="/sustainability">Our Sustainability Commitment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light mb-6">Our Leadership</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the team guiding Luxe Fabrics into the future while honoring our rich heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative h-[300px] w-full mb-6">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="CEO portrait"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-light mb-1">Elena Rossi</h3>
            <p className="text-muted-foreground mb-4">Chief Executive Officer</p>
          </div>
          <div className="text-center">
            <div className="relative h-[300px] w-full mb-6">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Creative Director portrait"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-light mb-1">Marco Chen</h3>
            <p className="text-muted-foreground mb-4">Creative Director</p>
          </div>
          <div className="text-center">
            <div className="relative h-[300px] w-full mb-6">
              <Image
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Head of Sustainability portrait"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-light mb-1">Sophia Patel</h3>
            <p className="text-muted-foreground mb-4">Head of Sustainability</p>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Join Our Journey</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our world of timeless luxury and sustainable craftsmanship. Explore our collections and become part
            of our story.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/collections/women">Shop Women</Link>
            </Button>
            <Button asChild>
              <Link href="/collections/men">Shop Men</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/careers">Careers</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

