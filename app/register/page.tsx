"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Register() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const passType = searchParams.get("pass")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    secondFirstName: "",
    secondLastName: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData)
    // For this example, we'll just redirect to a hypothetical payment page
    router.push("/payment")
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Card className="max-w-md mx-auto bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Register for Holi 2025</CardTitle>
          <CardDescription>{passType === "stage" ? "Stage Pass - ₹350" : "Couple Pass - ₹500"}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" required onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" required onChange={handleChange} />
              </div>
              {passType === "couple" && (
                <>
                  <div>
                    <Label htmlFor="secondFirstName">Second Person's First Name</Label>
                    <Input
                      id="secondFirstName"
                      name="secondFirstName"
                      required={passType === "couple"}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="secondLastName">Second Person's Last Name</Label>
                    <Input
                      id="secondLastName"
                      name="secondLastName"
                      required={passType === "couple"}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" required onChange={handleChange} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between gap-4">
          <Link href="/" className="w-full">
            <Button variant="outline" className="w-full">
              Return to Home
            </Button>
          </Link>
          <Button type="submit" className="w-full">
            Proceed to Payment
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

