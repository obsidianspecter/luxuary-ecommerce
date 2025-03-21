"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function DeleteAccountPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [reason, setReason] = useState("")
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!password) {
      setError("Please enter your password to confirm")
      return
    }

    if (!confirmDelete) {
      setError("Please confirm that you want to delete your account")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/login")
    }, 2000)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
      <motion.div variants={item}>
        <Link
          href="/account/settings"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Settings
        </Link>
        <h2 className="text-xl font-light">Delete Account</h2>
      </motion.div>

      <motion.div variants={item}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-red-600">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Delete Your Account
            </CardTitle>
            <CardDescription>
              This action is permanent and cannot be undone. All your data will be permanently deleted.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">{error}</div>
            )}

            <form onSubmit={handleDeleteAccount} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="reason">Why are you deleting your account? (Optional)</Label>
                <Input
                  id="reason"
                  as="textarea"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Enter your password to confirm</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="confirm"
                  checked={confirmDelete}
                  onCheckedChange={(checked) => setConfirmDelete(checked as boolean)}
                  required
                />
                <Label htmlFor="confirm" className="font-normal leading-tight">
                  I understand that this action is permanent and cannot be undone. All my data, including order history,
                  saved addresses, and payment methods will be permanently deleted.
                </Label>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-end">
                <Button type="button" variant="outline" onClick={() => router.push("/account/settings")}>
                  Cancel
                </Button>
                <Button type="submit" variant="destructive" disabled={isLoading || !confirmDelete}>
                  {isLoading ? "Processing..." : "Delete Account"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

