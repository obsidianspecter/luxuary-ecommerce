"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"

export default function CheckoutPage() {
  const { cartItems, subtotal, clearCart } = useCart()
  const [activeStep, setActiveStep] = useState<"shipping" | "payment" | "review">("shipping")
  const [orderPlaced, setOrderPlaced] = useState(false)

  const shipping = 0 // Free shipping
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  const handlePlaceOrder = () => {
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <main className="flex min-h-screen flex-col">
        <MainNavigation />

        <section className="py-16 px-4 md:px-8 flex-1">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-light mb-4">Thank You for Your Order!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Your order has been placed successfully. We've sent a confirmation email with all the details.
              </p>
              <p className="text-muted-foreground mb-2">Order Number: #LF{Math.floor(Math.random() * 1000000)}</p>
              <p className="text-muted-foreground">Estimated Delivery: 3-5 business days</p>
            </div>

            <div className="flex gap-4 justify-center">
              <Button asChild variant="outline">
                <Link href="/account">Track Order</Link>
              </Button>
              <Button asChild>
                <Link href="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col">
      <MainNavigation />

      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-light mb-10 text-center">Checkout</h1>

          {/* Checkout Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Tabs
                defaultValue="shipping"
                value={activeStep}
                onValueChange={(value) => setActiveStep(value as "shipping" | "payment" | "review")}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                  <TabsTrigger value="payment" disabled={activeStep === "shipping"}>
                    Payment
                  </TabsTrigger>
                  <TabsTrigger value="review" disabled={activeStep !== "review"}>
                    Review
                  </TabsTrigger>
                </TabsList>

                {/* Shipping Tab */}
                <TabsContent value="shipping" className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-xl font-light">Contact Information</h2>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <div>
                        <Label />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                      </div>
                    </div>

                    <h2 className="text-xl font-light pt-4">Shipping Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                        <Input id="apartment" />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" />
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Select defaultValue="us">
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="state">State/Province</Label>
                        <Select defaultValue="ny">
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ny">New York</SelectItem>
                            <SelectItem value="ca">California</SelectItem>
                            <SelectItem value="tx">Texas</SelectItem>
                            <SelectItem value="fl">Florida</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP/Postal Code</Label>
                        <Input id="zip" />
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full md:w-auto" onClick={() => setActiveStep("payment")}>
                        Continue to Payment <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Payment Tab */}
                <TabsContent value="payment" className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-xl font-light">Payment Method</h2>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-md p-4">
                        <div className="flex items-center gap-2">
                          <input type="radio" id="credit-card" name="payment-method" defaultChecked />
                          <Label htmlFor="credit-card">Credit Card</Label>
                        </div>
                        <div className="mt-4 space-y-4 pl-6">
                          <div>
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input id="card-number" placeholder="1234 5678 9012 3456" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Expiration Date</Label>
                              <Input id="expiry" placeholder="MM/YY" />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="name-on-card">Name on Card</Label>
                            <Input id="name-on-card" />
                          </div>
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-md p-4">
                        <div className="flex items-center gap-2">
                          <input type="radio" id="paypal" name="payment-method" />
                          <Label htmlFor="paypal">PayPal</Label>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-xl font-light pt-4">Billing Address</h2>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="same-address" defaultChecked />
                        <Label htmlFor="same-address">Same as shipping address</Label>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <Button variant="outline" onClick={() => setActiveStep("shipping")}>
                        Back to Shipping
                      </Button>
                      <Button onClick={() => setActiveStep("review")}>
                        Continue to Review <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Review Tab */}
                <TabsContent value="review" className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-xl font-light">Review Your Order</h2>

                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-4">
                        <h3 className="font-medium mb-2">Shipping Information</h3>
                        <p className="text-muted-foreground">John Doe</p>
                        <p className="text-muted-foreground">123 Main St, Apt 4B</p>
                        <p className="text-muted-foreground">New York, NY 10001</p>
                        <p className="text-muted-foreground">United States</p>
                        <p className="text-muted-foreground">john.doe@example.com</p>
                        <p className="text-muted-foreground">(123) 456-7890</p>
                      </div>

                      <div className="border-b border-gray-200 pb-4">
                        <h3 className="font-medium mb-2">Payment Method</h3>
                        <p className="text-muted-foreground">Credit Card ending in 3456</p>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Order Items</h3>
                        <div className="space-y-4">
                          {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4">
                              <div className="relative h-20 w-16 flex-shrink-0">
                                <Image
                                  src={item.images[0] || "/placeholder.svg"}
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  Color: {item.colors[0]} | Quantity: {item.quantity}
                                </p>
                                <p>${(item.price * item.quantity).toLocaleString()}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <Button variant="outline" onClick={() => setActiveStep("payment")}>
                        Back to Payment
                      </Button>
                      <Button onClick={handlePlaceOrder}>Place Order</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-[#f8f5f0] p-6">
                <h2 className="text-xl font-light mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative h-16 w-12 flex-shrink-0">
                        <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-gray-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {item.quantity}
                        </div>
                        <Image
                          src={item.images[0] || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Color: {item.colors[0]}</p>
                      </div>
                      <div className="text-right">
                        <p>${(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-4 border-t border-gray-300">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toLocaleString()}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-medium pt-4 border-t border-gray-300">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

