"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X } from "lucide-react"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { Input } from "@/components/ui/input"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)

  const shipping = 0 // Free shipping
  const discount = promoApplied ? subtotal * 0.1 : 0 // 10% discount if promo applied
  const total = subtotal - discount + shipping

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setPromoApplied(true)
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      <MainNavigation />

      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-light mb-10 text-center">Shopping Bag</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl mb-6">Your shopping bag is empty</p>
              <Button asChild>
                <Link href="/collections/women">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-6 pb-8 border-b border-gray-200">
                      <div className="relative h-32 w-24 flex-shrink-0">
                        <Image
                          src={item.images[0] || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="text-lg font-light mb-1">{item.name}</h3>
                            <p className="text-muted-foreground mb-2">${item.price.toLocaleString()}</p>
                            <p className="text-sm text-muted-foreground mb-4">Color: {item.colors[0]}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <X className="h-5 w-5" />
                            <span className="sr-only">Remove item</span>
                          </button>
                        </div>
                        <div className="flex items-center border border-gray-300 w-fit">
                          <button
                            className="w-8 h-8 flex items-center justify-center"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 h-8 flex items-center justify-center">{item.quantity}</span>
                          <button
                            className="w-8 h-8 flex items-center justify-center"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-[#f8f5f0] p-6">
                  <h2 className="text-xl font-light mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (10%)</span>
                        <span>-${discount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping.toLocaleString()}`}</span>
                    </div>
                    <div className="flex justify-between font-medium pt-4 border-t border-gray-300">
                      <span>Total</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <p className="text-sm mb-2">Promo Code</p>
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code"
                        className="bg-white"
                      />
                      <Button variant="outline" onClick={handleApplyPromo}>
                        Apply
                      </Button>
                    </div>
                    {promoApplied && <p className="text-sm text-green-600 mt-2">Promo code applied successfully!</p>}
                  </div>

                  <Button asChild className="w-full">
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

