"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

const colors = ["#FF5F6D", "#FFC371", "#38ef7d", "#11998e", "#FC466B", "#3F5EFB"]

export default function Home() {
  const [bgColor, setBgColor] = useState(colors[0])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgColor(colors[Math.floor(Math.random() * colors.length)])
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-1000 ease-in-out"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-white mb-6 sm:mb-8 md:mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Holi 2025 Celebration
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-center text-white mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Join us for the most colorful event of the year!
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Stage Pass"
                width={400}
                height={200}
                className="w-full object-cover h-48 transition-transform duration-300 hover:scale-105"
              />
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Stage Pass</CardTitle>
                <CardDescription>Get close to the action!</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-purple-600">₹350</p>
              </CardContent>
              <CardFooter>
                <Link href="/register?pass=stage" passHref className="w-full">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg py-6 transition-transform duration-300 hover:scale-105">
                    Select Stage Pass
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Card className="bg-white/90 backdrop-blur-sm overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Couple Pass"
                width={400}
                height={200}
                className="w-full object-cover h-48 transition-transform duration-300 hover:scale-105"
              />
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Couple Pass</CardTitle>
                <CardDescription>Celebrate together!</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-red-600">₹500</p>
              </CardContent>
              <CardFooter>
                <Link href="/register?pass=couple" passHref className="w-full">
                  <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white text-lg py-6 transition-transform duration-300 hover:scale-105">
                    Select Couple Pass
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-white text-lg sm:text-xl mb-3 sm:mb-4">Don't miss out on this vibrant celebration!</p>
          <p className="text-white text-base sm:text-lg">Date: March 15, 2025</p>
          <p className="text-white text-base sm:text-lg">Venue: Holi Square, Colorful City</p>
        </motion.div>
      </div>
    </div>
  )
}

