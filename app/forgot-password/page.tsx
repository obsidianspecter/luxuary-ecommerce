"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Please enter your email address")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <MainNavigation />

      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="max-w-md mx-auto w-full lg:max-w-none">
              <Link
                href="/login"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to login
              </Link>

              <div className="mb-8">
                <h1 className="text-3xl font-light mb-2">Reset Password</h1>
                <p className="text-muted-foreground">
                  Enter your email address and we&apos;ll send you a link to reset your password.
                </p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>
              )}

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded mb-6">
                  <h3 className="font-medium text-lg mb-2">Check your email</h3>
                  <p>
                    We&apos;ve sent a password reset link to <strong>{email}</strong>. Please check your inbox and
                    follow the instructions to reset your password.
                  </p>
                  <p className="mt-4 text-sm">
                    Didn&apos;t receive an email? Check your spam folder or{" "}
                    <button onClick={() => setIsSubmitted(false)} className="text-green-800 underline">
                      try again
                    </button>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </form>
              )}
            </div>

            {/* Image */}
            <div className="hidden lg:block relative">
              <Image
                src="https://images.unsplash.com/photo-1618436913605-d405ca3a4322?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Luxury fabric"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  )
}

